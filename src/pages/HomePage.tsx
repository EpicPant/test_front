import { Plus } from 'lucide-react';
import { RecentCourses } from '../components/RecentCourses';
import { CreateModuleModal } from '../components/CreateModuleModal';
import { CreateSphereModal } from '../components/CreateSphereModal';
import { useState } from 'react';
import { useSpheres } from '../contexts/SpheresContext';
const createButtons = [
  { id: 'sphere', label: 'Create sphere' },
  { id: 'course', label: 'Create course' },
  { id: 'module', label: 'Create module' },
  { id: 'session', label: 'Create session' }
];

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const { addSphere } = useSpheres();

  const handleButtonClick = (buttonId: string) => {
    setActiveModal(buttonId);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Good afternoon, Ivan!</h1>
      
      <section className="mb-12">
        <h2 className="text-lg font-medium text-gray-600 mb-4">Recently visited</h2>
        <RecentCourses />
      </section>

      <div className="flex justify-center">
        <div className="flex gap-2 max-w-xl">
          {createButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              className="flex-1 flex flex-col items-center gap-2.5 py-4"
            >
              <div className="w-16 h-16 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl hover:border-gray-400 transition-colors">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <span className="text-sm text-gray-500">{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeModal === 'sphere' && (
        <CreateSphereModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setActiveModal(null);
          }}
          onCreateSphere={(sphereData) => {
            addSphere(sphereData);
            setIsModalOpen(false);
            setActiveModal(null);
          }}
        />
      )}
      
      {activeModal === 'module' && (
        <CreateModuleModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setActiveModal(null);
          }}
        />
      )}
    </div>
  );
}