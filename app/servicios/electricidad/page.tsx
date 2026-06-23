import type { Metadata } from "next";
import {
  Search,
  Lightbulb,
  BatteryCharging,
  Cable,
  Cpu,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reparaciones eléctricas para camiones en Castellón | ATEC SL",
  description:
    "Diagnóstico y reparación de sistemas eléctricos en camiones. Luces, alternadores, baterías. Taller especializado en Castellón desde 1995.",
};

const servicesList = [
  {
    icon: Search,
    title: "Diagnóstico eléctrico completo",
    text: "Detección precisa de fallos con equipos especializados.",
  },
  {
    icon: Lightbulb,
    title: "Reparación de luces",
    text: "Sistemas de iluminación frontal, trasera y señalización.",
  },
  {
    icon: BatteryCharging,
    title: "Alternadores y baterías",
    text: "Revisión, carga y sustitución de elementos de generación eléctrica.",
  },
  {
    icon: Cable,
    title: "Instalaciones eléctricas",
    text: "Nuevas instalaciones y modificaciones en el cableado del vehículo.",
  },
  {
    icon: Cpu,
    title: "Sistemas electrónicos",
    text: "Diagnóstico y reparación de módulos de control y centralitas.",
  },
];

export default function ElectricidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio · Castellón"
        title="Reparaciones eléctricas para camiones en Castellón"
        subtitle="Diagnóstico y reparación de sistemas eléctricos. Luces, alternadores, baterías y más."
      />

      {/* Servicios */}
      <section className="container-atec py-16 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesList.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="border border-border border-l-4 border-l-primary bg-white p-6"
            >
              <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Texto de confianza */}
      <section className="bg-surface">
        <div className="container-atec py-16 text-center sm:py-20">
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-dark">
            En ATEC trabajamos con los principales sistemas eléctricos de
            vehículos pesados. Nuestros técnicos están formados para resolver
            desde el fallo más sencillo hasta las averías más complejas.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
