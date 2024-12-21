import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Apple, Facebook } from 'lucide-react';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Brain className="w-12 h-12 text-indigo-600" />
          <h1 className="text-3xl font-bold ml-2">Study<span className="text-indigo-600">OS</span></h1>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Apple className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
            <Facebook className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          <a href="#" className="text-indigo-600 hover:underline">Forgotten your password?</a>
        </p>
        <p className="mt-4 text-center">
          <button className="text-gray-400 hover:text-gray-500">Sign up</button>
        </p>
      </div>
    </div>
  );
}