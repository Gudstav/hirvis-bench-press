import { BicepsFlexed, CircleHelp } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from './ui/table';

export const InfoBottomSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CircleHelp className="w-4 h-4 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="max-w-lg mx-auto" side="bottom">
        <SheetHeader>
          <SheetTitle className="text-center">How it works</SheetTitle>
          <SheetDescription className="text-center">
            <HowItWorks />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export const HowItWorks = () => {
  return (
    <>
      <p className="mb-4">
        The idea is to do 2 bench press workouts per week. One that starts with
        high volume reps and progressivly gets heavier with fewer reps. The
        other one focusing on single repetitions to get used do performing
        heavier singles. Always focusing on technique.
      </p>
      <Table className="px-4">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Week</TableHead>
            <TableHead className="text-center">Workout 1</TableHead>
            <TableHead className="text-center">Workout 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>8 x 8 @ 70%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>7 x 7 @ 75%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>6 x 6 @ 80%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>5 x 5 @ 85%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>4 x 4 @ 90%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>3 x 3 @ 95%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7</TableCell>
            <TableCell>2 x 2 @ 100%</TableCell>
            <TableCell>8 x 1 @ 90%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8</TableCell>
            <TableCell className="font-extrabold">1 x 1 @ 105%</TableCell>
            <TableCell className="flex">
              <BicepsFlexed className="w-5 h-5 mx-auto" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
