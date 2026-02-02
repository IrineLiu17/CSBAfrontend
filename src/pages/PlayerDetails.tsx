import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Medal, Star, ArrowRight, TrendingUp, Award } from "lucide-react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

interface PlayerData {
  id: string;
  name: string;
  jersey: string;
  position: string;
  team: string;
  teamId: string;
  height: string;
  weight: string;
  age: number;
  avatar: string;
  playerLevel: string;
  leagueRanking: number;
  rankChange: number;
  levelProgress: number;
  currentSeason: {
    ppg: number;
    rpg: number;
    apg: number;
    fieldGoal: number;
    threePoint: number;
    freeThrow: number;
    steals: number;
    blocks: number;
    turnovers: number;
    minutes: number;
    plusMinus: number;
  };
  previousSeasons: {
    season: string;
    games: number;
    ppg: number;
    rpg: number;
    apg: number;
    achievements: string[];
  }[];
  recentGames: {
    date: string;
    opponent: string;
    result: string;
    isWin: boolean;
    stats: string;
  }[];
  timeline: {
    date: string;
    title: string;
    description: string;
    isHighlight?: boolean;
  }[];
  abilities: {
    name: string;
    value: number;
  }[];
}

const mockPlayers: Record<string, PlayerData> = {
  "michael-rodriguez": {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    jersey: "#23",
    position: "Point Guard",
    team: "Houston Rockets",
    teamId: "rockets",
    height: "6'2\" (188cm)",
    weight: "185 lbs",
    age: 28,
    avatar: "🏀",
    playerLevel: "LV2",
    leagueRanking: 3,
    rankChange: 2,
    levelProgress: 75,
    currentSeason: {
      ppg: 31.2,
      rpg: 6.8,
      apg: 10.5,
      fieldGoal: 52.8,
      threePoint: 38.2,
      freeThrow: 85.4,
      steals: 6.8,
      blocks: 3.1,
      turnovers: 7.3,
      minutes: 36.4,
      plusMinus: 8.7,
    },
    previousSeasons: [
      { season: "2024-25", games: 82, ppg: 30.1, rpg: 6.7, apg: 5.1, achievements: ["NBA Finals Champion", "Finals MVP"] },
      { season: "2023-24", games: 78, ppg: 28.7, rpg: 5.6, apg: 5.1, achievements: ["All-Star", "All-NBA First Team"] },
      { season: "2022-23", games: 75, ppg: 26.4, rpg: 5.2, apg: 4.8, achievements: [] },
    ],
    recentGames: [
      { date: "Jan 25, 2026", opponent: "vs Lakers", result: "W 112-108", isWin: true, stats: "37 PTS • 8 REB • 12 AST • 2 STL" },
      { date: "Jan 22, 2026", opponent: "@ Celtics", result: "L 98-105", isWin: false, stats: "29 PTS • 6 REB • 9 AST • 1 STL" },
      { date: "Jan 19, 2026", opponent: "vs Warriors", result: "W 124-117", isWin: true, stats: "41 PTS • 7 REB • 11 AST • 3 STL" },
    ],
    timeline: [
      { date: "September 2018", title: "DRAFTED", description: "Selected as 1st overall pick in the 2018 Draft by the Rockets" },
      { date: "May 2020", title: "FIRST ALL-STAR", description: "Named to first All-Star team with 23.5 PPG average" },
      { date: "June 2023", title: "FIRST MVP AWARD", description: "Won first MVP with 28.7 PPG, 6.2 RPG, 5.1 APG", isHighlight: true },
      { date: "June 2025", title: "CHAMPIONSHIP", description: "Led team to first championship, winning Finals MVP" },
    ],
    abilities: [
      { name: "Scoring", value: 95 },
      { name: "Leadership", value: 88 },
      { name: "Athleticism", value: 85 },
      { name: "Rebounding", value: 70 },
      { name: "Defense", value: 75 },
      { name: "Playmaking", value: 92 },
    ],
  },
};

// Generate mock player data for other players
const generatePlayerData = (name: string, jersey: string, position: string, teamId: string, teamName: string): PlayerData => ({
  ...mockPlayers["michael-rodriguez"],
  id: name.toLowerCase().replace(/\s+/g, "-"),
  name,
  jersey,
  position,
  team: teamName,
  teamId,
});

const allPlayers: Record<string, PlayerData> = {
  "michael-rodriguez": mockPlayers["michael-rodriguez"],
  "james-thompson": generatePlayerData("James Thompson", "#13", "Shooting Guard", "rockets", "Houston Rockets"),
  "david-chen": generatePlayerData("David Chen", "#34", "Center", "rockets", "Houston Rockets"),
  "marcus-johnson": generatePlayerData("Marcus Johnson", "#7", "Small Forward", "rockets", "Houston Rockets"),
  "kevin-liu": generatePlayerData("Kevin Liu", "#21", "Power Forward", "rockets", "Houston Rockets"),
  "alex-martinez": generatePlayerData("Alex Martinez", "#5", "Point Guard", "rockets", "Houston Rockets"),
};

const PlayerDetails = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const player = allPlayers[playerId || "michael-rodriguez"] || allPlayers["michael-rodriguez"];

  const radarData = player.abilities.map(ability => ({
    subject: ability.name,
    A: ability.value,
    fullMark: 100,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-secondary py-8">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link to="/teams" className="text-muted-foreground hover:text-foreground">Teams</Link>
              <span className="text-muted-foreground">/</span>
              <Link to={`/teams/${player.teamId}`} className="text-muted-foreground hover:text-foreground">{player.team}</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{player.name}</span>
            </nav>

            {/* Player Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-5xl">
                  {player.avatar}
                </div>
                <div>
                  <h1 className="font-display text-3xl md:text-4xl uppercase tracking-tight italic text-foreground">
                    {player.name}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    {player.jersey} • {player.position} • {player.team}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Height: {player.height} Weight: {player.weight} Age: {player.age}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="font-semibold text-foreground">January 28, 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* League Status Cards */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-xl uppercase tracking-wide italic mb-2">League Status</h2>
            <p className="text-muted-foreground text-sm mb-6">Current League Registration & Ranking Information</p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Player Level Card */}
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-6">
                  <p className="text-sm opacity-80">Player Level</p>
                  <p className="text-3xl font-bold mt-1">{player.playerLevel}</p>
                  <p className="text-sm mt-2 opacity-80">Elite Professional Status</p>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress to LV3</span>
                      <span>{player.levelProgress}%</span>
                    </div>
                    <Progress value={player.levelProgress} className="h-2 bg-primary-foreground/30" />
                  </div>
                </CardContent>
              </Card>

              {/* League Ranking Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm">League Ranking</span>
                  </div>
                  <p className="text-3xl font-bold mt-2 text-foreground">#{player.leagueRanking}</p>
                  <p className="text-sm text-muted-foreground mt-1">Overall Performance Ranking</p>
                  <p className="text-sm text-primary mt-2 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +{player.rankChange} positions this month
                  </p>
                </CardContent>
              </Card>

              {/* View Rankings Card */}
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">View Complete</p>
                    <p className="text-lg font-semibold text-foreground">League Rankings</p>
                    <p className="text-sm text-muted-foreground">See all player standings & statistics</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-foreground" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Timeline - Horizontal */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-xl uppercase tracking-wide italic mb-2">Career Timeline</h2>
            <p className="text-muted-foreground text-sm mb-6">Professional Journey • Milestones & Achievements</p>

            <div className="relative">
              {/* Horizontal line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
              
              {/* Timeline items */}
              <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                {player.timeline.map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-64 relative pt-12">
                    {/* Dot */}
                    <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                      item.isHighlight ? 'bg-primary border-primary' : 'bg-background border-primary'
                    }`} />
                    
                    {/* Card */}
                    <Card className={item.isHighlight ? 'bg-primary text-primary-foreground' : ''}>
                      <CardContent className="p-4">
                        <p className={`text-xs ${item.isHighlight ? 'opacity-80' : 'text-muted-foreground'}`}>
                          {item.date}
                        </p>
                        <h4 className="font-semibold mt-1">{item.title}</h4>
                        <p className={`text-sm mt-2 ${item.isHighlight ? 'opacity-90' : 'text-muted-foreground'}`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Game Records */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-xl uppercase tracking-wide italic mb-2">Game Records</h2>
            <p className="text-muted-foreground text-sm mb-6">Season Performance • Game History • Highlights</p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Season Games */}
              <div>
                <h3 className="font-semibold mb-1">CURRENT SEASON 2025-26</h3>
                <p className="text-sm text-muted-foreground mb-4">25 Games Played • 15 Wins • 10 Losses</p>
                
                <div className="space-y-3">
                  {player.recentGames.map((game, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">{game.date}</span>
                            <span className="font-medium">{game.opponent}</span>
                            <Badge variant={game.isWin ? "default" : "destructive"} className="text-xs">
                              {game.result}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{game.stats}</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-primary border-primary">
                          Watch Highlights
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Previous Seasons */}
              <div>
                <h3 className="font-semibold mb-1">PREVIOUS SEASONS</h3>
                <p className="text-sm text-muted-foreground mb-4">Career Highlights • Historical Performance</p>
                
                <div className="space-y-3">
                  {player.previousSeasons.map((season, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{season.season} Season</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {season.ppg} PPG • {season.rpg} RPG • {season.apg} APG
                            </p>
                            {season.achievements.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {season.achievements.map((achievement, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs text-primary">
                                    {achievement}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{season.games} Games</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Season Performance */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-xl uppercase tracking-wide italic mb-2">Season Performance</h2>
            <p className="text-muted-foreground text-sm mb-6">2025-26 Season Statistics & Analysis</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Detailed Statistics */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-6">DETAILED STATISTICS</h3>
                  
                  {/* Main Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{player.currentSeason.ppg}</p>
                      <p className="text-sm text-muted-foreground">PPG</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{player.currentSeason.rpg}</p>
                      <p className="text-sm text-muted-foreground">RPG</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">{player.currentSeason.apg}</p>
                      <p className="text-sm text-muted-foreground">APG</p>
                    </div>
                  </div>

                  {/* Other Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Field Goal %</span>
                      <span className="font-medium">{player.currentSeason.fieldGoal}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">3-Point %</span>
                      <span className="font-medium">{player.currentSeason.threePoint}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Free Throw %</span>
                      <span className="font-medium">{player.currentSeason.freeThrow}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Steals</span>
                      <span className="font-medium">{player.currentSeason.steals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Blocks</span>
                      <span className="font-medium">{player.currentSeason.blocks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Turnovers</span>
                      <span className="font-medium">{player.currentSeason.turnovers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Minutes</span>
                      <span className="font-medium">{player.currentSeason.minutes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Plus/Minus</span>
                      <span className="font-medium text-primary">+{player.currentSeason.plusMinus}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ability Radar */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">ABILITY RADAR</h3>
                    <Button variant="outline" size="sm" className="text-primary border-primary">
                      View Data
                    </Button>
                  </div>
                  
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="hsl(var(--border))" />
                        <PolarAngleAxis 
                          dataKey="subject" 
                          tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                        />
                        <Radar
                          name="Abilities"
                          dataKey="A"
                          stroke="hsl(var(--primary))"
                          fill="hsl(var(--primary))"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlayerDetails;
