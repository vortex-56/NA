import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent("Hola, deseo más información sobre sus servicios de saneamiento.");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
};

export default WhatsAppFloat;