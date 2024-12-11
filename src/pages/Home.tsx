import { OneRepMaxForm } from '@/components/OneRepMaxForm';
import { BicepsFlexed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatWeight } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useWorkout } from '@/context/WorkoutContext';

export const Home = () => {
  const { getCurrentWorkout } = useWorkout();
  const currentWorkout = getCurrentWorkout();

  return (
    <div className="flex flex-col gap-4">
      <OneRepMaxForm />
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BicepsFlexed className="w-6 h-6" />
            Your next workout
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 px-4 border rounded-lg hover:bg-accent transition-colors">
            <Link to="/workouts" className="py-4 flex-1" viewTransition>
              <h4 className="font-medium text-white">
                {currentWorkout.setCount}x{currentWorkout.reps} @{' '}
                {formatWeight(currentWorkout.weight)}
              </h4>
            </Link>
            <Link to={`/workouts/${currentWorkout.id}`} viewTransition>
              <Button variant="outline" size="icon">
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
