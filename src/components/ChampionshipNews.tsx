import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import gameAction from "@/assets/game-action.jpg";

const ChampionshipNews = () => {
  return (
    <section id="news" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Championship Final Set</h2>

        <div className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-elevated)]">
          {/* Match Header */}
          <div className="flex items-center gap-4 p-4 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">🏀</span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Rockets vs. Celtics</h3>
              <p className="text-sm text-muted-foreground">Guangzhou Gymnasium</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-xs text-muted-foreground">League News · 2 hours ago</p>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={gameAction}
                alt="Championship game action"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-dark/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The CSBA League Championship Final is officially set for December 15th at the Metro Arena. Thunder Bolts will face the Steel Wolves in what promises to be the most anticipated matchup of the season. This matchup features a historic rivalry between two powerhouse teams that have dominated the league from the opening tip-off to the final stretch of the regular season. The Thunder Bolts led by...
              </p>
              <Button variant="default" className="w-fit">
                <Play className="w-4 h-4 mr-2" />
                Watch Highlights
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionshipNews;
