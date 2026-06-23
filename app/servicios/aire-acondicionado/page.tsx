import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FAQ, { type FAQItem } from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Aire acondicionado para camiones en Castellón | ATEC SL",
  description:
    "Reparación y mantenimiento de climatización para camiones en Castellón. Servicio rápido y profesional.",
};

const servicesList = [
  "Diagnóstico y reparación de fallos (compresor, sistema de control)",
  "Revisión y recarga de refrigerante",
  "Reparación y sustitución de componentes (compresores, condensadores, evaporadores)",
  "Mantenimiento preventivo (filtros, conexiones, ajustes)",
  "Instalación de sistemas nuevos",
];

const faqs: FAQItem[] = [
  {
    question: "¿Con qué frecuencia debo revisar el aire acondicionado?",
    answer: "Al menos una vez al año o cada 20.000 km.",
  },
  {
    question: "¿Qué incluye una reparación de aire acondicionado?",
    answer:
      "Detección de fallos, recarga de refrigerante y sustitución de componentes defectuosos.",
  },
  {
    question: "¿Puedo hacerlo yo mismo?",
    answer:
      "No es recomendable. El mantenimiento del aire acondicionado requiere herramientas especializadas y técnicos certificados.",
  },
];

export default function AireAcondicionadoPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicio · Castellón"
        title="Aire acondicionado para camiones en Castellón"
        subtitle="Reparación y mantenimiento del sistema de climatización. Comodidad del conductor garantizada."
      />

      {/* Servicios */}
      <section className="container-atec py-16 sm:py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Nuestros servicios</h2>
        <ul className="mt-10 max-w-3xl space-y-4">
          {servicesList.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-l-4 border-l-primary bg-surface p-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-dark">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="container-atec py-16 sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
