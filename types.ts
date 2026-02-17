import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export interface ClientItem {
  name: string;
  type: 'Public' | 'Private';
}

export interface ISOCert {
  code: string;
  name: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}