import { Link } from "react-router-dom";

const footerLinks = {
  quickLinks: [
    { label: "Games", href: "#games" },
    { label: "Teams", href: "#teams" },
    { label: "Schedule", href: "#" },
    { label: "Player Stats", href: "#" },
    { label: "Standings", href: "#" },
    { label: "News", href: "#news" },
  ],
  league: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Sponsors", href: "#" },
    { label: "Media Center", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

const socialLinks = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "𝕏", label: "X", href: "#" },
  { icon: "📷", label: "Instagram", href: "#" },
  { icon: "▶", label: "YouTube", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl mb-4">CSBA</h3>
            <p className="text-dark-foreground/70 text-sm leading-relaxed mb-6">
              Elite basketball competition bringing together the finest athletes in professional urban basketball. Experience the intensity, skill, and passion.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-dark-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <span className="text-xs">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-foreground/70 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* League */}
          <div>
            <h4 className="font-semibold text-primary mb-4">League</h4>
            <ul className="space-y-2">
              {footerLinks.league.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-foreground/70 hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-dark-foreground/70">
              <li>contact@csba-league.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Basketball Ave</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-foreground/50 text-sm">
            © {currentYear} CSBA League. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-dark-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-dark-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <a href="#" className="text-dark-foreground/50 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
