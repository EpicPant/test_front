import { X, Plus, Atom, Beaker, Brain, FlaskConical, FlaskRound, Microscope, Pill, Telescope, TestTube, TestTubes, Thermometer} from 'lucide-react';
import { useState } from 'react';

interface CreateSphereModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateSphere: (sphere: { name: string; icon: string }) => void;
}

// Создаем объект с иконками для совместимости с существующим кодом
const icons = {
  Atom,
  Beaker,
  Brain,
  FlaskConical,
  FlaskRound,
  Microscope,
  Pill,
  Telescope,
  TestTube,
  TestTubes,
  Thermometer
} as const;

export function CreateSphereModal({ isOpen, onClose, onCreateSphere }: CreateSphereModalProps) {
  const [selectedIcon, setSelectedIcon] = useState<keyof typeof icons>('Atom');
  const [sphereName, setSphereName] = useState('');
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  // Получаем первые 30 иконок для демонстрации
  const iconList = Object.keys(icons).slice(0, 30) as (keyof typeof icons)[];

  if (!isOpen) return null;

  const IconComponent = icons[selectedIcon];

  const handleCreate = () => {
    if (!sphereName.trim()) return;
    
    onCreateSphere({
      name: sphereName,
      icon: selectedIcon
    });
    
    // Сброс формы
    setSphereName('');
    setSelectedIcon('Atom');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            <span className="text-gray-800">New </span>
            <span className="text-indigo-500">Sphere</span>
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
            className="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl hover:border-gray-300 transition-colors"
          >
            {IconComponent ? (
              <IconComponent className="w-8 h-8 text-gray-600" />
            ) : (
              <Plus className="w-8 h-8 text-gray-400" />
            )}
          </button>
          <input
            type="text"
            placeholder="Name"
            value={sphereName}
            onChange={(e) => setSphereName(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200"
          />
        </div>

        {isIconPickerOpen && (
          <div className="mb-6 p-4 border border-gray-200 rounded-xl">
            <div className="grid grid-cols-6 gap-3 max-h-[200px] overflow-y-auto">
              {iconList.map((iconName) => {
                const Icon = icons[iconName];
                return (
                  <button
                    key={iconName}
                    onClick={() => {
                      setSelectedIcon(iconName);
                      setIsIconPickerOpen(false);
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-gray-600" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <button 
          onClick={handleCreate}
          className="w-full bg-indigo-500 text-white py-3 rounded-xl hover:bg-indigo-600 transition-colors"
        >
          create
        </button>
      </div>
    </div>
  );
} 