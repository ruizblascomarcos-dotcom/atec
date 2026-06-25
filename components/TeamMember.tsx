import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  image?: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {image ? (
        <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-border sm:h-48 sm:w-48">
          <Image
            src={image}
            alt={`Foto de ${name}, equipo de ATEC`}
            fill
            sizes="(max-width: 640px) 160px, 192px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="flex h-40 w-40 items-center justify-center rounded-full bg-surface text-4xl font-bold text-dark ring-1 ring-border sm:h-48 sm:w-48"
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>
      )}
      <h3 className="mt-5 text-lg font-semibold leading-tight">{name}</h3>
      <p className="mt-1 text-sm text-muted">{role}</p>
    </div>
  );
}
