import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Trophy, Medal, Star } from "lucide-react";
import teamHeroBg from "@/assets/team-hero-bg.jpg";

interface Player {
  name: string;
  role: string;
  jersey: string;
  position: string;
  height: string;
  weight: string;
  ppg: number;
  apg: number;
  rpg: number;
  experience: string;
  status: "Active" | "Reserve";
}

interface Coach {
  name: string;
  role: string;
  experience: string;
  avatar: string;
}

interface TeamData {
  name: string;
  fullName: string;
  icon: string;
  conference: string;
  location: string;
  founded: number;
  legacy: number;
  achievements: { label: string; count: string }[];
  stats: { value: string; label: string; sublabel: string }[];
  players: Player[];
  rankingData: { year: string; rank: number }[];
  championships: { year: string; title: string }[];
  records: { label: string; value: string }[];
  alumni: { name: string; achievement: string }[];
  coaches: Coach[];
}

const mockPlayers: Player[] = [
  { name: "Michael Rodriguez", role: "Captain", jersey: "#23", position: "Point Guard", height: "6'2\" (188cm)", weight: "185 lbs", ppg: 18.5, apg: 7.2, rpg: 4.8, experience: "6 years", status: "Active" },
  { name: "James Thompson", role: "Shooting Guard", jersey: "#13", position: "Shooting Guard", height: "6'5\" (196cm)", weight: "205 lbs", ppg: 22.1, apg: 3.4, rpg: 5.6, experience: "5 years", status: "Active" },
  { name: "David Chen", role: "Center", jersey: "#34", position: "Center", height: "6'10\" (208cm)", weight: "245 lbs", ppg: 15.8, apg: 2.1, rpg: 11.3, experience: "2 years", status: "Active" },
  { name: "Marcus Johnson", role: "Small Forward", jersey: "#7", position: "Small Forward", height: "6'7\" (201cm)", weight: "210 lbs", ppg: 14.2, apg: 4.7, rpg: 8.1, experience: "3 years", status: "Active" },
  { name: "Kevin Liu", role: "Power Forward", jersey: "#21", position: "Power Forward", height: "6'8\" (203cm)", weight: "225 lbs", ppg: 12.5, apg: 2.8, rpg: 9.4, experience: "2 years", status: "Active" },
  { name: "Alex Martinez", role: "Reserve Guard", jersey: "#5", position: "Point Guard", height: "6'1\" (183cm)", weight: "175 lbs", ppg: 9.8, apg: 6.1, rpg: 3.2, experience: "1 year", status: "Reserve" },
];

const mockRankingData = [
  { year: "2015", rank: 8 },
  { year: "2016", rank: 5 },
  { year: "2017", rank: 3 },
  { year: "2018", rank: 4 },
  { year: "2019", rank: 1 },
  { year: "2020", rank: 2 },
  { year: "2021", rank: 1 },
  { year: "2022", rank: 3 },
  { year: "2023", rank: 2 },
  { year: "2024", rank: 3 },
];

const mockCoaches: Coach[] = [
  { name: "Kelvin Sampson", role: "Head Coach", experience: "12 years with team", avatar: "👨‍🦲" },
  { name: "Alvin Brooks", role: "Assistant Coach", experience: "8 years experience", avatar: "👨" },
  { name: "Terrance Arceneaux", role: "Assistant Coach", experience: "5 years experience", avatar: "👨‍🦱" },
  { name: "Ben Davis", role: "Development Coach", experience: "3 years experience", avatar: "👨‍🦰" },
];

const teamsData: Record<string, TeamData> = {
  rockets: {
    name: "ROCKETS",
    fullName: "Houston Rockets",
    icon: "🚀",
    conference: "Eastern Conference",
    location: "Beijing, China",
    founded: 1975,
    legacy: 49,
    achievements: [
      { label: "Champion", count: "2x" },
      { label: "Runner-up", count: "1x" },
      { label: "Third Place", count: "3x" },
    ],
    stats: [
      { value: "15", label: "Active Players", sublabel: "Current Roster" },
      { value: "6.8ft", label: "Avg Height", sublabel: "Team Average" },
      { value: "198lbs", label: "Avg Weight", sublabel: "Team Average" },
      { value: "#3", label: "Current Rank", sublabel: "Conference Standing" },
    ],
    players: mockPlayers,
    rankingData: mockRankingData,
    championships: [
      { year: "2019", title: "Eastern Conference" },
      { year: "2021", title: "Eastern Conference" },
    ],
    records: [
      { label: "Best Season Record", value: "28-2 (2021)" },
      { label: "Longest Win Streak", value: "18 games" },
      { label: "Home Win Rate", value: "82.4%" },
      { label: "Conference Titles", value: "8 times" },
    ],
    alumni: [
      { name: "Hakeem Olajuwon", achievement: "NBA Hall of Fame" },
      { name: "Clyde Drexler", achievement: "NBA Champion" },
      { name: "Elvin Hayes", achievement: "NBA Legend" },
      { name: "Marcus Sasser", achievement: "Current NBA Player" },
    ],
    coaches: mockCoaches,
  },
};

// Generate data for other teams
const generateTeamData = (name: string, icon: string): TeamData => ({
  ...teamsData.rockets,
  name: name.toUpperCase(),
  fullName: `${name.charAt(0).toUpperCase() + name.slice(1)} Team`,
  icon,
});

const allTeams: Record<string, TeamData> = {
  rockets: teamsData.rockets,
  thunder: generateTeamData("thunder", "⚡"),
  lakers: generateTeamData("lakers", "🔵"),
  celtics: generateTeamData("celtics", "☘️"),
  suns: generateTeamData("suns", "☀️"),
  knights: generateTeamData("knights", "🛡️"),
  stars: generateTeamData("stars", "⭐"),
  bulls: generateTeamData("bulls", "🐂"),
  warriors: generateTeamData("warriors", "⚔️"),
  clippers: generateTeamData("clippers", "🚢"),
  heat: generateTeamData("heat", "🔥"),
  spurs: generateTeamData("spurs", "🌙"),
  magic: generateTeamData("magic", "✨"),
  blazers: generateTeamData("blazers", "🔶"),
  grizzlies: generateTeamData("grizzlies", "🐻"),
  hawks: generateTeamData("hawks", "🦅"),
};

const TeamDetails = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = allTeams[teamId || "rockets"] || allTeams.rockets;

  const activeCount = team.players.filter(p => p.status === "Active").length;
  const reserveCount = team.players.filter(p => p.status === "Reserve").length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={teamHeroBg} 
              alt="Basketball court" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link to="/" className="text-white/70 hover:text-white">Home</Link>
              <span className="text-white/50">/</span>
              <Link to="/teams" className="text-white/70 hover:text-white">Teams</Link>
              <span className="text-white/50">/</span>
              <span className="text-primary-foreground">{team.name}</span>
            </nav>

            {/* Achievements */}
            <div className="flex flex-wrap gap-3 mb-6">
              {team.achievements.map((achievement, index) => (
                <Badge key={index} variant="secondary" className="bg-white/90 text-foreground px-4 py-1.5">
                  <Trophy className="w-4 h-4 mr-2 text-primary" />
                  {achievement.count} {achievement.label}
                </Badge>
              ))}
            </div>

            {/* Team Info */}
            <div className="mb-6">
              <p className="text-white/80 text-sm mb-2">{team.conference} • {team.location}</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{team.icon}</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight italic">
                  {team.fullName}
                </h1>
              </div>
              <p className="text-white/70 mt-2">University of {team.name} Basketball Team</p>
            </div>

            {/* Season & Founded */}
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-primary-foreground text-primary">ACTIVE SEASON</Badge>
              <span className="text-white font-semibold">2024-2025</span>
              <span className="text-white/60">Founded: {team.founded} • {team.legacy} Years Legacy</span>
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.stats.map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center shadow-sm">
                  <div className="font-display text-2xl md:text-3xl text-primary">{stat.value}</div>
                  <div className="font-medium text-foreground text-sm">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Roster */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Team Roster</h2>
                <div className="w-12 h-1 bg-primary mb-2" />
                <p className="text-muted-foreground text-sm">Complete player information and performance statistics</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                Total Players: {team.players.length} • Active: {activeCount} • Reserve: {reserveCount}
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Player</TableHead>
                    <TableHead>Jersey</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Height</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead className="text-center">PPG</TableHead>
                    <TableHead className="text-center">APG</TableHead>
                    <TableHead className="text-center">RPG</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {team.players.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <Link 
                            to={`/players/${player.name.toLowerCase().replace(/\s+/g, "-")}`}
                            className="font-medium text-primary hover:underline cursor-pointer"
                          >
                            {player.name}
                          </Link>
                          <div className="text-xs text-muted-foreground">{player.role}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          {player.jersey}
                        </Badge>
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>{player.height}</TableCell>
                      <TableCell>{player.weight}</TableCell>
                      <TableCell className="text-center font-medium">{player.ppg}</TableCell>
                      <TableCell className="text-center font-medium">{player.apg}</TableCell>
                      <TableCell className="text-center font-medium">{player.rpg}</TableCell>
                      <TableCell>{player.experience}</TableCell>
                      <TableCell>
                        <span className={`text-sm ${player.status === "Active" ? "text-primary" : "text-muted-foreground"}`}>
                          {player.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Annual Ranking Performance */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Annual Ranking Performance</h2>
            <div className="w-12 h-1 bg-primary mb-8" />

            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-center text-muted-foreground mb-6">
                Historical team ranking progression in {team.conference} over the past decade
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={team.rankingData}>
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis reversed domain={[1, 10]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rank"
                      stroke="hsl(var(--primary))"
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Team History & Achievements */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Team History & Achievements</h2>
            <div className="w-12 h-1 bg-primary mb-2" />
            <p className="text-muted-foreground mb-8">{team.legacy} years of excellence in collegiate basketball</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Championships */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Championships</h3>
                </div>
                <div className="space-y-3">
                  {team.championships.map((champ, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{champ.year} {champ.title}</span>
                      <Badge variant="outline" className="text-primary border-primary">1st</Badge>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-border space-y-1 text-sm text-muted-foreground">
                    <p>🏆 NCAA Division II participants (4x)</p>
                    <p>🏆 Conference Tournament winners (5x)</p>
                  </div>
                </div>
              </div>

              {/* Season Records */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Medal className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Season Records</h3>
                </div>
                <div className="space-y-3">
                  {team.records.map((record, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{record.label}</span>
                      <span className="font-medium text-primary">{record.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Alumni */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Notable Alumni</h3>
                </div>
                <div className="space-y-3">
                  {team.alumni.map((person, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-primary">⭐</span>
                      <div>
                        <span className="font-medium">{person.name}</span>
                        <span className="text-muted-foreground"> - {person.achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coaching Staff */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl text-center mb-2">Coaching Staff</h3>
              <p className="text-center text-muted-foreground mb-8">
                Experienced leadership guiding the {team.name} to excellence
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {team.coaches.map((coach, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 bg-muted rounded-full flex items-center justify-center text-3xl">
                      {coach.avatar}
                    </div>
                    <h4 className="font-semibold">{coach.name}</h4>
                    <p className="text-sm text-muted-foreground">{coach.role}</p>
                    <p className="text-xs text-muted-foreground">{coach.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamDetails;
