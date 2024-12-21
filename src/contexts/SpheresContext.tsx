import { createContext, useState, useContext, ReactNode } from 'react';
import { icons } from 'lucide-react';

interface Sphere {
  id: string;
  name: string;
  icon: keyof typeof icons;
}

interface SpheresContextType {
  spheres: Sphere[];
  addSphere: (sphere: Omit<Sphere, 'id'>) => void;
}

const SpheresContext = createContext<SpheresContextType | undefined>(undefined);

export function SpheresProvider({ children }: { children: ReactNode }) {
  const [spheres, setSpheres] = useState<Sphere[]>([]);

  const addSphere = (sphere: Omit<Sphere, 'id'>) => {
    setSpheres(prev => [...prev, { ...sphere, id: crypto.randomUUID() }]);
  };

  return (
    <SpheresContext.Provider value={{ spheres, addSphere }}>
      {children}
    </SpheresContext.Provider>
  );
}

export const useSpheres = () => {
  const context = useContext(SpheresContext);
  if (!context) throw new Error('useSpheres must be used within SpheresProvider');
  return context;
}; 