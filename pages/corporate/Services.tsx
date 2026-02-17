import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales de saneamiento con autorización de MINSA y metodología certificada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-green/10 z-10"></div>
                   <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                   />
                   <div className="absolute top-4 right-4 z-20 bg-white p-2 rounded-full shadow-md">
                     <Icon className="text-brand-green" size={24} />
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link 
                    to="/oferta-saneamiento" 
                    className="inline-flex items-center text-brand-green font-semibold hover:underline mt-auto"
                  >
                    Cotizar servicio <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;