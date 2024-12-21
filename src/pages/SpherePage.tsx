import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useSpheres } from '../contexts/SpheresContext';
import { CreateModuleModal } from '../components/CreateModuleModal';

interface Module {
  id: string;
  name: string;
  youtubeLink?: string;
  type: 'video' | 'pdf' | 'audio';
  sphereId: string;
}

export function SpherePage() {
  const { sphereId } = useParams();
  const { spheres } = useSpheres();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modules, setModules] = useState<Module[]>([]); // Здесь будут храниться модули

  const currentSphere = spheres.find(sphere => sphere.id === sphereId);

  if (!currentSphere) {
    return <div>Сфера не найдена</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{currentSphere.name}</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">University | lectures</h2>
        <div className="grid grid-cols-4 gap-4">
          {modules.map(module => (
            <div 
              key={module.id}
              className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <h3 className="font-medium">{module.name}</h3>
                {/* Здесь можно добавить дополнительную информацию о модуле */}
              </div>
            </div>
          ))}
          
          {/* Кнопка создания нового модуля */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="aspect-video bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
          >
            <Plus className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </div>

      <CreateModuleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 