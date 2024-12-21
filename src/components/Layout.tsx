import { Outlet } from 'react-router-dom';
import { Toolbar } from './Toolbar';
import { MainLogo } from './MainLogo';

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Toolbar />
      <main className="flex-1 p-8">
        <MainLogo />
        <Outlet />
      </main>
    </div>
  );
}