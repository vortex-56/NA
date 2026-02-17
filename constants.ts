import { Bug, Droplets, Rat, ShieldCheck, Trash2, Home } from 'lucide-react';
import { ServiceItem, ClientItem, ISOCert } from './types';

export const PHONE_NUMBER = "51935380774";
export const COMPANY_NAME = "N.A. INNOVAPERÚ S.A.C.";
export const EMAIL_CONTACT = "contacto@nainnovaperu.com";

export const SERVICES: ServiceItem[] = [
  {
    id: "desratizacion",
    title: "Desratización",
    description: "Control integral de roedores mediante estrategias seguras y efectivas para entornos industriales y urbanos.",
    icon: Rat,
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: "desinsectacion",
    title: "Desinsectación",
    description: "Eliminación de insectos rastreros y voladores utilizando insumos autorizados por MINSA.",
    icon: Bug,
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: "desinfeccion",
    title: "Desinfección",
    description: "Sanitización de ambientes para eliminar virus, bacterias y hongos patógenos.",
    icon: ShieldCheck,
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: "reservorios",
    title: "Limpieza de Reservorios",
    description: "Limpieza y desinfección de cisternas y tanques elevados de agua potable.",
    icon: Droplets,
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: "trampas-grasa",
    title: "Trampas de Grasa",
    description: "Mantenimiento y limpieza técnica de trampas de grasa para industrias alimentarias.",
    icon: Trash2,
    image: "https://picsum.photos/800/600?random=5"
  }
];

export const CLIENTS: ClientItem[] = [
  { name: "Caja Piura", type: "Private" },
  { name: "Municipalidad de Lima", type: "Public" },
  { name: "Red de Salud DIRIS", type: "Public" },
  { name: "Municipalidad de Miraflores", type: "Public" },
  { name: "Clínica San Pablo", type: "Private" },
  { name: "Centros de Salud MINSA", type: "Public" },
  { name: "Colegios Estatales", type: "Public" },
  { name: "Restaurantes Diversos", type: "Private" }
];

export const ISOS: ISOCert[] = [
  { code: "ISO 9001", name: "Calidad", description: "Gestión de calidad en nuestros procesos." },
  { code: "ISO 14001", name: "Medio Ambiente", description: "Compromiso con la gestión ambiental." },
  { code: "ISO 45001", name: "Seguridad", description: "Seguridad y salud en el trabajo." }
];