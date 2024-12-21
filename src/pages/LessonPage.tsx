import { useParams } from 'react-router-dom';
import { Brain, ChevronLeft, ChevronRight, Play, MoreHorizontal } from 'lucide-react';

export function LessonPage() {
  const { lessonId } = useParams();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-gray-600">
          <span>sphere</span>
          <ChevronRight className="w-4 h-4" />
          <span>course</span>
          <ChevronRight className="w-4 h-4" />
          <span>module</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-indigo-600">session</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">20/35</span>
          <Brain className="w-6 h-6 text-indigo-600" />
          <MoreHorizontal className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Habits in the present</h1>
        <div className="prose max-w-none">
          <p>Read what the birthday grandma says about the visitors and answer the question</p>
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
            alt="Birthday celebration"
            className="w-full rounded-lg my-6"
          />
          <ul className="space-y-2 list-disc pl-6">
            <li>This is Tom. Tom usually visits me when he needs some money.</li>
            <li>That's Stacy over there. She is always wearing so much perfume I can't be near her for longer than a minute.</li>
            <li>See that man over there? That's Greg, my husband. He's used to having lunch at 12, but it's 2 p.m. now, and we haven't eaten yet. He must be mad.</li>
            <li>The person standing near him is Jerry, my son. He can't get used to living on his own since we asked him to move out.</li>
            <li>That's Nate. His wife told me that he keeps on leaving his socks all over the place. She tends to talk about her problems a lot.</li>
            <li>My friend Carla might not come to the party. She could be forgetful sometimes.</li>
          </ul>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Why AI is SO super?</h3>
            <textarea
              className="w-full p-4 border border-gray-200 rounded-lg"
              rows={4}
              placeholder="Type your answer here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}