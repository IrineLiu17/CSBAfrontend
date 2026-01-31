import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, Trophy } from "lucide-react";

const seasonStats = [
  { value: "7", label: "Total Seasons" },
  { value: "2024-25", label: "Current Season", highlight: true },
  { value: "16", label: "Active Teams" },
  { value: "320", label: "Total Players" },
];

const rankingCategories = ["Points", "Assists", "Rebounds", "Efficiency", "Turnovers", "Minutes"];

const playerRankings = [
  { rank: 1, name: "Michael Rodriguez", team: "ROCKETS", ppg: 28.5, apg: 8.2, rpg: 11.8, eff: 24.3, to: 2.1, min: 36.2, performance: 93 },
  { rank: 2, name: "James Thompson", team: "CELTICS", ppg: 26.8, apg: 9.1, rpg: 7.4, eff: 22.7, to: 1.8, min: 34.6, performance: 89 },
  { rank: 3, name: "David Chen", team: "WARRIORS", ppg: 24.9, apg: 11.3, rpg: 5.7, eff: 21.8, to: 2.3, min: 32.1, performance: 85 },
  { rank: 4, name: "Alexander Park", team: "THUNDER", ppg: 23.2, apg: 6.8, rpg: 12.5, eff: 20.9, to: 1.9, min: 35.8, performance: 83 },
  { rank: 5, name: "Roberto Silva", team: "LAKERS", ppg: 22.7, apg: 7.9, rpg: 9.3, eff: 19.4, to: 2.0, min: 33.7, performance: 80 },
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
  const [activeCategory, setActiveCategory] = useState("Points");

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
                    <Button variant="outline">View Details</Button>
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
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Player Rankings</h2>
            <p className="text-muted-foreground mb-8">Top 20% Player Performance • Multiple Categories • 2024-25 Season</p>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {rankingCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Rankings Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Rank</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Player</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Team</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">PPG</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">APG</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">RPG</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">EFF</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">TO</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">MIN</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerRankings.map((player) => (
                      <tr key={player.rank} className="border-b border-border last:border-0 hover:bg-muted/50">
                        <td className="p-4">
                          <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                            player.rank === 1 ? "bg-primary" :
                            player.rank === 2 ? "bg-gray-500" :
                            player.rank === 3 ? "bg-orange-dark" : "bg-muted-foreground"
                          }`}>
                            {player.rank}
                          </span>
                        </td>
                        <td className="p-4 font-medium text-foreground">{player.name}</td>
                        <td className="p-4 text-muted-foreground text-sm">{player.team}</td>
                        <td className="p-4 text-center text-primary font-semibold">{player.ppg}</td>
                        <td className="p-4 text-center text-foreground">{player.apg}</td>
                        <td className="p-4 text-center text-foreground">{player.rpg}</td>
                        <td className="p-4 text-center text-foreground">{player.eff}</td>
                        <td className="p-4 text-center text-foreground">{player.to}</td>
                        <td className="p-4 text-center text-foreground">{player.min}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${player.performance}%` }}
                              />
                            </div>
                            <span className="text-sm text-muted-foreground">{player.performance}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6">
              <Button variant="outline">View Complete Rankings</Button>
            </div>
          </div>
        </section>

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
                        <Button variant="outline" size="sm">View Details</Button>
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
