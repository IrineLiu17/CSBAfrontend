import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";
import player3 from "@/assets/player-3.jpg";

interface PlayerStat {
  value: string;
  label: string;
  highlight?: boolean;
}

interface Player {
  name: string;
  team: string;
  position: string;
  image: string;
  stats: PlayerStat[];
  description: string;
}

const players: Player[] = [
  {
    name: "Marcus Johnson",
    team: "Thunder Bolts",
    position: "PG",
    image: player1,
    stats: [
      { value: "28.4", label: "PPG", highlight: true },
      { value: "12.1", label: "RPG" },
      { value: "6.8", label: "APG" },
    ],
    description: "Leading scorer and MVP candidate. Johnson brings explosive athleticism and clutch performance to every game.",
  },
  {
    name: "Alex Rodriguez",
    team: "Fire Hawks",
    position: "SF",
    image: player2,
    stats: [
      { value: "22.7", label: "PPG" },
      { value: "8.3", label: "RPG", highlight: true },
      { value: "9.2", label: "APG" },
    ],
    description: "Master playmaker and defensive anchor. Rodriguez orchestrates the Hawks' championship run with precision.",
  },
  {
    name: "Damon Carter",
    team: "Steel Wolves",
    position: "C",
    image: player3,
    stats: [
      { value: "31.2", label: "PPG" },
      { value: "11.4", label: "RPG" },
      { value: "4.9", label: "APG", highlight: true },
    ],
    description: "Dominant force in the paint and league-top scorer. Carter attacks on offense while protecting the rim.",
  },
];

const StarPlayers = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Star Players</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <div
              key={player.name}
              className="card-sports group border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Player Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-4">
                  <h3 className="font-display text-2xl text-dark-foreground">{player.name}</h3>
                  <p className="text-primary text-sm font-medium">
                    {player.team} · {player.position}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-5">
                <div className="flex justify-between mb-4">
                  {player.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className={`font-display text-2xl ${stat.highlight ? "text-primary" : "text-foreground"}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {player.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarPlayers;
