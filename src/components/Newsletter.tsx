import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "𝕏", label: "X", href: "#" },
  { icon: "📷", label: "Instagram", href: "#" },
  { icon: "▶", label: "YouTube", href: "#" },
];

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    setEmail("");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest updates on games, player stats, and exclusive content delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-8">
              Subscribe
            </Button>
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors duration-200"
                aria-label={social.label}
              >
                <span className="text-sm font-medium">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
