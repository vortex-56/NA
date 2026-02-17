import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../../constants';
import { Building2, Landmark } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Clientes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instituciones públicas y privadas que confían en nuestros estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 border border-gray-200 rounded-lg bg-gray-50 flex flex-col items-center text-center hover:border-brand-green hover:shadow-md transition-all"
            >
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
                {client.type === 'Public' ? (
                  <Landmark className="text-brand-green h-8 w-8" />
                ) : (
                  <Building2 className="text-blue-600 h-8 w-8" />
                )}
              </div>
              <h3 className="font-bold text-gray-800">{client.name}</h3>
              <span className="text-xs text-gray-500 mt-2 uppercase tracking-wide px-2 py-1 bg-gray-200 rounded">
                Sector {client.type === 'Public' ? 'Público' : 'Privado'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;