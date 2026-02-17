import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, AlertTriangle, ShieldCheck, PlayCircle, MessageCircle, Star } from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';

// Hook for countdown timer
const useCountdown = (initialMinutes: number) => {
  const [time, setTime] = useState(initialMinutes * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : initialMinutes * 60)); // Reset if 0
    }, 1000);
    return () => clearInterval(timer);
  }, [initialMinutes]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const LandingPage: React.FC = () => {
  const timeLeft = useCountdown(15);
  const [form, setForm] = useState({ name: '', company: '', district: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, vengo de la web. Deseo la oferta de Saneamiento Ambiental.\n\nNombre: ${form.name}\nEmpresa: ${form.company}\nDistrito: ${form.district}\nCelular: ${form.phone}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-20 md:pb-0">
      
      {/* 1. Header Minimalista */}
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-brand-green h-8 w-8" />
            <span className="font-bold text-xl tracking-tighter">N.A. INNOVAPERÚ</span>
          </div>
          <div className="text-sm font-semibold text-red-600 animate-pulse flex items-center gap-2">
             <Clock size={16} /> OFERTA EXPIRA: {timeLeft}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Headline */}
        <div className="text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-yellow-200"
          >
            ATENCIÓN EMPRESAS Y NEGOCIOS EN LIMA
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Evita Multas y Protege tu Salud con el Servicio de <span className="text-brand-green">Saneamiento Ambiental Certificado</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Certificado válido para Municipalidad y DIRIS. Fumigación, Desratización y Desinfección con Tecnología Termonebulizadora.
          </p>
        </div>

        {/* Split Layout: VSL + Benefits vs. Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: VSL & Info */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* VSL Simulation */}
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
              <img 
                src="https://picsum.photos/id/403/800/450" 
                alt="Operarios trabajando" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center text-sm font-medium bg-black/50 p-2 rounded">
                 📹 Mira cómo nuestros operarios con EPP certificado eliminan el 99.9% de plagas.
              </div>
            </div>

            {/* Triggers Bar */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
               <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded border border-red-100 text-sm font-bold">
                 <AlertTriangle size={16} /> Solo 5 cupos hoy
               </div>
               <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded border border-green-100 text-sm font-bold">
                 <ShieldCheck size={16} /> Resolución MINSA
               </div>
            </div>

            {/* Benefits List */}
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900">¿Qué incluye nuestro servicio Premium?</h3>
              <ul className="space-y-3">
                {[
                  "Certificado Válido para Fiscalización Municipal.",
                  "Ficha Técnica de Insumos (No tóxicos para humanos).",
                  "Personal con SCTR y EPP Completo.",
                  "Informe Técnico Fotográfico post-servicio.",
                  "Garantía de servicio: Si vuelven las plagas, volvemos gratis."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 rounded-full p-1">
                      <Check size={14} className="text-brand-green" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof Slider (Static for now) */}
            <div className="pt-4">
              <p className="text-center text-gray-500 text-sm mb-4 font-medium uppercase tracking-wider">Empresas que confían en nosotros</p>
              <div className="flex justify-between items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden gap-4">
                 {['Municipalidad', 'Clinica', 'Industria', 'Colegio'].map((n, i) => (
                   <div key={i} className="flex flex-col items-center">
                     <Star className="text-brand-accent mb-1" />
                     <span className="text-xs font-bold">{n}</span>
                   </div>
                 ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Floating Form */}
          <div className="lg:col-span-5 sticky top-24">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl border-2 border-brand-green overflow-hidden"
            >
              <div className="bg-brand-green p-4 text-center text-white">
                <h3 className="text-xl font-bold">¡COTIZA AHORA!</h3>
                <p className="text-green-100 text-sm">Respuesta en menos de 5 minutos</p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Tu Nombre</label>
                    <input 
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Empresa / Negocio</label>
                    <input 
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Ej. Restaurante Sabor Peruano"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Distrito</label>
                    <input 
                      name="district"
                      required
                      value={form.district}
                      onChange={handleChange}
                      placeholder="Ej. San Borja"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Celular / WhatsApp</label>
                    <input 
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="999 999 999"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                  >
                    <MessageCircle className="group-hover:animate-bounce" />
                    SOLICITAR COTIZACIÓN
                  </button>
                  
                  <p className="text-xs text-center text-gray-400 mt-2">
                    Tus datos están protegidos. No hacemos spam.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Mobile Sticky Button (Only visible on small screens when scrolled past form - simplified here to always show on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 z-50">
        <button 
          onClick={handleSubmit}
          className="w-full bg-brand-green text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 animate-pulse"
        >
          <MessageCircle size={20} /> COTIZAR POR WHATSAPP
        </button>
      </div>

    </div>
  );
};

export default LandingPage;