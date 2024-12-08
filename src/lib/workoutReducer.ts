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
        workouts: generateWorkoutPlan(action.payload)
      };
    case 'TOGGLE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map((workout, index) =>
          index === action.payload
            ? {
                ...workout,
                completed: !workout.completed,
                date: new Date().toISOString()
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
          date: undefined
        }))
      };
    default:
      return state;
  }
}
