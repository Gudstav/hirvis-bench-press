import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from './components/Layout';
import { WorkoutProvider } from '@/context/WorkoutContext';
import { Profile } from './pages/Profile';
import { ThemeProvider } from './components/theme-provider/theme-provider';
import { Workout } from './components/Workout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/workouts',
          element: <Workouts />
        },
        {
          path: '/workouts/:id',
          element: <Workout />
        },
        {
          path: '/profile',
          element: <Profile />
        }
      ]
    }
  ],
  {
    basename: '/hirvis-bench-press'
  }
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WorkoutProvider>
        <RouterProvider router={router} />
      </WorkoutProvider>
    </ThemeProvider>
  );
}

export default App;
