import { format } from 'date-fns';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Workout } from '@/types/workout';
import { RotateCcw } from 'lucide-react';
import { formatWeight } from '@/lib/utils';
import { NavLink } from 'react-router';

interface WorkoutListProps {
  workouts: Workout[];
  onToggleWorkout: (index: number) => void;
  onReset: () => void;
}

export function WorkoutList({
  workouts,
  onToggleWorkout,
  onReset
}: WorkoutListProps) {
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
        <ScrollArea className="pr-4">
          <div className="space-y-4">
            {workouts.map((workout, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <Checkbox
                  id={`workout-${index}`}
                  checked={workout.completed}
                  onCheckedChange={() => onToggleWorkout(index)}
                />
                <label htmlFor={`workout-${index}`} className="flex-1">
                  <h4 className="font-medium">
                    {workout.setCount}x{workout.reps} @{' '}
                    {formatWeight(workout.weight)}
                  </h4>
                  {workout.completed && workout.date && (
                    <p className="text-sm text-muted-foreground">
                      Completed on {format(new Date(workout.date), 'PPP')}
                    </p>
                  )}
                </label>
                <NavLink to={`/workouts/${workout.id}`}>
                  <Button variant="outline" size="icon">
                    <ChevronRight />
                  </Button>
                </NavLink>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
