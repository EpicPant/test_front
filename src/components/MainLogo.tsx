import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export function MainLogo() {
  return (
    <Link
      to="/"
      className="fixed top-6 left-6 z-50 bg-white w-[64px] h-[64px] rounded-[15px] shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <Brain className="w-[53px] h-[53px] text-indigo-700" />
    </Link>
  );
} 