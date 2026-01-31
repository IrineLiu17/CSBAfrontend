import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/#games" },
  { label: "Teams", href: "/#teams" },
  { label: "Seasons", href: "#" },
  { label: "News", href: "/news" },
  { label: "Sponsors", href: "#" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Handle hash navigation for same page
    if (href.includes('#') && !href.startsWith('/about')) {
      const hash = href.split('#')[1];
      if (hash && location.pathname === '/') {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const isInternalRoute = (href: string) => {
    return href === '/' || href === '/about' || href === '/news';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl text-dark-foreground tracking-wider">
            CSBA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isInternalRoute(link.href) ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="nav-link text-sm"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link text-sm"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-dark-foreground/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                isInternalRoute(link.href) ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="nav-link text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link text-sm"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button variant="default" size="sm" className="w-fit mt-2">
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
