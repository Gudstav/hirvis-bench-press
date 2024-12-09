import { WorkoutState, WorkoutAction } from '@/types/workout';
import { generateWorkoutPlan } from './workoutCalculator';

export function workoutReducer(
  state: WorkoutState,
  action: WorkoutAction
): WorkoutState {
  switch (action.type) {
    case 'SET_1RM':
      return {
        ...state,
        oneRepMax: action.payload,
        workouts: generateWorkoutPlan(action.payload),
        currentWorkout: 1
      };
    case 'TOGGLE_WORKOUT':
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
        currentWorkout:
          action.payload >= state.currentWorkout
            ? action.payload + 1
            : state.currentWorkout
      };
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
