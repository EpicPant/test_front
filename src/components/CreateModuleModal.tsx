import { Dialog } from '@headlessui/react';
import { X, Upload, Youtube } from 'lucide-react';
import { useState } from 'react';
import { useSpheres } from '../contexts/SpheresContext';

interface CreateModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateModuleModal({ isOpen, onClose }: CreateModuleModalProps) {
  const { spheres } = useSpheres();
  const [name, setName] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [selectedSphere, setSelectedSphere] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !selectedSphere) return;

    const newModule = {
      id: crypto.randomUUID(),
      name,
      youtubeLink,
      sphereId: selectedSphere,
      type: 'video' as const
    };

    // Здесь нужно добавить логику сохранения модуля
    // Можно создать новый контекст ModulesContext или использовать существующий SpheresContext

    onClose();
    setName('');
    setYoutubeLink('');
    setSelectedSphere('');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-2xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-xl font-semibold">
              New <span className="text-indigo-600">Module</span>
            </Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200"
            />

            <div className="relative">
              <input
                type="text"
                placeholder="YouTube link"
                value={youtubeLink}
                onChange={(e) => setYoutubeLink(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 pl-10"
              />
              <Youtube className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
            </div>

            <div className="flex gap-4">
              <button type="button" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Upload className="w-5 h-5" />
                PDF
              </button>
              <button type="button" className="flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <Upload className="w-5 h-5" />
                Video/Audio
              </button>
            </div>

            <select
              value={selectedSphere}
              onChange={(e) => setSelectedSphere(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200"
            >
              <option value="">Select Sphere</option>
              {spheres.map((sphere) => (
                <option key={sphere.id} value={sphere.id}>
                  {sphere.name}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Create
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}