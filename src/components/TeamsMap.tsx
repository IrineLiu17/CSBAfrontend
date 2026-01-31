import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import northAmericaMap from "@/assets/north-america-map.jpg";

const teams = [
  { name: "Thunder Bolts", city: "New York", top: "42%", left: "78%" },
  { name: "Steel Wolves", city: "Chicago", top: "40%", left: "65%" },
  { name: "Fire Hawks", city: "Los Angeles", top: "55%", left: "22%" },
  { name: "Urban Knights", city: "Miami", top: "68%", left: "78%" },
  { name: "Bay Breakers", city: "San Francisco", top: "48%", left: "18%" },
  { name: "Desert Storm", city: "Phoenix", top: "58%", left: "30%" },
];

const TeamsMap = () => {
  return (
    <section id="teams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Teams Across America</h2>

        {/* Map Container */}
        <div className="relative rounded-lg overflow-hidden aspect-[16/9] max-w-4xl mx-auto mb-8 border border-border shadow-[var(--shadow-card)]">
          {/* North America Map Background */}
          <img
            src={northAmericaMap}
            alt="North America Map"
            className="w-full h-full object-cover"
          />

          {/* Team Markers with Red Pins */}
          {teams.map((team) => (
            <div
              key={team.name}
              className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer"
              style={{ top: team.top, left: team.left }}
            >
              <div className="relative">
                {/* Red Pin Shape */}
                <div className="relative">
                  <svg 
                    width="32" 
                    height="40" 
                    viewBox="0 0 32 40" 
                    className="drop-shadow-lg group-hover:scale-125 transition-transform duration-200"
                  >
                    <path
                      d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 24 16 24s16-15.163 16-24C32 7.163 24.837 0 16 0z"
                      fill="#DC2626"
                    />
                    <circle cx="16" cy="14" r="6" fill="white" />
                  </svg>
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <div className="bg-dark text-dark-foreground text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap">
                    <p className="font-semibold">{team.name}</p>
                    <p className="text-dark-foreground/70">{team.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* League Badge */}
          <div className="absolute bottom-4 left-4 bg-dark/90 text-dark-foreground px-4 py-2 rounded-lg backdrop-blur-sm">
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
