import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { services, contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Banda superior en color primario con el logo */}
      <div className="bg-primary">
        <div className="container-atec flex items-center py-5">
          <Logo variant="light" showTagline={false} />
        </div>
      </div>

      <div className="container-atec grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Servicios */}
        <div>
          <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide">
            Servicios
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`tel:${contact.phoneRaw}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 text-lg font-semibold uppercase tracking-wide">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/contacto" className="hover:text-primary">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary">
                Política de cookies
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-atec py-6 text-center text-xs text-white/60">
          © 2025 ATEC SL — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
