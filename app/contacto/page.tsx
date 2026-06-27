import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { contact } from "@/lib/data";
import ScrollToReservar from "@/components/ScrollToReservar";

export const metadata: Metadata = {
  title: "Contacto | ATEC SL — Taller para camiones en Castellón",
  description:
    "Contacta con ATEC para pedir cita o resolver dudas. Taller de tacógrafos y electricidad en Castellón. Tel: 618 617 221.",
};

export default function ContactoPage() {
  return (
    <>
      <ScrollToReservar />
      <section className="container-atec py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Columna izquierda — Información */}
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              ¿Cómo podemos ayudarte?
            </h1>
            <p className="mt-4 text-lg text-muted">
              Llámanos, escríbenos o pide cita directamente. Atendemos de lunes a
              viernes.
            </p>

            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Teléfono / WhatsApp</p>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="text-muted hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                  <span className="text-muted"> · </span>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-muted hover:text-primary"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-muted">{contact.address}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Horario</p>
                  <p className="text-muted">{contact.hours}</p>
                </div>
              </li>
            </ul>

            {/* Bloque de ubicación / mapa */}
            <div className="mt-10 rounded border border-border bg-surface p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                Nuestra ubicación
              </p>
              <p className="mt-2 text-lg font-semibold">{contact.address}</p>
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ver en Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna derecha — Reserva de cita (Google Calendar) */}
          <div id="reservar" className="scroll-mt-24">
            <h2 className="text-2xl font-bold">Reserva tu cita</h2>
            <p className="mt-2 text-muted">
              Consulta nuestra disponibilidad y pide cita directamente.
            </p>
            <div className="mt-6 overflow-hidden rounded border border-border">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ39FWzsgzhwcB_wo9oQGDcFy3e88q2sWr_ZpYn98IgSGRwxXwEWhd6EXbAbjCSNzaejqiqo8v0I?gv=true"
                title="Reserva de cita en el taller ATEC"
                style={{ border: 0 }}
                width="100%"
                height={600}
                frameBorder={0}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
