import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerRankings from "@/components/PlayerRankings";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const seasonStats = [
  { value: "7", label: "Total Seasons" },
  { value: "2024-25", label: "Current Season", highlight: true },
  { value: "16", label: "Active Teams" },
  { value: "320", label: "Total Players" },
];

const seasonHistory = [
  {
    season: "2023-24",
    dates: "September 2023 - June 2024",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
  },
  {
    season: "2022-23",
    dates: "September 2022 - June 2023",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
  },
  {
    season: "2021-22",
    dates: "September 2021 - June 2022",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
  },
];

const Seasons = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-background pt-24 pb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-6xl md:text-7xl text-foreground uppercase tracking-tight italic mb-4">
              Seasons
            </h1>
            <p className="text-muted-foreground">
              Championship History • Player Rankings • Season Highlights
            </p>
          </div>
        </section>

        {/* Season Stats Bar */}
        <section className="bg-dark py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {seasonStats.map((stat) => (
                <div key={stat.label}>
                  <div className={`font-display text-3xl md:text-4xl ${stat.highlight ? "text-primary" : "text-dark-foreground"}`}>
                    {stat.value}
                  </div>
                  <div className="text-dark-foreground/60 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Season */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Current Season</h2>
            <p className="text-muted-foreground mb-8">2024-25 Championship Season • 16 Teams • 320 Players</p>

            {/* Season Card */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-8">
              <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
                <div>
                  <h3 className="font-display text-4xl text-primary mb-1">2024-25</h3>
                  <p className="text-muted-foreground text-sm mb-4">October 2024 - June 2025</p>
                  <p className="font-semibold text-foreground mb-1">Season In Progress</p>
                  <p className="text-sm text-muted-foreground">Playoffs: May 15 - June 20, 2025</p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex gap-8 text-center">
                    <div>
                      <div className="font-display text-2xl text-foreground">16</div>
                      <div className="text-xs text-muted-foreground">Teams</div>
                    </div>
                    <div>
                      <div className="font-display text-2xl text-foreground">320</div>
                      <div className="text-xs text-muted-foreground">Players</div>
                    </div>
                    <div>
                      <div className="font-display text-2xl text-foreground">192</div>
                      <div className="text-xs text-muted-foreground">Games</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button>
                      <Play className="w-4 h-4 mr-2" />
                      Season Highlights
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/seasons/2024-25">View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Podium */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Champion */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🏆</div>
                <h4 className="font-display text-xl text-primary uppercase tracking-wide">Champion</h4>
                <p className="text-muted-foreground text-sm mb-4">TBD</p>
                <p className="font-medium text-foreground">Season Ongoing</p>
                <p className="text-xs text-muted-foreground">Finals: June 2025</p>
              </div>

              {/* Runner-up */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🥈</div>
                <h4 className="font-display text-xl text-foreground uppercase tracking-wide">Runner-Up</h4>
                <p className="text-muted-foreground text-sm mb-4">TBD</p>
                <p className="font-medium text-foreground">Season Ongoing</p>
                <p className="text-xs text-muted-foreground">Finals: June 2025</p>
              </div>

              {/* 3rd Place */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🥉</div>
                <h4 className="font-display text-xl text-orange-dark uppercase tracking-wide">3rd Place</h4>
                <p className="text-muted-foreground text-sm mb-4">TBD</p>
                <p className="font-medium text-foreground">Season Ongoing</p>
                <p className="text-xs text-muted-foreground">Playoffs: May 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Player Rankings */}
        <PlayerRankings />

        {/* Season History */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Season History</h2>
            <p className="text-muted-foreground mb-8">Previous Championships & Records</p>

            <div className="space-y-6">
              {seasonHistory.map((season, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="grid md:grid-cols-[1fr,auto] gap-6 items-center">
                    <div>
                      <h3 className="font-display text-2xl text-foreground mb-1">{season.season}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{season.dates}</p>
                      
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🏆</span>
                          <div>
                            <p className="text-primary font-semibold text-sm">{season.champion}</p>
                            <p className="text-xs text-muted-foreground">Champion</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🥈</span>
                          <div>
                            <p className="font-semibold text-sm text-foreground">{season.runnerUp}</p>
                            <p className="text-xs text-muted-foreground">Runner-up</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🥉</span>
                          <div>
                            <p className="font-semibold text-sm text-foreground">{season.thirdPlace}</p>
                            <p className="text-xs text-muted-foreground">3rd Place</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex gap-6 text-center">
                        <div>
                          <div className="font-display text-xl text-foreground">{season.teams}</div>
                          <div className="text-xs text-muted-foreground">Teams</div>
                        </div>
                        <div>
                          <div className="font-display text-xl text-foreground">{season.players}</div>
                          <div className="text-xs text-muted-foreground">Players</div>
                        </div>
                        <div>
                          <div className="font-display text-xl text-foreground">{season.games}</div>
                          <div className="text-xs text-muted-foreground">Games</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm">
                          <Play className="w-3 h-3 mr-1" />
                          Season Highlights
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/seasons/${season.season}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seasons;
