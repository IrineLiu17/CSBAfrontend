import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play } from "lucide-react";

const scheduleStats = [
  { value: "48", label: "Total Games" },
  { value: "3", label: "Live Now", highlight: true },
  { value: "12", label: "This Week" },
];

interface UpcomingGame {
  date: string;
  time: string;
  homeTeam: { name: string; record: string };
  awayTeam: { name: string; record: string };
  venue: string;
  location: string;
}

interface CompletedGame {
  date: string;
  homeTeam: { name: string; score: number };
  awayTeam: { name: string; score: number };
  venue: string;
  location: string;
  winner: "home" | "away";
}

const upcomingGames: UpcomingGame[] = [
  {
    date: "JAN 13",
    time: "20:00 CST",
    homeTeam: { name: "WARRIORS", record: "14-9 Record" },
    awayTeam: { name: "CLIPPERS", record: "16-7 Record" },
    venue: "Guangzhou Gymnasium",
    location: "Beijing Sports Arena",
  },
  {
    date: "JAN 14",
    time: "19:30 CST",
    homeTeam: { name: "HEAT", record: "11-12 Record" },
    awayTeam: { name: "SPURS", record: "8-15 Record" },
    venue: "Shenzhen Sports Center",
    location: "Beijing Sports Arena",
  },
  {
    date: "JAN 15",
    time: "20:00 CST",
    homeTeam: { name: "THUNDER", record: "18-5 Record" },
    awayTeam: { name: "ROCKETS", record: "15-8 Record" },
    venue: "Shanghai Arena",
    location: "Shanghai Sports Center",
  },
  {
    date: "JAN 16",
    time: "19:00 CST",
    homeTeam: { name: "CELTICS", record: "17-6 Record" },
    awayTeam: { name: "LAKERS", record: "14-9 Record" },
    venue: "Beijing Stadium",
    location: "Beijing Sports Arena",
  },
];

const recentResults: CompletedGame[] = [
  {
    date: "JAN 10",
    homeTeam: { name: "ROCKETS", score: 115 },
    awayTeam: { name: "THUNDER", score: 108 },
    venue: "Beijing Sports Center",
    location: "Beijing Sports Arena",
    winner: "home",
  },
  {
    date: "JAN 09",
    homeTeam: { name: "CELTICS", score: 122 },
    awayTeam: { name: "LAKERS", score: 109 },
    venue: "Guangzhou Gymnasium",
    location: "Beijing Sports Arena",
    winner: "home",
  },
  {
    date: "JAN 08",
    homeTeam: { name: "WARRIORS", score: 98 },
    awayTeam: { name: "HEAT", score: 94 },
    venue: "Shanghai Arena",
    location: "Beijing Sports Arena",
    winner: "home",
  },
];

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-background pt-24 pb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-6xl md:text-7xl text-foreground uppercase tracking-tight italic mb-4">
              Schedule
            </h1>
            <div className="w-12 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              2024-25 Season • Complete Match Schedule • Results & Highlights
            </p>
          </div>
        </section>

        {/* Stats & Filters Bar */}
        <section className="bg-dark py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Stats */}
              <div className="flex gap-8 text-center">
                {scheduleStats.map((stat) => (
                  <div key={stat.label}>
                    <div className={`font-display text-3xl ${stat.highlight ? "text-primary" : "text-dark-foreground"}`}>
                      {stat.value}
                    </div>
                    <div className="text-dark-foreground/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                <Select defaultValue="2024-25">
                  <SelectTrigger className="w-[140px] bg-dark-foreground text-dark border-dark-foreground/20">
                    <SelectValue placeholder="Season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-25">2024-25</SelectItem>
                    <SelectItem value="2023-24">2023-24</SelectItem>
                    <SelectItem value="2022-23">2022-23</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] bg-dark-foreground text-dark border-dark-foreground/20">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="east">Eastern</SelectItem>
                    <SelectItem value="west">Western</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] bg-dark-foreground text-dark border-dark-foreground/20">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Games */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Upcoming</h2>
            <div className="w-12 h-1 bg-primary mb-2" />
            <p className="text-muted-foreground mb-8">Next 7 Days</p>

            <div className="space-y-4">
              {upcomingGames.map((game, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-[120px,1fr,auto] gap-4 items-center">
                    {/* Date & Time */}
                    <div>
                      <div className="font-display text-xl text-foreground">{game.date}</div>
                      <div className="text-sm text-muted-foreground">{game.time}</div>
                    </div>

                    {/* Teams */}
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[100px]">
                        <div className="font-semibold text-foreground">{game.homeTeam.name}</div>
                        <div className="text-xs text-muted-foreground">{game.homeTeam.record}</div>
                      </div>
                      <span className="text-muted-foreground font-medium">VS</span>
                      <div className="text-center min-w-[100px]">
                        <div className="font-semibold text-foreground">{game.awayTeam.name}</div>
                        <div className="text-xs text-muted-foreground">{game.awayTeam.record}</div>
                      </div>
                    </div>

                    {/* Venue & Action */}
                    <div className="flex items-center gap-6">
                      <div className="text-right hidden md:block">
                        <div className="text-sm font-medium text-foreground">{game.venue}</div>
                        <div className="text-xs text-muted-foreground">{game.location}</div>
                      </div>
                      <Button variant="default" size="sm">
                        Game Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Results */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Recent Results</h2>
            <div className="w-12 h-1 bg-primary mb-2" />
            <p className="text-muted-foreground mb-8">Latest Completed Games</p>

            <div className="space-y-4">
              {recentResults.map((game, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-[120px,1fr,auto] gap-4 items-center">
                    {/* Date */}
                    <div>
                      <div className="font-display text-xl text-foreground">{game.date}</div>
                      <div className="text-sm text-muted-foreground">FINAL</div>
                    </div>

                    {/* Teams & Scores */}
                    <div className="flex items-center gap-6">
                      <div className="text-center min-w-[80px]">
                        <div className="font-semibold text-foreground">{game.homeTeam.name}</div>
                        <div className={`font-display text-3xl ${game.winner === "home" ? "text-primary" : "text-muted-foreground"}`}>
                          {game.homeTeam.score}
                        </div>
                      </div>
                      <span className="text-muted-foreground font-medium">-</span>
                      <div className="text-center min-w-[80px]">
                        <div className="font-semibold text-foreground">{game.awayTeam.name}</div>
                        <div className={`font-display text-3xl ${game.winner === "away" ? "text-primary" : "text-muted-foreground"}`}>
                          {game.awayTeam.score}
                        </div>
                      </div>
                    </div>

                    {/* Venue & Actions */}
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden md:block">
                        <div className="text-sm font-medium text-foreground">{game.venue}</div>
                        <div className="text-xs text-muted-foreground">{game.location}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm">
                          <Play className="w-3 h-3 mr-1" />
                          Watch Highlights
                        </Button>
                        <Button variant="outline" size="sm">
                          Full Stats
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

export default Schedule;
