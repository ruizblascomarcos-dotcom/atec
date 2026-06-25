"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";
import { contact } from "@/lib/data";

const PREFILLED = "Hola, me gustaría más información / pedir cita.";
const chatHref = `${contact.whatsapp}?text=${encodeURIComponent(PREFILLED)}`;

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Popup tipo chat */}
      {open && (
        <div className="w-[300px] overflow-hidden rounded-lg border border-border bg-white shadow-xl">
          {/* Cabecera */}
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <p className="flex-1 font-semibold">Respondemos en minutos</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat de WhatsApp"
              className="rounded p-1 hover:bg-white/10"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Cuerpo */}
          <div className="bg-[#ECE5DD] px-4 py-5">
            <div className="relative max-w-[230px] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm text-dark shadow-sm">
              <p className="font-semibold">¡Hola! 👋</p>
              <p className="mt-1 text-muted">
                ¿En qué podemos ayudarte? Escríbenos y te respondemos lo antes
                posible.
              </p>
            </div>
          </div>

          {/* Acción */}
          <div className="bg-white p-3">
            <a
              href={chatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#1EBE5D]"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Iniciar chat
            </a>
            <p className="mt-2 text-center text-xs text-muted">{contact.phone}</p>
          </div>
        </div>
      )}

      {/* Botón flotante (logo sin fondo) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        aria-expanded={open}
        className="transition-transform hover:scale-105 active:scale-95"
      >
        <Image
          src="/whatsapp-badge.png"
          alt="WhatsApp"
          width={64}
          height={64}
          className="h-16 w-16 drop-shadow-lg"
        />
      </button>
    </div>
  );
}
