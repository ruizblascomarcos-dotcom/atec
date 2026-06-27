"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { services } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-sm" : ""
      } border-b border-border`}
    >
      <nav className="container-atec flex h-16 items-center justify-between">
        <Link href="/" aria-label="Inicio — ATEC SL">
          <Logo className="h-10" />
        </Link>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Inicio
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm font-medium hover:text-primary"
          >
            Sobre nosotros
          </Link>

          {/* Dropdown servicios */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium hover:text-primary"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Servicios
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 border border-border bg-white py-2 shadow-md">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="block px-4 py-2 text-sm hover:bg-surface hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/subvenciones"
            className="text-sm font-medium hover:text-primary"
          >
            Subvenciones
          </Link>

          <Link
            href="/contacto"
            className="text-sm font-medium hover:text-primary"
          >
            Contacto
          </Link>

          <Link href="/contacto#reservar" className="btn-primary py-2 text-sm">
            Pedir cita
          </Link>
        </div>

        {/* Acciones móvil */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/contacto#reservar" className="btn-primary py-2 text-sm">
            Pedir cita
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
            className="p-1 text-dark"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container-atec flex h-16 items-center justify-between border-b border-border">
            <Logo className="h-10" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              className="p-1 text-dark"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="container-atec flex flex-col gap-1 py-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/sobre-nosotros"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium"
            >
              Sobre nosotros
            </Link>
            <span className="pt-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Servicios
            </span>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 pl-3 text-base"
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/subvenciones"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium"
            >
              Subvenciones
            </Link>
            <Link
              href="/contacto"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-lg font-medium"
            >
              Contacto
            </Link>
            <Link
              href="/contacto#reservar"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4"
            >
              Pedir cita
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
