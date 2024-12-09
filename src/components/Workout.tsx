import { useParams } from 'react-router';
import { useWorkout } from '@/context/WorkoutContext';
import { formatWeight } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const Workout = () => {
  const { id } = useParams();

  const { state, dispatch } = useWorkout();
  const workout = state.workouts.find(workout => workout.id === Number(id));

  const completedSets = workout?.sets.filter(set => set.completed).length ?? 0;
  const progress = (completedSets / (workout?.setCount ?? 0)) * 100;

  const handleToggleSet = (setId: number) => {
    dispatch({
      type: 'TOGGLE_SET',
      payload: { workoutId: Number(id), setId }
    });
  };

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          {`Workout ${workout.setCount}x${workout.reps} @ ${formatWeight(
            workout.weight
          )}`}
        </CardTitle>

        <div className="text-sm text-muted-foreground">
          Progress: {completedSets}/{workout.setCount}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-2 bg-secondary mb-4 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <ScrollArea>
          <div className="space-y-4">
            {workout.sets.map((set, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 px-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <Checkbox
                  id={`set-${set.id}`}
                  checked={set.completed}
                  onCheckedChange={() => handleToggleSet(set.id)}
                />
                <label
                  htmlFor={`set-${set.id}`}
                  className="flex-1 py-2 cursor-pointer"
                >
                  <h4 className="font-medium">Set {set.id}</h4>
                </label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
