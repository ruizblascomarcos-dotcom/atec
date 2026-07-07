import { Star } from "lucide-react";

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
];

const GOOGLE_MAPS_REVIEWS_URL =
  "https://www.google.com/maps/place/Atec+SL/@39.9730581,-0.0738243,836m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd6000ae9fda473f:0x81256745d0febf1d!8m2!3d39.9730581!4d-0.0712494!16s%2Fg%2F11b6zyc7bw?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D";

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
    <section className="container-atec py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
        {/* Nota global — panel con banda diagonal */}
        <div
          className="flex flex-col items-center justify-center rounded-lg bg-primary p-10 text-center text-white lg:items-start lg:rounded-none lg:text-left lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white/90">
            Opiniones verificadas en Google
          </h2>
          <div
            className="mt-5 flex items-center gap-3"
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
          <p className="mt-3 text-white/80">Basado en más de 700 reseñas</p>
        </div>

        {/* Grid de reseñas */}
        <div>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex w-full flex-col rounded-lg border border-border bg-white p-6 shadow-sm sm:w-[calc(50%-0.75rem)]"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
