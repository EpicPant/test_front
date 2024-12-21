import { createContext, useState, useContext, ReactNode } from 'react';

interface Module {
  id: string;
  name: string;
  youtubeLink?: string;
  type: 'video' | 'pdf' | 'audio';
  sphereId: string;
}

interface ModulesContextType {
  modules: Module[];
  addModule: (module: Omit<Module, 'id'>) => void;
}

const ModulesContext = createContext<ModulesContextType | undefined>(undefined);

export function ModulesProvider({ children }: { children: ReactNode }) {
  const [modules, setModules] = useState<Module[]>([]);

  const addModule = (module: Omit<Module, 'id'>) => {
    setModules(prev => [...prev, { ...module, id: crypto.randomUUID() }]);
  };

  return (
    <ModulesContext.Provider value={{ modules, addModule }}>
      {children}
    </ModulesContext.Provider>
  );
}

export const useModules = () => {
  const context = useContext(ModulesContext);
  if (!context) throw new Error('useModules must be used within ModulesProvider');
  return context;
}; 