import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { COMPANY_NAME } from '../../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Clientes', path: '/proyectos' },
    { name: 'Legal', path: '/libro-de-reclamaciones' },
    // Link to Landing Page
    { name: 'Oferta Especial', path: '/oferta-saneamiento', isCta: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Shield className="h-8 w-8 text-brand-green" />
              <span className="font-bold text-xl text-gray-800 tracking-tight hidden sm:block">
                {COMPANY_NAME}
              </span>
              <span className="font-bold text-xl text-gray-800 tracking-tight sm:hidden">
                N.A. INNOVAPERÚ
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  link.isCta 
                    ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse' 
                    : isActive(link.path) 
                      ? 'text-brand-green font-bold' 
                      : 'text-gray-600 hover:text-brand-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                   link.isCta 
                    ? 'bg-red-600 text-white text-center' 
                    : isActive(link.path)
                      ? 'text-brand-green bg-gray-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;