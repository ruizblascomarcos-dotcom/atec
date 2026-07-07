import { Star, ExternalLink } from "lucide-react";
import { contact } from "@/lib/data";

type Review = {
  name: string;
  initials: string;
  timeAgo: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Juan Quiroz",
    initials: "JQ",
    timeAgo: "Hace 1 mes",
    text: "Servicio profesional, amable y a tiempo, les recomiendo al 100%",
  },
  {
    name: "Ayyub Elfh",
    initials: "AE",
    timeAgo: "Hace 4 meses",
    text: "Muy contento con el trato recibido con los compañeros de taller y sobre todo con los chicos de administración!!",
  },
  {
    name: "Kosmyn Ksm",
    initials: "KK",
    timeAgo: "Hace 5 meses",
    text: "Un equipo estupendo, y muy trabajadores! Los del taller bastantes rápidos y muy bromistas; así que no os asustéis, todo son bromas!",
  },
  {
    name: "Jose Vicente Alicart",
    initials: "JA",
    timeAgo: "Hace 6 meses",
    text: "Excelente taller con gente muy profesional, rapido en atenderte y solucionar el problema, mucha amabilidad y muy buen trato con el cliente y un trato muy personal, lo recomiendo al 100%",
  },
  {
    name: "Miguel Martí Burlacu",
    initials: "MM",
    timeAgo: "Hace 1 año",
    text: "Excelente trato! Nos atendieron Ángel y Mario, muy amables y sobretodo muy sinceros, en todo momento nos aconsejaron para mantenimiento futuro y detectaron enseguida la avería. Me alegra mucho que me recomendaran este taller tan profesional!",
  },
];

// Mismo enlace de Google Maps que ya se usa en /contacto (contact.maps).
const GOOGLE_MAPS_REVIEWS_URL = contact.maps;

function StarRow({ className }: { className?: string }) {
  return (
    <div className={`flex gap-1 ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section>
      {/* Cabecera — banda diagonal con la nota global */}
      <div
        className="relative bg-primary pb-16 pt-16 text-center text-white sm:pb-20 sm:pt-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
      >
        <div className="container-atec">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/90">
            Opiniones verificadas en Google
          </h2>
          <div
            className="mt-5 flex items-center justify-center gap-3"
            role="img"
            aria-label="Puntuación 4,9 de 5 estrellas"
          >
            <span
              className="font-display text-6xl font-bold leading-none"
              aria-hidden="true"
            >
              4,9
            </span>
            <StarRow className="h-5 [&_svg]:h-5 [&_svg]:w-5" />
          </div>
          <p className="mt-3 text-white/80">
            Basado en más de 700 reseñas
          </p>
        </div>
      </div>

      {/* Grid de reseñas */}
      <div className="container-atec -mt-6 pb-16 sm:-mt-8 sm:pb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex w-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <StarRow className="text-primary" />
              <span className="sr-only">5 de 5 estrellas</span>
              <p className="mt-4 flex-1 text-sm text-dark">{review.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.12] text-sm font-semibold text-primary"
                  aria-hidden="true"
                >
                  {review.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted">{review.timeAgo}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver todas las reseñas en Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
