import {
  Gauge,
  Zap,
  Wind,
  Scale,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const services: Service[] = [
  {
    slug: "tacografos",
    title: "Centro técnico de tacógrafos",
    shortName: "Tacógrafos",
    description:
      "Instalación, calibración y mantenimiento. Cumplimiento normativo para tu flota.",
    icon: Gauge,
    href: "/servicios/tacografos",
  },
  {
    slug: "electricidad",
    title: "Reparaciones eléctricas",
    shortName: "Electricidad",
    description:
      "Diagnóstico y reparación de luces, alternadores, baterías y sistemas eléctricos.",
    icon: Zap,
    href: "/servicios/electricidad",
  },
  {
    slug: "aire-acondicionado",
    title: "Aire acondicionado",
    shortName: "Aire acondicionado",
    description:
      "Mantenimiento y reparación del climatizador para la comodidad del conductor.",
    icon: Wind,
    href: "/servicios/aire-acondicionado",
  },
  {
    slug: "basculas",
    title: "Instalación de básculas",
    shortName: "Básculas",
    description:
      "Sistemas de pesaje a bordo precisos. Cumple con los límites de carga en carretera.",
    icon: Scale,
    href: "/servicios/basculas",
  },
];

export type TeamMemberData = {
  name: string;
  role: string;
  /** Ruta a la foto en /public. Si no hay, se muestran las iniciales. */
  image?: string;
};

export const team: TeamMemberData[] = [
  {
    name: "Guillermo Álvarez",
    role: "Socio fundador y técnico de tacógrafos",
    image: "/equipo/guillermo.png",
  },
  {
    name: "Ángel Vivó",
    role: "Socio fundador y técnico de tacógrafos",
    image: "/equipo/angel.png",
  },
  {
    name: "Kevin Vivó",
    role: "Administración y gestión",
    image: "/equipo/kevin.png",
  },
  {
    name: "Clara Villarroya",
    role: "Contabilidad y administración",
    image: "/equipo/clara.png",
  },
  {
    name: "Alejandro Estopiña",
    role: "Técnico de taller",
    image: "/equipo/gorra.png",
  },
  {
    name: "Miguel Carrillo",
    role: "Técnico de taller",
    image: "/equipo/gorra.png",
  },
  {
    name: "Manuel Martínez",
    role: "Técnico de taller",
    image: "/equipo/gorra.png",
  },
];

export const contact = {
  phone: "618 617 221",
  phoneRaw: "618617221",
  phoneIntl: "+34 618 617 221",
  phoneIntlRaw: "+34618617221",
  landline: "+34 964 241 031",
  landlineRaw: "+34964241031",
  whatsapp: "https://wa.me/618617221",
  email: "atecsal@atecsal.es",
  address: "Av. de Lairón, 59, Ciudad del Transporte, 12006 Castellón de la Plana",
  maps: "https://maps.app.goo.gl/dXGyGgVxda7GAk1eA",
  hours: "Lunes a viernes, 8:00–13:00 y 15:00–18:00",
};
