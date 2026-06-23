import Link from "next/link";
import { Clock, ShieldCheck, MapPin } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TeamMember from "@/components/TeamMember";
import CTABanner from "@/components/CTABanner";
import { services, team } from "@/lib/data";

const valueProps = [
  {
    icon: Clock,
    title: "Servicio rápido",
    text: "Entendemos que tu camión parado es dinero perdido. Trabajamos con agilidad.",
  },
  {
    icon: ShieldCheck,
    title: "Centro certificado",
    text: "Centro técnico oficial de tacógrafos. Cumplimiento normativo garantizado.",
  },
  {
    icon: MapPin,
    title: "Taller local en Castellón",
    text: "Llevamos desde 1995 siendo el referente del sector en Castellón de la Plana.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Sección 1 — Hero */}
      <section className="bg-dark text-white">
        <div className="container-atec py-20 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Castellón · Desde 1995
          </p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            El taller de confianza para tu camión
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Tacógrafos, electricidad, aire acondicionado y básculas. Servicio
            rápido y próximo para transportistas y flotas en Castellón.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contacto" className="btn-primary">
              Pedir cita
            </Link>
            <Link href="#servicios" className="btn-secondary-light">
              Ver servicios
            </Link>
          </div>
          <p className="mt-8 text-sm text-white/60">
            +30 años de experiencia · Centro técnico certificado
          </p>
        </div>
      </section>

      {/* Sección 2 — Banda diagonal (elemento firma) */}
      <div className="diagonal-band h-[60px] w-full" aria-hidden="true" />

      {/* Sección 3 — Propuesta de valor */}
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {valueProps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-start">
              <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 4 — Servicios */}
      <section id="servicios" className="bg-surface">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <ServiceCard
                key={s.slug}
                title={s.title}
                description={s.description}
                icon={s.icon}
                href={s.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección 5 — Por qué ATEC */}
      <section className="bg-dark text-white">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            ¿Por qué confían en ATEC más de 30 años?
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { stat: "+30", label: "años de experiencia" },
              { stat: "4", label: "servicios especializados" },
              {
                stat: "1",
                label: "único centro técnico de tacógrafos en Castellón",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-6xl font-bold text-primary">
                  {item.stat}
                </p>
                <p className="mt-2 text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-white/70">
            Transportistas autónomos y empresas de transporte de toda la
            provincia confían en nosotros para mantener su flota en carretera.
          </p>
        </div>
      </section>

      {/* Sección 6 — Equipo */}
      <section className="container-atec py-16 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">El equipo ATEC</h2>
        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {team.map((m) => (
            <TeamMember key={m.name} name={m.name} role={m.role} />
          ))}
        </div>
      </section>

      {/* Sección 7 — CTA final */}
      <CTABanner />
    </>
  );
}
