import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Building2 } from "lucide-react";
import sponsorHq from "@/assets/sponsor-hq.jpg";

interface Partner {
  name: string;
  icon: string;
}

const partners: Partner[] = [
  { name: "MountainView", icon: "🏔️" },
  { name: "TravelJet", icon: "✈️" },
  { name: "Financial Serving", icon: "💼" },
  { name: "TechStar", icon: "⚙️" },
  { name: "EagleWings", icon: "🦅" },
  { name: "HealthApp", icon: "📱" },
  { name: "GlobalNet", icon: "🌐" },
  { name: "InnovateTech", icon: "🚀" },
  { name: "GreenLeaf", icon: "🌿" },
  { name: "SunRise", icon: "☀️" },
  { name: "OceanBlue", icon: "🌊" },
  { name: "FastTrack", icon: "⚡" },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-primary pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-6xl md:text-7xl text-primary-foreground uppercase tracking-tight italic mb-4">
              Sponsors
            </h1>
            <div className="w-12 h-1 bg-primary-foreground mx-auto mb-4" />
            <p className="text-primary-foreground/80">
              Partnership • Innovation • Excellence Together
            </p>
          </div>
        </section>

        {/* Title Sponsors */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Title Sponsors</h2>
            <div className="w-12 h-1 bg-primary mb-2" />
            <p className="text-muted-foreground mb-8">Premier Partnership • Innovation Leaders</p>

            {/* Featured Sponsor Card */}
            <div className="bg-[#F9FAFB] border border-border rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">TechCorp Industries</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-primary text-primary-foreground text-xs">Title Sponsor</Badge>
                        <span className="text-muted-foreground text-sm">Partnership Since 2020</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Leading technology innovation company specializing in AI and cloud computing solutions. 
                    TechCorp has been our premier partner for five consecutive years, supporting league 
                    modernization and digital transformation initiatives that enhance fan experience across all platforms.
                  </p>

                  <div className="flex items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>www.techcorp.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>Fortune 500 Company</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <img 
                    src={sponsorHq} 
                    alt="TechCorp Corporate HQ" 
                    className="h-full w-full object-cover rounded-lg min-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Partners */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">All Partners</h2>
            <div className="w-12 h-1 bg-primary mb-2" />
            <p className="text-muted-foreground mb-8">Complete Partnership Network</p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="text-center">
                    <span className="text-3xl">{partner.icon}</span>
                    <p className="text-xs text-muted-foreground mt-2 hidden md:block">{partner.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide italic mb-4">
              Become a Partner!
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Join our growing network of partners and connect with millions of basketball fans 
              worldwide. Discover partnership opportunities that drive business growth and community impact.
            </p>
            <Button size="lg">
              Contact Partnership Team
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
