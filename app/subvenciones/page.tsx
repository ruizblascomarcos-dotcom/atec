import type { Metadata } from "next";
import { BatteryCharging, Sun, Truck, type LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Subvenciones | ATEC SL — Taller para camiones en Castellón",
  description:
    "Subvenciones y ayudas del sector del transporte: MOVES III, instalación fotovoltaica y Cheque Moderniza. ATEC te ayuda con la modernización de tu tacógrafo en Castellón.",
};

type Subsidy = {
  icon: LucideIcon;
  program: string;
  title: string;
  description: string;
  highlight: string;
};

const subsidies: Subsidy[] = [
  {
    icon: BatteryCharging,
    program: "Movilidad sostenible · IVACE / IDAE",
    title: "Programa MOVES III",
    description:
      "Incentivos a la movilidad eficiente y sostenible para la adquisición de vehículos eléctricos enchufables y de pila de combustible. Programa del Ministerio para la Transición Ecológica, gestionado en la Comunitat Valenciana por el IVACE a través del IDAE.",
    highlight: "Ayuda recibida por ATEC: 3.600 €",
  },
  {
    icon: Sun,
    program: "Autoconsumo renovable · NextGenerationEU",
    title: "Instalación Fotovoltaica",
    description:
      "Ayuda del Plan de Recuperación, Transformación y Resiliencia, dentro del programa de incentivos para autoconsumo y almacenamiento con energías renovables. ATEC cuenta con una instalación solar fotovoltaica de autoconsumo con vertido a red.",
    highlight: "Instalación de 16,10 kWp / 15 kW",
  },
  {
    icon: Truck,
    program: "Transporte · Ministerio de Transportes",
    title: "Cheque Moderniza",
    description:
      "Programa de modernización para autónomos y PYMEs de transporte de viajeros y mercancías. En ATEC te ayudamos con la Categoría 2: tacógrafo digital inteligente de 2ª generación (unidad intravehicular, sensor y calibración), software de archivado seguro con descarga remota, formación y servicio técnico.",
    highlight: "Ayuda de 1.500 € a 2.500 € (IVA no incl.)",
  },
];

export default function SubvencionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ayudas y financiación"
        title="Subvenciones para el sector del transporte"
        subtitle="Programas de ayuda a los que ATEC se ha acogido y con los que ayudamos a nuestros clientes a modernizar su actividad. Te asesoramos sobre cómo aprovecharlos."
        showCTA={false}
      />

      {/* Tarjetas de subvenciones unificadas */}
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {subsidies.map(({ icon: Icon, program, title, description, highlight }) => (
            <article
              key={title}
              className="flex flex-col border border-border border-l-4 border-l-primary bg-white p-6"
            >
              <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                {program}
              </p>
              <h2 className="mt-1 text-xl font-semibold">{title}</h2>
              <p className="mt-3 flex-1 text-sm text-muted">{description}</p>
              <p className="mt-5 rounded-sm bg-surface px-4 py-3 text-sm font-semibold text-dark">
                {highlight}
              </p>
            </article>
          ))}
        </div>

        {/* Nota de financiación europea */}
        <p className="mt-10 max-w-3xl text-sm text-muted">
          Parte de estos proyectos están financiados por la Unión Europea
          —NextGenerationEU— en el marco del Plan de Recuperación,
          Transformación y Resiliencia. ¿Tienes dudas sobre qué ayuda encaja con
          tu caso? Te orientamos sin compromiso.
        </p>
      </section>

      <CTABanner
        title="¿Quieres modernizar tu tacógrafo con ayudas?"
        subtitle="Te explicamos cómo acogerte al Cheque Moderniza y te lo gestionamos."
      />
    </>
  );
}
