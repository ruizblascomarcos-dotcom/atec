import type { Metadata } from "next";
import {
  Scale,
  ShieldCheck,
  Clock,
  Settings,
  ClipboardCheck,
  Wrench,
  GraduationCap,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQ, { type FAQItem } from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Centro técnico de tacógrafos en Castellón | ATEC SL",
  description:
    "Instalación, calibración y mantenimiento de tacógrafos para camiones en Castellón. Centro certificado. Cumplimiento normativo garantizado.",
};

const benefits = [
  {
    icon: Scale,
    title: "Cumplimiento legal",
    text: "Calibración obligatoria cada 2 años. Evita multas y la inmovilización de tu vehículo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad en carretera",
    text: "Registros precisos de tiempos de conducción y descanso.",
  },
  {
    icon: Clock,
    title: "Sin interrupciones",
    text: "Servicio ágil para que tu camión vuelva a la carretera cuanto antes.",
  },
];

const details = [
  {
    icon: Settings,
    title: "Instalación de tacógrafos digitales",
    text: "Configuración y puesta en marcha desde el primer día.",
  },
  {
    icon: ClipboardCheck,
    title: "Calibración y verificación periódica",
    text: "Con equipos de última generación. Certificado oficial.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento preventivo y correctivo",
    text: "Revisión completa del dispositivo.",
  },
  {
    icon: GraduationCap,
    title: "Asesoramiento a conductores",
    text: "Formación en el uso correcto del tacógrafo.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "¿Qué es un tacógrafo y por qué es obligatorio?",
    answer:
      "Es el dispositivo que registra tiempos de conducción, descanso, velocidad y distancia. Es obligatorio en vehículos de transporte en Europa para garantizar el cumplimiento de los tiempos de trabajo y descanso.",
  },
  {
    question: "¿Cada cuánto hay que calibrar el tacógrafo?",
    answer:
      "La calibración es obligatoria cada 2 años, o cuando se sustituyen ruedas u otros elementos del vehículo que afecten a la lectura.",
  },
  {
    question: "¿Diferencias entre tacógrafo digital y analógico?",
    answer:
      "Los analógicos usan discos de papel; los digitales almacenan datos en tarjeta del conductor y memoria interna. Los digitales son obligatorios en vehículos nuevos desde 2006.",
  },
  {
    question: "¿Qué pasa si mi tacógrafo no está bien calibrado?",
    answer:
      "Puede registrar datos incorrectos y resultar en multas, sanciones e inmovilización del vehículo.",
  },
];

export default function TacografosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio · Castellón"
        title="Centro técnico de tacógrafos en Castellón"
        subtitle="Instalación, calibración y mantenimiento de tacógrafos digitales. Centro certificado."
      />

      {/* Beneficios */}
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <Icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios detallados */}
      <section className="bg-surface">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Qué incluye nuestro servicio
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {details.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 border-l-4 border-l-primary bg-white p-5"
              >
                <Icon className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-atec py-16 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 max-w-3xl">
          <FAQ items={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
