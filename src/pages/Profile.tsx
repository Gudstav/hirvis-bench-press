import { OneRepMaxForm } from '@/components/OneRepMaxForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useWorkout } from '@/context/WorkoutContext';

export const Profile = () => {
  const { state } = useWorkout();
  const oneRepMax = state.oneRepMax;

  console.log(oneRepMax);

  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>One Rep Max </AccordionTrigger>
        <AccordionContent>
          <OneRepMaxForm />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Theme</AccordionTrigger>
        <AccordionContent>
          <ThemeToggle />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
