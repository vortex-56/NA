import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import { COMPANY_NAME, EMAIL_CONTACT, PHONE_NUMBER } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-green">{COMPANY_NAME}</h3>
            <p className="text-gray-400 text-sm mb-4">
              Expertos en Saneamiento Ambiental. Comprometidos con la calidad, la seguridad y el medio ambiente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-green">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-brand-green">Nuestros Servicios</Link></li>
              <li><Link to="/proyectos" className="hover:text-brand-green">Clientes y Proyectos</Link></li>
              <li><Link to="/libro-de-reclamaciones" className="hover:text-brand-green">Libro de Reclamaciones</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-green" /> 
                <span>+51 {PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-green" /> 
                <span>{EMAIL_CONTACT}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-green" /> 
                <span>Lima, Perú (Cobertura Nacional)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4 text-xs text-gray-500">
             <span>RUC: 20610363294</span>
             <Link to="/libro-de-reclamaciones" className="hover:text-white">Libro de Reclamaciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;