import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, CircuitBoard, Sprout, Sigma, Languages, List, Hash, Plus, LucideIcon, HomeIcon } from 'lucide-react';
import clsx from 'clsx';
import { CreateSphereModal } from './CreateSphereModal';
import { icons } from 'lucide-react';
import { useSpheres } from '../contexts/SpheresContext';

interface NavigationItem {
  id: string;
  icon?: LucideIcon;
  to: string;
  separator?: boolean;
  primary?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

// Статические элементы навигации
const staticNavigationItems: NavigationItem[] = [
  { id: 'home', to: '/', gradient: true },
  { id: 'sphere', icon: HomeIcon, to: '/sphere'}
];

export function Toolbar() {
  const { spheres } = useSpheres();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bottomNavigationItems: NavigationItem[] = [
    { id: 'list', icon: List, to: '/list', separator: true },
    { id: 'hash', icon: Hash, to: '/hash' },
    { 
      id: 'add', 
      icon: Plus, 
      to: '#',
      onClick: () => setIsModalOpen(true)
    }
  ];

  const allNavigationItems = [
    ...staticNavigationItems,
    ...spheres.map(sphere => ({
      id: sphere.id,
      icon: icons[sphere.icon],
      to: `/sphere/${sphere.id}`,
      separator: false
    } as NavigationItem)),
    ...bottomNavigationItems
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2">
      <nav className="bg-white rounded-full shadow-sm flex flex-col items-center py-2 gap-2 px-3 max-h-[80vh] overflow-y-auto w-[64px]">
        {allNavigationItems.map((item) => (
          <div 
            key={item.id} 
            className={clsx(
              'w-full aspect-square flex justify-center',
              item.separator && 'before:content-[""] before:w-14 before:h-[1px] before:bg-gray-200 before:absolute before:left-1/2 before:-translate-x-1/2 before:-translate-y-2'
            )}
          >
            <Link
              to={item.to}
              onClick={item.onClick}
              className={clsx(
                'w-[50px] h-[50px] aspect-square rounded-full transition-colors flex items-center justify-center',
                item.gradient && 'bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 text-white hover:opacity-90',
                !item.gradient && 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              )}
            >
              {item.icon && <item.icon className="w-[31px] h-[31px] aspect-square" />}
            </Link>
          </div>
        ))}
      </nav>
      <CreateSphereModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateSphere={(sphereData) => {
          // Здесь добавьте логику создания сферы
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}