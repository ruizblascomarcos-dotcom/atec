import type { Metadata } from "next";
import { Heart, Star, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";
import TeamMember from "@/components/TeamMember";
import CTABanner from "@/components/CTABanner";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Sobre nosotros — ATEC SL | Taller para camiones en Castellón desde 1995",
  description:
    "Conoce el equipo de ATEC, más de 30 años especializados en tacógrafos y electricidad para camiones en Castellón.",
};

const values = [
  {
    icon: Heart,
    title: "Trato cercano",
    text: "Entendemos las necesidades de cada cliente y ofrecemos soluciones a medida.",
  },
  {
    icon: Star,
    title: "Profesionalidad",
    text: "Alto estándar en cada servicio. Precisión y cuidado en cada trabajo.",
  },
  {
    icon: BookOpen,
    title: "Conocimiento técnico",
    text: "Técnicos en formación continua para ofrecer soluciones actualizadas.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        title="Más de 30 años al servicio de los transportistas de Castellón"
        subtitle="Fundada en 1995, ATEC nació con una misión clara: ofrecer un servicio técnico de calidad, cercano y profesional para camioneros y flotas."
        showCTA={false}
      />

      {/* Historia */}
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Nuestra historia</h2>
            <p className="mt-5 text-muted">
              La empresa se fundó en marzo de 1995 con la intención de ofrecer un
              servicio cercano y profesional en Castellón, especializado en la
              electromecánica de camiones. Hoy somos un centro técnico de
              tacógrafos certificado y taller de electricidad para camiones, con
              un equipo de 6 profesionales.
            </p>
          </div>
          <div
            className="aspect-[4/3] w-full rounded bg-gray-200"
            role="img"
            aria-label="Imagen del taller ATEC en Castellón"
          />
        </div>
      </section>

      {/* Valores */}
      <section className="bg-surface">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Nuestros valores</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="container-atec py-16 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">El equipo ATEC</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Un equipo de profesionales especializados en la electromecánica de
          camiones, comprometidos con un servicio cercano y de calidad.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
          {team.map((m) => (
            <TeamMember key={m.name} name={m.name} role={m.role} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
