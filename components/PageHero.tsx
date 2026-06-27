import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  showCTA?: boolean;
};

/**
 * Hero interno para páginas de servicio y secundarias.
 * Fondo oscuro, texto blanco y un detalle de acento ámbar/rojo.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  showCTA = true,
}: PageHeroProps) {
  return (
    <section className="relative bg-dark text-white">
      {/* Detalle de acento de marca */}
      <div className="absolute left-0 top-0 h-1.5 w-32 bg-primary" aria-hidden="true" />
      <div className="container-atec py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>
        )}
        {showCTA && (
          <div className="mt-8">
            <Link href="/contacto#reservar" className="btn-primary">
              Pedir cita
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
