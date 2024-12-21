import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { LessonPage } from './pages/LessonPage';
import { SpherePage } from './pages/SpherePage';
import { Layout } from './components/Layout';
import { SpheresProvider } from './contexts/SpheresContext';
import { ModulesProvider } from './contexts/ModulesContext';

function App() {
  return (
    <SpheresProvider>
      <ModulesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="sphere/:sphereId" element={<SpherePage />} />
              <Route path="course/:courseId" element={<CoursePage />} />
              <Route path="lesson/:lessonId" element={<LessonPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ModulesProvider>
    </SpheresProvider>
  );
}

export default App;