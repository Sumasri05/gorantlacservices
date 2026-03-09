import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Who Can Join", href: "#who-can-join" },
  { label: "Benefits", href: "#benefits" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href={isHome ? "#home" : "/"} className="font-display text-xl font-extrabold tracking-wide">
          <span className="text-primary">GORANTLA</span>{" "}
          <span className="text-secondary">CONSULTANCY SERVICES</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {isHome && navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          {!isHome && (
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
          )}
          <a href={isHome ? "#apply" : "/#apply"} className="gradient-gold text-secondary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {isHome && navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary py-1">
              {l.label}
            </a>
          ))}
          <a href={isHome ? "#apply" : "/#apply"} onClick={() => setOpen(false)} className="block gradient-gold text-secondary-foreground px-5 py-2 rounded-lg text-sm font-semibold text-center">
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
