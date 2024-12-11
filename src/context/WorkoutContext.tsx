import { createContext, useContext, ReactNode } from 'react';
import { useWorkoutStore } from '@/hooks/useWorkoutStore';
import { WorkoutState, WorkoutAction } from '@/types/workout';

type WorkoutContextType = {
  state: WorkoutState;
  dispatch: React.Dispatch<WorkoutAction>;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

type WorkoutProviderProps = {
  children: ReactNode;
};

export function WorkoutProvider({ children }: WorkoutProviderProps) {
  const { state, dispatch } = useWorkoutStore();

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }

  const getCurrentWorkout = () => {
    const workoutIndex = context.state.currentWorkout - 1;
    return context.state.workouts[workoutIndex];
  };

  return {
    ...context,
    getCurrentWorkout
  };
}
