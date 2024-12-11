import { WorkoutState, WorkoutAction } from '@/types/workout';
import { generateWorkoutPlan } from './workoutCalculator';

export function workoutReducer(
  state: WorkoutState,
  action: WorkoutAction
): WorkoutState {
  switch (action.type) {
    case 'SET_1RM': {
      return {
        ...state,
        oneRepMax: action.payload,
        workouts: generateWorkoutPlan(action.payload),
        currentWorkout: 1
      };
    }
    case 'TOGGLE_WORKOUT': {
      const lastCompletedWorkout = state.workouts
        .filter(w =>
          // Keep the workout we're toggling if we're completing it
          w.id === action.payload ? !w.completed : w.completed
        )
        .reduce((max, w) => Math.max(max, w.id), 0);

      return {
        ...state,
        workouts: state.workouts.map(workout =>
          workout.id === action.payload
            ? {
                ...workout,
                completed: !workout.completed,
                date: new Date().toISOString(),
                sets: workout.sets.map(set => ({
                  ...set,
                  completed: !workout.completed
                }))
              }
            : workout
        ),
        currentWorkout: lastCompletedWorkout + 1
      };
    }
    case 'TOGGLE_SET':
      return {
        ...state,
        workouts: state.workouts.map(workout =>
          workout.id === action.payload.workoutId
            ? {
                ...workout,
                completed: workout.sets.every(set =>
                  set.id === action.payload.setId
                    ? !set.completed
                    : set.completed
                ),
                sets: workout.sets.map(set =>
                  set.id === action.payload.setId
                    ? { ...set, completed: !set.completed }
                    : set
                )
              }
            : workout
        )
      };
    case 'RESET_PROGRESS':
      return {
        ...state,
        workouts: state.workouts.map(workout => ({
          ...workout,
          completed: false,
          date: undefined,
          sets: workout.sets.map(set => ({
            ...set,
            completed: false
          }))
        })),
        currentWorkout: 1
      };
    default:
      return state;
  }
}
