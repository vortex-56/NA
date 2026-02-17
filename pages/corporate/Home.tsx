import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ISOS } from '../../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/403/1920/1080" 
            alt="Fondo Saneamiento" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            N.A. INNOVAPERÚ S.A.C.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Especialistas en Saneamiento Ambiental, Control de Plagas y Limpieza Industrial con certificación internacional.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/servicios" className="px-8 py-4 bg-brand-green text-white font-bold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              Nuestros Servicios <ArrowRight size={20} />
            </Link>
            <Link to="/oferta-saneamiento" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
              Solicitar Urgencia
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-brand-green" /> Nuestra Misión
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Brindar servicios de saneamiento ambiental de alta calidad, garantizando la salud pública y la seguridad en los ambientes de nuestros clientes, mediante el uso de tecnología avanzada y personal altamente capacitado.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-brand-green" /> Nuestra Visión
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en saneamiento ambiental en el Perú, reconocida por nuestra excelencia operativa, compromiso ecológico y la confianza depositada por las instituciones públicas y privadas más importantes del país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ISO Certifications */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Certificaciones Internacionales</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Operamos bajo los más estrictos estándares de calidad y seguridad, avalados por nuestras certificaciones ISO.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ISOS.map((iso, index) => (
              <motion.div 
                key={iso.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors border border-gray-700"
              >
                <Award className="h-12 w-12 text-brand-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">{iso.code}</h3>
                <h4 className="text-lg text-brand-green font-semibold mb-3">{iso.name}</h4>
                <p className="text-gray-400 text-sm">{iso.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;