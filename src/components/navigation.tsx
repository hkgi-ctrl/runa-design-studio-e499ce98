import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import runaLogo from "@/assets/runa-header-logo.png.asset.json";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/processo", label: "Processo" },
  { to: "/planos", label: "Planos" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center">
          <img
            src={runaLogo.url}
            alt="RUNA Design"
            className="h-[26px] w-auto object-contain drop-shadow-[0_2px_12px_oklch(0.8754_0.105_193.25_/_0.35)] transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-turquoise"
                  : "text-silver/80 hover:text-foreground"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-turquoise" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="default"
            className="bg-turquoise text-graphite-deep hover:bg-turquoise/90"
          >
            <Link to="/contacto">Iniciar projeto</Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-border/50 bg-background/95 backdrop-blur-xl sm:max-w-md"
          >
            <div className="flex flex-col gap-8 pt-8">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <img src={runaLogo.url} alt="RUNA Design" className="h-[29px] w-auto object-contain" />
              </Link>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className={`rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                        isActive(link.to)
                          ? "bg-turquoise/10 text-turquoise"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button
                asChild
                className="bg-turquoise text-graphite-deep hover:bg-turquoise/90"
              >
                <Link to="/contacto" onClick={() => setMobileOpen(false)}>
                  Iniciar projeto
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
