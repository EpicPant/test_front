import { useParams } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function CoursePage() {
  const { courseId } = useParams();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Brain className="w-8 h-8 text-indigo-600" />
        <div>
          <h1 className="text-2xl font-bold">Gender affirming care for minors</h1>
          <p className="text-gray-600">
            This module combines vocabulary building, grammar practice, and cultural insights to prepare learners for real-world
            scenarios such as birthday parties, holiday celebrations, and casual get-togethers.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">The Birthday Party (Learn English with a Short Story)</h2>
        <p className="text-gray-600 mb-4">
          Learn English with another short story. This time it's a 300-word story by Konstantine Drug, often used in literature
          classes, full of vivid imagery and with an emotional twist.
        </p>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg">to summary</button>
          <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg">to video</button>
        </div>
      </div>
    </div>
  );
}