import type { Metadata } from "next";
import { BatteryCharging, Sun, Truck, type LucideIcon } from "lucide-react";
import PageHero from "@/components/PageHero";

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
  managedByAtec: boolean;
};

const subsidies: Subsidy[] = [
  {
    icon: Truck,
    program: "Transporte · Ministerio de Transportes",
    title: "Cheque Moderniza",
    description:
      "Programa de modernización para autónomos y PYMEs de transporte de viajeros y mercancías. En ATEC te ayudamos con la Categoría 2: tacógrafo digital inteligente de 2ª generación (unidad intravehicular, sensor y calibración), software de archivado seguro con descarga remota, formación y servicio técnico.",
    highlight: "Ayuda de 1.500 € a 2.500 € (IVA no incl.)",
    managedByAtec: true,
  },
  {
    icon: BatteryCharging,
    program: "Movilidad sostenible · IVACE / IDAE",
    title: "Programa MOVES III",
    description:
      "Incentivos a la movilidad eficiente y sostenible para la adquisición de vehículos eléctricos enchufables y de pila de combustible. Programa del Ministerio para la Transición Ecológica, gestionado en la Comunitat Valenciana por el IVACE a través del IDAE. Esta es la ayuda que solicitamos nosotros mismos para renovar nuestra propia flota.",
    highlight: "Ayuda recibida por ATEC: 3.600 €",
    managedByAtec: false,
  },
  {
    icon: Sun,
    program: "Autoconsumo renovable · NextGenerationEU",
    title: "Instalación Fotovoltaica",
    description:
      "Ayuda del Plan de Recuperación, Transformación y Resiliencia, dentro del programa de incentivos para autoconsumo y almacenamiento con energías renovables. ATEC cuenta con una instalación solar fotovoltaica de autoconsumo con vertido a red, financiada gracias a este programa.",
    highlight: "Instalación de 16,10 kWp / 15 kW",
    managedByAtec: false,
  },
];

export default function SubvencionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ayudas y financiación"
        title="Subvenciones para el sector del transporte"
        subtitle="El Cheque Moderniza es la única de estas ayudas que gestionamos directamente para nuestros clientes. Las otras dos son ejemplos de cómo hemos modernizado nosotros mismos nuestras instalaciones."
        showCTA={false}
      />

      {/* Tarjetas de subvenciones unificadas */}
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {subsidies.map(
            ({ icon: Icon, program, title, description, highlight, managedByAtec }) => (
              <article
                key={title}
                className="flex flex-col border border-border border-l-4 border-l-primary bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
                  <span
                    className={
                      managedByAtec
                        ? "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        : "rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted"
                    }
                  >
                    {managedByAtec ? "Te la gestionamos" : "Ejemplo propio de ATEC"}
                  </span>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  {program}
                </p>
                <h2 className="mt-1 text-xl font-semibold">{title}</h2>
                <p className="mt-3 flex-1 text-sm text-muted">{description}</p>
                <p className="mt-5 rounded-sm bg-surface px-4 py-3 text-sm font-semibold text-dark">
                  {highlight}
                </p>
              </article>
            )
          )}
        </div>

        {/* Nota de financiación europea */}
        <p className="mt-10 max-w-3xl text-sm text-muted">
          De estas tres ayudas, en ATEC solo gestionamos el Cheque Moderniza
          para nuestros clientes. El Programa MOVES III y la instalación
          fotovoltaica son subvenciones que hemos aprovechado nosotros mismos
          para modernizar el taller; las mostramos como ejemplo de nuestro
          compromiso con la eficiencia. Parte de estos proyectos están
          financiados por la Unión Europea —NextGenerationEU— en el marco del
          Plan de Recuperación, Transformación y Resiliencia. ¿Tienes dudas
          sobre el Cheque Moderniza? Te asesoramos sin compromiso.
        </p>
      </section>
    </>
  );
}
