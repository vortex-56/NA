import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

// Pages
import Home from './pages/corporate/Home';
import Services from './pages/corporate/Services';
import Clients from './pages/corporate/Clients';
import Legal from './pages/corporate/Legal';
import LandingPage from './pages/landing/LandingPage';

// Layout Wrapper for Corporate Pages (includes Nav & Footer)
const CorporateLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <WhatsAppFloat />
  </>
);

// Wrapper to conditionally render layout based on path
const AppContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/oferta-saneamiento';

  if (isLandingPage) {
    return <LandingPage />;
  }

  return (
    <CorporateLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/proyectos" element={<Clients />} />
        <Route path="/libro-de-reclamaciones" element={<Legal />} />
      </Routes>
    </CorporateLayout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;