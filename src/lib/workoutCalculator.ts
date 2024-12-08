import { Workout } from '@/types/workout';
import { roundToNearestPlate } from './utils';

export function generateWorkoutPlan(oneRepMax: number): Workout[] {
  const workouts: Workout[] = [];

  // Generate 16 workouts alternating between high-rep and single-rep focused
  for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
      // Even workouts: High-rep focused (8x8 to 1x1)
      const setCount = 8 - Math.floor(i / 2);
      // Start at 70% and increment by 5% for each high-rep workout
      const percentageIncrease = Math.floor(i / 2) * 5;
      const weightPercentage = 70 + percentageIncrease;

      workouts.push({
        id: i.toString(),
        reps: setCount,
        setCount: setCount,
        weight: roundToNearestPlate(oneRepMax * (weightPercentage / 100)),
        completed: false
      });
    } else {
      // Odd workouts: Single-rep focused (8x1 at 90% 1RM)
      workouts.push({
        id: i.toString(),
        reps: 1,
        setCount: 8,
        weight: roundToNearestPlate(oneRepMax * 0.9), // 90% of 1RM
        completed: false
      });
    }
  }

  return workouts;
}
