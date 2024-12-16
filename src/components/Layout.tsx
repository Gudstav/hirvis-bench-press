import { Outlet } from 'react-router';
import { NavigationBar } from './NavigationBar';

export function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col overflow-x-hidden p-4">
        <main className="container mx-auto mb-3 flex-1 bg-background">
          <Outlet />
        </main>
        <NavigationBar />
      </div>
    </div>
  );
}
