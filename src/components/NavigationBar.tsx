import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Dumbbell, Home, User } from 'lucide-react';
import { NavLink } from 'react-router';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export const NavigationBar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavigationMenu
      className={`
        w-full p-4 bg-background border rounded-xl fixed bottom-4 left-1/2 transform -translate-x-1/2
        transition-transform duration-300
        ${scrollDirection === 'down' ? 'translate-y-[150%]' : 'translate-y-0'}
      `}
    >
      <NavigationMenuList className="flex justify-evenly w-full">
        <NavigationMenuItem className="flex gap-4">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <NavLink to="/" className="flex items-center gap-2 " viewTransition>
              <Home className="w-6 h-6" />
            </NavLink>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <NavLink
              to="/workouts"
              className="flex items-center gap-2"
              viewTransition
            >
              <Dumbbell className="w-6 h-6" />
            </NavLink>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <NavLink
              to="/profile"
              className="flex items-center gap-2"
              viewTransition
            >
              <User className="w-6 h-6" />
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
