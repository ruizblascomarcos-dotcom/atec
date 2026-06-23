import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col border border-border border-l-4 border-l-primary bg-white p-6 transition hover:border-l-primary hover:shadow-sm"
    >
      <Icon className="h-9 w-9 text-primary" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Más información
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
