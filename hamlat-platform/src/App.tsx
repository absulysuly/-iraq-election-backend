import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import SocialApp from './apps/social/SocialApp';
import CivicApp from './apps/civic/CivicApp';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/social" replace />} />
          <Route path="/social/*" element={<SocialApp />} />
          <Route path="/civic/*" element={<CivicApp />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
