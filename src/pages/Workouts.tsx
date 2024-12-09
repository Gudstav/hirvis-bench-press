import { WorkoutList } from '@/components/WorkoutList';
import { useWorkout } from '@/context/WorkoutContext';

export const Workouts = () => {
  const { state, dispatch } = useWorkout();

  const handleToggleWorkout = (id: number) => {
    dispatch({ type: 'TOGGLE_WORKOUT', payload: id });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  return (
    <WorkoutList
      workouts={state.workouts}
      currentWorkout={state.currentWorkout}
      onToggleWorkout={handleToggleWorkout}
      onReset={handleReset}
    />
  );
};
