import Image from "next/image";

type LogoProps = {
  /** "default" para fondos claros, "light" para fondos oscuros/coral */
  variant?: "default" | "light";
  /** Clases extra para ajustar el tamaño de la imagen (ej. "h-16") */
  className?: string;
};

/**
 * Logo oficial de ATEC. Usa la versión adecuada según el fondo:
 * - default → caja roja sobre fondo claro (Navbar)
 * - light   → versión invertida sobre fondo coral/oscuro (Footer)
 */
export default function Logo({
  variant = "default",
  className = "h-12",
}: LogoProps) {
  const src = variant === "light" ? "/logo-invert.jpg" : "/logo.jpg";

  return (
    <Image
      src={src}
      alt="ATEC — Centro Técnico de Tacógrafos"
      width={500}
      height={500}
      priority
      className={`${className} w-auto`}
    />
  );
}
