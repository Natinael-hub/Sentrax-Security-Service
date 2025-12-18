import NavLink from "@/components/NavLink";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo / Brand */}
      <div className="text-xl font-semibold tracking-wide">
        Sentrax
      </div>

      {/* Navigation Links */}
      <div className="flex gap-2">
        <NavLink href="/" label="Home" />
        <NavLink href="/services" label="Services" />
        <NavLink href="/about" label="About" />
        <NavLink href="/careers" label="Careers" />
        <NavLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
}
