import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/plans", label: "Plans" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/85 backdrop-blur-lg shadow-card border-b border-border" : "bg-transparent"
    )}>
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-30 group-hover:opacity-60 transition-opacity rounded-full" />
            <img src={logo} alt="Shreepad Communication logo" className="relative h-12 w-12 object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className={cn("font-bold text-base", scrolled ? "text-foreground" : "text-white")}>Shreepad Communication</div>
            <div className={cn("text-[11px] uppercase tracking-widest", scrolled ? "text-muted-foreground" : "text-white/70")}>Pvt. Ltd.</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white",
                isActive && (scrolled ? "bg-primary/10 text-primary" : "bg-white/15 text-white")
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:8237000031" className={cn("flex items-center gap-2 text-sm font-medium", scrolled ? "text-foreground" : "text-white")}>
            <Phone className="h-4 w-4" /> 82370 00031
          </a>
          <Button asChild variant="hero" size="sm">
            <Link to="/contact">Get Connection</Link>
          </Button>
        </div>

        <button
          className={cn("lg:hidden p-2 rounded-md", scrolled ? "text-foreground" : "text-white")}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => cn(
                  "px-4 py-3 rounded-lg text-sm font-medium",
                  isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                )}
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contact">Get Connection</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
