import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';
import { roundToNearestPlate } from '@/lib/utils';
import { useWorkout } from '@/context/WorkoutContext';
import { InfoBottomSheet } from './InfoBottomSheet';

export function OneRepMaxForm() {
  const { state, dispatch } = useWorkout();
  const [value, setValue] = useState(state.oneRepMax.toString());
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weight = Number(value);

    if (!value) {
      setError('Please enter your 1 Rep Max');
      return;
    }

    if (isNaN(weight) || weight <= 0) {
      setError('Please enter a valid weight');
      return;
    }

    setError('');
    handleSetOneRepMax(roundToNearestPlate(weight));
  };

  const handleSetOneRepMax = (value: number) => {
    dispatch({ type: 'SET_1RM', payload: value });
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6" />
          Enter Your 1 Rep Max
          <div className="ml-auto">
            <InfoBottomSheet />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="oneRepMax">1 Rep Max (in kg)</Label>
            <Input
              id="oneRepMax"
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Enter weight in kg"
              className={error ? 'border-red-500' : ''}
              step="2.5"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <Button type="submit" className="w-full">
            Generate Workout Plan
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
