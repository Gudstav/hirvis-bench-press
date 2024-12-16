import { NavLink } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Dumbbell, Home, User } from 'lucide-react';
import { useScrollDirection } from '@/hooks/useScrollDirection';

export const NavigationBar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavigationMenu
      className={`
        w-full p-2 backdrop-blur-xl border rounded-lg fixed bottom-4 left-1/2 transform -translate-x-1/2
        transition-transform duration-300
        ${scrollDirection === 'down' ? 'translate-y-[150%]' : 'translate-y-0'}
      `}
    >
      <NavigationMenuList className="flex justify-evenly w-full">
        <NavigationMenuItem className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? 'text-primary' : ''}`}
            viewTransition
            aria-label="Home"
          >
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Home className="w-6 h-6" aria-hidden="true" />
            </NavigationMenuLink>
          </NavLink>
          <NavLink
            to="/workouts"
            className={({ isActive }) => `${isActive ? 'text-primary' : ''}`}
            viewTransition
            aria-label="Workouts"
          >
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Dumbbell className="w-6 h-6" aria-hidden="true" />
            </NavigationMenuLink>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => `${isActive ? 'text-primary' : ''}`}
            viewTransition
            aria-label="Profile"
          >
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <User className="w-6 h-6" aria-hidden="true" />
            </NavigationMenuLink>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
