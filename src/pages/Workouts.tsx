import { WorkoutList } from '@/components/WorkoutList';
import { useWorkout } from '@/context/WorkoutContext';

export const Workouts = () => {
  const { state, dispatch } = useWorkout();

  const handleToggleWorkout = (index: number) => {
    dispatch({ type: 'TOGGLE_WORKOUT', payload: index });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  return (
    <WorkoutList
      workouts={state.workouts}
      onToggleWorkout={handleToggleWorkout}
      onReset={handleReset}
    />
  );
};
