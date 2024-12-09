export type Sets = {
  id: number;
  completed: boolean;
};

export interface Workout {
  reps: number;
  setCount: number;
  sets: Sets[];
  weight: number;
  completed: boolean;
  id: number;
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
  | { type: 'TOGGLE_SET'; payload: { workoutId: number; setId: number } }
  | { type: 'RESET_PROGRESS' };
