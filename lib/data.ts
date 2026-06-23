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
};

export const team: TeamMemberData[] = [
  {
    name: "Guillermo Álvarez Muniesa",
    role: "Socio fundador y técnico de tacógrafos",
  },
  {
    name: "Ángel Vivó Muñoz",
    role: "Socio fundador y técnico de tacógrafos",
  },
  {
    name: "Jordi Ortiz Ortiz",
    role: "Técnico de taller",
  },
  {
    name: "Marin Dinca",
    role: "Técnico de tacógrafos y otras reparaciones",
  },
  {
    name: "Kevin Vivó García",
    role: "Administración y gestión",
  },
  {
    name: "Clara Villarroya Gargallo",
    role: "Contabilidad y administración",
  },
];

export const contact = {
  phone: "618 617 221",
  phoneRaw: "618617221",
  whatsapp: "https://wa.me/618617221",
  email: "atecsal@atecsal.es",
  address: "Av. de Lairón, 59, 12006 Castellón de la Plana",
  maps: "https://maps.app.goo.gl/dXGyGgVxda7GAk1eA",
  hours: "Lunes a viernes, 8:00–18:00 (consulta disponibilidad)",
};
