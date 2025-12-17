import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={
        "rounded-lg px-3 py-2 text-sm transition " +
        (active ? "bg-white/10 text-white" : "text-steel hover:text-white hover:bg-white/5")
      }
    >
      {label}
    </Link>
  );
}
