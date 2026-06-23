"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Tacógrafos",
  "Electricidad",
  "Aire acondicionado",
  "Básculas",
  "Otro",
];

type Status = "idle" | "sending" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Sin backend real: simulamos el envío
    setTimeout(() => setStatus("success"), 800);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-semibold">¡Mensaje enviado!</h3>
        <p className="mt-2 text-muted">
          Gracias, nos pondremos en contacto contigo pronto.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded border border-border bg-white px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded border border-border bg-white p-6 sm:p-8"
      noValidate={false}
    >
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre completo <span className="text-primary">*</span>
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
            Teléfono <span className="text-primary">*</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className="mb-1.5 block text-sm font-medium">
          Servicio de interés
        </label>
        <select id="servicio" name="servicio" className={inputClass} defaultValue="">
          <option value="" disabled>
            Selecciona una opción
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="privacidad"
          name="privacidad"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-primary"
        />
        <label htmlFor="privacidad" className="text-sm text-muted">
          Acepto la política de privacidad <span className="text-primary">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-70"
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
    </form>
  );
}
