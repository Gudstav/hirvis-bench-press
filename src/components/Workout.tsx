import { useWorkout } from '@/context/WorkoutContext';
import { formatWeight } from '@/lib/utils';
import { useParams } from 'react-router';

export const Workout = () => {
  const { id } = useParams();

  // Get the workout matching the id from the context
  const { state } = useWorkout();
  const workout = state.workouts.find(workout => workout.id === id);

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div>
      Workout {workout.setCount}x{workout.reps} @{formatWeight(workout.weight)}
    </div>
  );
};
