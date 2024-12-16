import { HowItWorks } from '@/components/InfoBottomSheet';
import { OneRepMaxForm } from '@/components/OneRepMaxForm';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export const Profile = () => {
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
      <AccordionItem value="item-3">
        <AccordionTrigger>How it works</AccordionTrigger>
        <AccordionContent className="max-w-lg mx-auto text-center">
          <HowItWorks />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
