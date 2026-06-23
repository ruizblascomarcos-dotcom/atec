type LogoProps = {
  /** Variant: "default" for light backgrounds, "light" for dark backgrounds */
  variant?: "default" | "light";
  showTagline?: boolean;
};

/**
 * Logo ATEC: rectángulo rojo con las letras A T E C en blanco
 * (Barlow Condensed bold) y un descriptor debajo.
 */
export default function Logo({
  variant = "default",
  showTagline = true,
}: LogoProps) {
  const taglineColor = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center bg-primary px-2.5 py-1"
        aria-hidden="true"
      >
        {["A", "T", "E", "C"].map((letter, i) => (
          <span
            key={letter}
            className={`font-display text-2xl font-bold leading-none text-white ${
              i > 0 ? "border-l border-white/40 pl-1.5 ml-1.5" : ""
            }`}
          >
            {letter}
          </span>
        ))}
      </div>
      {showTagline && (
        <span
          className={`hidden text-[11px] font-medium uppercase tracking-wide sm:block ${taglineColor}`}
        >
          Tacógrafos · Electricidad · Castellón
        </span>
      )}
    </div>
  );
}
