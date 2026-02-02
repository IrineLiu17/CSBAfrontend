import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayerRankings from "@/components/PlayerRankings";
import TeamRankings from "@/components/TeamRankings";
import { Calendar, Users, Trophy } from "lucide-react";

interface SeasonData {
  season: string;
  dates: string;
  teams: number;
  players: number;
  games: number;
  champion: string;
  runnerUp: string;
  thirdPlace: string;
  status: "completed" | "ongoing";
}

const seasonData: Record<string, SeasonData> = {
  "2024-25": {
    season: "2024-25",
    dates: "October 2024 - June 2025",
    teams: 16,
    players: 320,
    games: 192,
    champion: "TBD",
    runnerUp: "TBD",
    thirdPlace: "TBD",
    status: "ongoing",
  },
  "2023-24": {
    season: "2023-24",
    dates: "September 2023 - June 2024",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
    status: "completed",
  },
  "2022-23": {
    season: "2022-23",
    dates: "September 2022 - June 2023",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
    status: "completed",
  },
  "2021-22": {
    season: "2021-22",
    dates: "September 2021 - June 2022",
    teams: 16,
    players: 304,
    games: 192,
    champion: "CELTICS",
    runnerUp: "ROCKETS",
    thirdPlace: "THUNDER",
    status: "completed",
  },
};

const SeasonDetails = () => {
  const { seasonId } = useParams<{ seasonId: string }>();
  const season = seasonData[seasonId || ""] || seasonData["2024-25"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/seasons" className="text-muted-foreground hover:text-foreground">Seasons</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">{season.season} Season</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-tight italic mb-4">
              {season.season} Season
            </h1>
            <p className="text-muted-foreground mb-6">{season.dates}</p>

            {/* Season Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{season.teams} Teams • {season.players} Players</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{season.games} Games</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>{season.status === "ongoing" ? "Season In Progress" : `Champion: ${season.champion}`}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Podium Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2 text-center">Season Results</h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-8" />

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Champion */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🏆</div>
                <h4 className="font-display text-xl text-primary uppercase tracking-wide">Champion</h4>
                <p className="text-muted-foreground text-sm mb-4">{season.status === "ongoing" ? "TBD" : season.champion}</p>
                <p className="font-medium text-foreground">
                  {season.status === "ongoing" ? "Season Ongoing" : "Season Champion"}
                </p>
              </div>

              {/* Runner-up */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🥈</div>
                <h4 className="font-display text-xl text-foreground uppercase tracking-wide">Runner-Up</h4>
                <p className="text-muted-foreground text-sm mb-4">{season.status === "ongoing" ? "TBD" : season.runnerUp}</p>
                <p className="font-medium text-foreground">
                  {season.status === "ongoing" ? "Season Ongoing" : "Finals Runner-Up"}
                </p>
              </div>

              {/* 3rd Place */}
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-3">🥉</div>
                <h4 className="font-display text-xl text-orange-dark uppercase tracking-wide">3rd Place</h4>
                <p className="text-muted-foreground text-sm mb-4">{season.status === "ongoing" ? "TBD" : season.thirdPlace}</p>
                <p className="font-medium text-foreground">
                  {season.status === "ongoing" ? "Season Ongoing" : "Third Place"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Rankings */}
        <TeamRankings />

        {/* Player Rankings */}
        <PlayerRankings />
      </main>

      <Footer />
    </div>
  );
};

export default SeasonDetails;
