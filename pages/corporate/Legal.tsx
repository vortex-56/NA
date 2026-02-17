import React, { useState } from 'react';

const Legal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    dni: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Su reclamo ha sido registrado. Nos pondremos en contacto en un plazo máximo de 15 días hábiles.');
    setFormData({ name: '', dni: '', email: '', phone: '', description: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-brand-green">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Libro de Reclamaciones</h1>
          <p className="text-gray-500 mb-8 text-sm">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green p-3 border" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">DNI / RUC</label>
                <input 
                  type="text" 
                  name="dni" 
                  required 
                  value={formData.dni}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green p-3 border" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green p-3 border" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green p-3 border" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Detalle del Reclamo</label>
              <textarea 
                name="description" 
                rows={4} 
                required 
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-green focus:ring-brand-green p-3 border" 
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button 
                type="submit" 
                className="bg-brand-dark text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Enviar Reclamo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Legal;