import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { WorkoutProvider } from '@/context/WorkoutContext';
import { Profile } from './pages/Profile';
import { ThemeProvider } from './components/theme-provider/theme-provider';
import { Workout } from './components/Workout';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WorkoutProvider>
        <BrowserRouter basename="/hirvis-bench-press">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/workouts/:id" element={<Workout />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WorkoutProvider>
    </ThemeProvider>
  );
}

export default App;
