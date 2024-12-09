import { useEffect, useReducer } from 'react';
import { WorkoutState } from '@/types/workout';
import { workoutReducer } from '@/lib/workoutReducer';

const STORAGE_KEY = 'bench-press-tracker';

const initialState: WorkoutState = {
  oneRepMax: 0,
  workouts: [],
  currentWorkout: 1
};

export function useWorkoutStore() {
  const getInitialState = (): WorkoutState => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(workoutReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return { state, dispatch };
}
