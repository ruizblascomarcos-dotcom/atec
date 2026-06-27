import Link from "next/link";
import { Phone } from "lucide-react";
import { contact } from "@/lib/data";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
};

export default function CTABanner({
  title = "¿Tu camión necesita revisión?",
  subtitle = "Pide cita ahora y te atendemos lo antes posible.",
}: CTABannerProps) {
  return (
    <section className="bg-surface">
      <div className="container-atec py-16 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contacto#reservar" className="btn-primary">
            Pedir cita
          </Link>
          <a href={`tel:${contact.phoneRaw}`} className="btn-secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar ahora: {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
