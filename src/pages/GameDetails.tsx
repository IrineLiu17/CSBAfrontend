import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, User } from "lucide-react";

interface Player {
  name: string;
  avatar: string;
  pts: number;
  reb: number;
  ast: number;
}

interface GameData {
  homeTeam: { name: string; players: Player[] };
  awayTeam: { name: string; players: Player[] };
  date: string;
  time: string;
  venue: string;
  referee: string;
}

const mockPlayers: Player[] = [
  { name: "J.Smith", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
  { name: "M.Vladimiski", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
  { name: "G.Antetokounmpo", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
  { name: "A.Archiver", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
  { name: "T.Nitropoulos", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
  { name: "S.Jones", avatar: "🏀", pts: 13, reb: 13, ast: 15 },
];

const gameData: Record<string, GameData> = {
  "warriors-vs-clippers": {
    homeTeam: { name: "WARRIORS", players: mockPlayers },
    awayTeam: { name: "CLIPPERS", players: mockPlayers },
    date: "January 13, 2025",
    time: "8:00 PM",
    venue: "Guangzhou Gymnasium, Court 1",
    referee: "Zhang Wei",
  },
  "heat-vs-spurs": {
    homeTeam: { name: "HEAT", players: mockPlayers },
    awayTeam: { name: "SPURS", players: mockPlayers },
    date: "January 14, 2025",
    time: "7:30 PM",
    venue: "Shenzhen Sports Center, Court 2",
    referee: "Li Ming",
  },
  "thunder-vs-rockets": {
    homeTeam: { name: "THUNDER", players: mockPlayers },
    awayTeam: { name: "ROCKETS", players: mockPlayers },
    date: "January 15, 2025",
    time: "8:00 PM",
    venue: "Shanghai Arena, Court 1",
    referee: "Wang Jun",
  },
  "celtics-vs-lakers": {
    homeTeam: { name: "CELTICS", players: mockPlayers },
    awayTeam: { name: "LAKERS", players: mockPlayers },
    date: "January 16, 2025",
    time: "7:00 PM",
    venue: "Beijing Stadium, Court 1",
    referee: "Chen Hong",
  },
};

const rules = [
  { title: "Game format", items: ["4 quarters, 12 minutes each", "5-minute overtime if tied", "24-second shot clock", "8-second backcourt violation"] },
  { title: "Game format", items: ["4 quarters, 12 minutes each", "5-minute overtime if tied", "24-second shot clock", "8-second backcourt violation"] },
  { title: "Game format", items: ["4 quarters, 12 minutes each", "5-minute overtime if tied", "24-second shot clock", "8-second backcourt violation"] },
];

const PlayerCard = ({ player }: { player: Player }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
      {player.avatar}
    </div>
    <div className="flex-1">
      <div className="font-medium text-foreground">{player.name}</div>
      <div className="flex gap-3 text-xs text-muted-foreground">
        <span><span className="text-foreground font-medium">{player.pts}</span> PTS</span>
        <span><span className="text-foreground font-medium">{player.reb}</span> REB</span>
        <span><span className="text-foreground font-medium">{player.ast}</span> AST</span>
      </div>
    </div>
  </div>
);

const GameDetails = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameData[gameId || ""] || gameData["warriors-vs-clippers"];

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
              <Link to="/schedule" className="text-muted-foreground hover:text-foreground">Schedule</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-primary">{game.homeTeam.name} vs {game.awayTeam.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
              <div className="flex items-center gap-2 md:gap-4">
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-tight italic">
                  {game.homeTeam.name}
                </h1>
                <span className="text-2xl md:text-4xl">🏀</span>
              </div>
              <span className="text-xl md:text-3xl text-muted-foreground font-medium">VS</span>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="text-2xl md:text-4xl">🏀</span>
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground uppercase tracking-tight italic">
                  {game.awayTeam.name}
                </h1>
              </div>
            </div>

            {/* Game Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{game.date} • {game.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{game.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Referee: {game.referee}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Player Stats */}
              <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
                <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Player Stats</h2>
                <div className="w-12 h-1 bg-primary mb-6" />

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Home Team */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-semibold text-foreground">{game.homeTeam.name}</h3>
                      <span className="text-xl">🏀</span>
                    </div>
                    <div className="space-y-1">
                      {game.homeTeam.players.map((player, index) => (
                        <PlayerCard key={index} player={player} />
                      ))}
                    </div>
                  </div>

                  {/* Away Team */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-semibold text-foreground">{game.awayTeam.name}</h3>
                      <span className="text-xl">🏀</span>
                    </div>
                    <div className="space-y-1">
                      {game.awayTeam.players.map((player, index) => (
                        <PlayerCard key={index} player={player} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Rules</h2>
                <div className="w-12 h-1 bg-primary mb-6" />

                <div className="space-y-6">
                  {rules.map((section, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GameDetails;
