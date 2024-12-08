export type Sets = {
  reps: number;
  setCount: number;
  weight: number;
  completed: boolean;
};

export interface Workout {
  reps: number;
  setCount: number;
  sets?: Sets[];
  weight: number;
  completed: boolean;
  id: string;
  date?: string;
}

export interface WorkoutState {
  oneRepMax: number;
  workouts: Workout[];
  currentWorkout: number;
}

export type WorkoutAction =
  | { type: 'SET_1RM'; payload: number }
  | { type: 'TOGGLE_WORKOUT'; payload: number }
  | { type: 'RESET_PROGRESS' };
