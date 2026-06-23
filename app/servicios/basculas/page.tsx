import type { Metadata } from "next";
import { Target, ShieldCheck, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Instalación de básculas para camiones en Castellón | ATEC SL",
  description:
    "Instalación de sistemas de pesaje a bordo para camiones en Castellón. Precisión y cumplimiento de normativa de peso.",
};

const benefits = [
  {
    icon: Target,
    title: "Precisión",
    text: "Pesaje exacto de la carga en tiempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad legal",
    text: "Evita sanciones por sobrepeso en carretera.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    text: "Carga máxima sin superar los límites legales.",
  },
];

export default function BasculasPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio · Castellón"
        title="Instalación de básculas para camiones en Castellón"
        subtitle="Sistemas de pesaje a bordo precisos. Cumple con los límites de carga en carretera."
      />

      {/* Descripción */}
      <section className="container-atec py-16 sm:py-20">
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-dark">
          En ATEC instalamos sistemas de pesaje a bordo (básculas) para camiones,
          permitiendo al conductor conocer el peso exacto de la carga en tiempo
          real y evitar sanciones por exceso de peso en carretera.
        </p>
      </section>

      {/* Beneficios */}
      <section className="bg-surface">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">Beneficios</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
