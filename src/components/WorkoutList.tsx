import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Workout } from '@/types/workout';
import { RotateCcw } from 'lucide-react';
import { cn, formatWeight } from '@/lib/utils';
import { Link } from 'react-router';
import { useEffect, useRef } from 'react';

interface WorkoutListProps {
  workouts: Workout[];
  currentWorkout: number;
  onToggleWorkout: (index: number) => void;
  onReset: () => void;
}

export function WorkoutList({
  workouts,
  currentWorkout,
  onToggleWorkout,
  onReset
}: WorkoutListProps) {
  const currentWorkoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentWorkoutRef.current) {
      currentWorkoutRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [currentWorkout]);

  const completedWorkouts = workouts.filter(w => w.completed).length;
  const progress = (completedWorkouts / workouts.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Workout Plan</CardTitle>
        <div className="flex items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Progress: {completedWorkouts}/{workouts.length}
          </div>
          <Button variant="outline" size="icon" onClick={onReset}>
            <RotateCcw className="h-4 w-4" />
          </Button>
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
            {workouts.map(workout => (
              <div
                key={workout.id}
                ref={
                  workout.id === currentWorkout ? currentWorkoutRef : undefined
                }
                className="border rounded-lg hover:bg-accent transition-colors overflow-hidden"
              >
                <div className="px-4 flex items-center space-x-4">
                  <Checkbox
                    id={`workout-${workout.id}`}
                    disabled={workout.id > currentWorkout}
                    checked={workout.completed}
                    className="h-5 w-5"
                    onCheckedChange={() => onToggleWorkout(workout.id)}
                  />
                  <Link
                    to={`/workouts/${workout.id}`}
                    className="flex items-center justify-between w-full"
                    viewTransition
                  >
                    <h4
                      className={cn(
                        'font-medium text-white py-4',
                        workout.id > currentWorkout && 'text-muted-foreground'
                      )}
                    >
                      {workout.setCount}x{workout.reps} @{' '}
                      {formatWeight(workout.weight)}
                    </h4>
                    <Button
                      variant="outline"
                      size="icon"
                      disabled={workout.id > currentWorkout}
                    >
                      <ChevronRight />
                    </Button>
                  </Link>
                </div>
                {!workout.completed && (
                  <div
                    className="h-0.5 bg-primary transition-all duration-300"
                    style={{
                      width: `${getProgress(workout)}%`
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

const getProgress = (workout: Workout) => {
  const completedSets = workout.sets.filter(set => set.completed).length;
  return (completedSets / (workout?.setCount ?? 0)) * 100;
};
