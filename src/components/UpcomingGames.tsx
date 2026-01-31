import { Button } from "@/components/ui/button";

interface Game {
  homeTeam: { name: string; record: string };
  awayTeam: { name: string; record: string };
  event: string;
  date: string;
  time: string;
  venue: string;
}

const upcomingGames: Game[] = [
  {
    homeTeam: { name: "Thunder Bolts", record: "15-3 Record" },
    awayTeam: { name: "Steel Wolves", record: "14-4 Record" },
    event: "Championship Final",
    date: "December 15, 2024",
    time: "8:00 PM",
    venue: "Metro Arena",
  },
  {
    homeTeam: { name: "Fire Hawks", record: "13-5 Record" },
    awayTeam: { name: "Urban Knights", record: "11-6 Record" },
    event: "3rd Place Game",
    date: "December 13, 2024",
    time: "6:00 PM",
    venue: "Downtown Court",
  },
];

const UpcomingGames = () => {
  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="section-title">Upcoming Games</h2>
          <Button variant="outline" className="hidden sm:flex">
            Full Schedule
          </Button>
        </div>

        <div className="space-y-4">
          {upcomingGames.map((game, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Teams */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Home Team */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">🏀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{game.homeTeam.name}</h4>
                      <p className="text-xs text-muted-foreground">{game.homeTeam.record}</p>
                    </div>
                  </div>

                  <span className="text-muted-foreground font-medium px-3">vs</span>

                  {/* Away Team */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-lg">🏀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{game.awayTeam.name}</h4>
                      <p className="text-xs text-muted-foreground">{game.awayTeam.record}</p>
                    </div>
                  </div>
                </div>

                {/* Event Info */}
                <div className="md:text-right md:border-l md:border-border md:pl-6">
                  <p className="font-semibold text-primary">{game.event}</p>
                  <p className="text-sm text-muted-foreground">
                    {game.date} · {game.time}
                  </p>
                  <p className="text-sm text-muted-foreground">{game.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Button variant="outline" className="w-full">
            Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGames;
