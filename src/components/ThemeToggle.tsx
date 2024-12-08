import { Moon, Sun } from 'lucide-react';
import { Theme, useTheme } from '@/components/theme-provider/theme-provider';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      value={theme}
      className="justify-start"
      onValueChange={value => {
        if (value) setTheme(value as Theme);
      }}
    >
      <ToggleGroupItem value="light">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark">
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system">System</ToggleGroupItem>
    </ToggleGroup>
  );
}
