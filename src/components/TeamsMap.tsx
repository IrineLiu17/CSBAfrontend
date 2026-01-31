import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const teams = [
  { name: "Thunder Bolts", city: "New York", top: "25%", left: "75%" },
  { name: "Steel Wolves", city: "Chicago", top: "30%", left: "55%" },
  { name: "Fire Hawks", city: "Los Angeles", top: "55%", left: "15%" },
  { name: "Urban Knights", city: "Miami", top: "75%", left: "70%" },
  { name: "Bay Breakers", city: "San Francisco", top: "45%", left: "10%" },
  { name: "Desert Storm", city: "Phoenix", top: "60%", left: "25%" },
];

const TeamsMap = () => {
  return (
    <section id="teams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Teams Across America</h2>

        {/* Map Container */}
        <div className="relative bg-secondary rounded-lg overflow-hidden aspect-[16/9] max-w-4xl mx-auto mb-8">
          {/* Simple US Map Shape */}
          <svg
            viewBox="0 0 960 600"
            className="w-full h-full"
            fill="none"
          >
            {/* Simplified US outline */}
            <path
              d="M120 180 L180 160 L250 140 L350 130 L450 120 L550 125 L650 130 L750 150 L820 180 L850 220 L860 280 L870 340 L850 400 L800 450 L720 480 L620 500 L520 490 L420 480 L320 470 L220 440 L150 380 L100 300 L90 240 Z"
              fill="hsl(var(--muted))"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
          </svg>

          {/* Team Markers */}
          {teams.map((team) => (
            <div
              key={team.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ top: team.top, left: team.left }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-200">
                  <MapPin className="w-3 h-3 text-primary-foreground" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-dark text-dark-foreground text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap">
                    <p className="font-semibold">{team.name}</p>
                    <p className="text-dark-foreground/70">{team.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* League Badge */}
          <div className="absolute bottom-4 left-4 bg-dark text-dark-foreground px-4 py-2 rounded-lg">
            <p className="font-display text-sm">CSBA League Teams</p>
          </div>
        </div>

        <p className="text-center text-muted-foreground mb-6 max-w-xl mx-auto">
          From coast to coast, CSBA League represents the best basketball talent across the United States
        </p>

        <div className="text-center">
          <Button variant="default">
            <MapPin className="w-4 h-4 mr-2" />
            Find Teams Near You
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamsMap;
