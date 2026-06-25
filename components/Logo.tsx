import Image from "next/image";

type LogoVariant = "default" | "light" | "footer";

type LogoProps = {
  /**
   * default → caja roja + eslogan sobre fondo claro (Navbar)
   * light   → versión invertida sobre fondo coral/oscuro
   * footer  → caja coral sin eslogan sobre fondo claro (Footer)
   */
  variant?: LogoVariant;
  /** Clases extra para ajustar el tamaño (ej. "h-16") */
  className?: string;
};

const LOGOS: Record<LogoVariant, { src: string; width: number; height: number }> = {
  default: { src: "/logo.jpg", width: 500, height: 500 },
  light: { src: "/logo-invert.jpg", width: 500, height: 500 },
  footer: { src: "/logo-footer.jpg", width: 500, height: 200 },
};

export default function Logo({
  variant = "default",
  className = "h-12",
}: LogoProps) {
  const { src, width, height } = LOGOS[variant];

  return (
    <Image
      src={src}
      alt="ATEC — Centro Técnico de Tacógrafos"
      width={width}
      height={height}
      priority
      className={`${className} w-auto`}
    />
  );
}
