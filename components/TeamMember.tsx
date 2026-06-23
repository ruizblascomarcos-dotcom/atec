type TeamMemberProps = {
  name: string;
  role: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

export default function TeamMember({ name, role }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Placeholder con iniciales (no hay foto real) */}
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-surface text-2xl font-bold text-dark ring-1 ring-border"
        aria-hidden="true"
      >
        {getInitials(name)}
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-tight">{name}</h3>
      <p className="mt-1 text-sm text-muted">{role}</p>
    </div>
  );
}
