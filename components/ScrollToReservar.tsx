"use client";

import { useEffect } from "react";

/**
 * Fuerza el scroll hasta la zona de reserva (#reservar) cuando se llega
 * a /contacto#reservar. El scroll nativo por ancla de Next.js App Router
 * no es fiable (sobre todo navegando entre páginas en móvil), así que lo
 * hacemos manualmente con un pequeño retardo para esperar al layout.
 */
export default function ScrollToReservar() {
  useEffect(() => {
    const scrollToTarget = () => {
      if (window.location.hash !== "#reservar") return;
      const el = document.getElementById("reservar");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Varios intentos: gana al scroll-reset de Next y aguanta los
    // tiempos de carga variables (sobre todo en móvil).
    const timers = [100, 400, 900].map((ms) => setTimeout(scrollToTarget, ms));
    // Por si el hash cambia estando ya en la página
    window.addEventListener("hashchange", scrollToTarget);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, []);

  return null;
}
