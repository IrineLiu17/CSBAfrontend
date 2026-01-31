import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface Team {
  id: string;
  name: string;
  icon: string;
  record: string;
  players: number;
  city: string;
}

const easternTeams: Team[] = [
  { id: "rockets", name: "ROCKETS", icon: "🚀", record: "15-8", players: 15, city: "Beijing" },
  { id: "thunder", name: "THUNDER", icon: "⚡", record: "18-5", players: 16, city: "Shanghai" },
  { id: "lakers", name: "LAKERS", icon: "🔵", record: "12-11", players: 17, city: "Guangzhou" },
  { id: "celtics", name: "CELTICS", icon: "☘️", record: "20-3", players: 14, city: "Shenzhen" },
  { id: "suns", name: "SUNS", icon: "☀️", record: "16-7", players: 15, city: "Chengdu" },
  { id: "knights", name: "KNIGHTS", icon: "🛡️", record: "13-10", players: 16, city: "Wuhan" },
  { id: "stars", name: "STARS", icon: "⭐", record: "11-12", players: 15, city: "Nanjing" },
  { id: "bulls", name: "BULLS", icon: "🐂", record: "9-14", players: 16, city: "Hangzhou" },
];

const westernTeams: Team[] = [
  { id: "warriors", name: "WARRIORS", icon: "⚔️", record: "17-6", players: 16, city: "Tianjin" },
  { id: "clippers", name: "CLIPPERS", icon: "🚢", record: "15-8", players: 15, city: "Qingdao" },
  { id: "heat", name: "HEAT", icon: "🔥", record: "14-9", players: 16, city: "Chongqing" },
  { id: "spurs", name: "SPURS", icon: "🌙", record: "12-11", players: 17, city: "Xi'an" },
  { id: "magic", name: "MAGIC", icon: "✨", record: "10-13", players: 15, city: "Suzhou" },
  { id: "blazers", name: "BLAZERS", icon: "🔶", record: "9-14", players: 16, city: "Dalian" },
  { id: "grizzlies", name: "GRIZZLIES", icon: "🐻", record: "8-15", players: 15, city: "Changsha" },
  { id: "hawks", name: "HAWKS", icon: "🦅", record: "7-16", players: 14, city: "Xiamen" },
];

const stats = [
  { value: "16", label: "Teams" },
  { value: "2", label: "Divisions" },
  { value: "320", label: "Players" },
];

const TeamCard = ({ team }: { team: Team }) => (
  <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
    <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
      {team.icon}
    </div>
    <h3 className="font-semibold text-foreground mb-1">{team.name}</h3>
    <p className="text-sm text-muted-foreground mb-1">{team.record} Record</p>
    <p className="text-xs text-muted-foreground mb-4">{team.players} Players • {team.city}</p>
    <Button size="sm" className="w-full" asChild>
      <Link to={`/teams/${team.id}`}>View Details</Link>
    </Button>
  </div>
);

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("all");

  const filterTeams = (teams: Team[]) => {
    return teams.filter(team =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      team.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredEastern = filterTeams(easternTeams);
  const filteredWestern = filterTeams(westernTeams);

  const showEastern = divisionFilter === "all" || divisionFilter === "eastern";
  const showWestern = divisionFilter === "all" || divisionFilter === "western";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-background pt-24 pb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-6xl md:text-7xl text-foreground uppercase tracking-tight italic mb-4">
              Teams
            </h1>
            <div className="w-12 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              2024-25 Season • 16 Competitive Teams • Two Divisions
            </p>
          </div>
        </section>

        {/* Stats & Search Bar */}
        <section className="bg-[#F9FAFB] py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Stats */}
              <div className="flex gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Search & Filter */}
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search teams..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 w-[200px] bg-background border-border"
                  />
                </div>
                <Select value={divisionFilter} onValueChange={setDivisionFilter}>
                  <SelectTrigger className="w-[140px] bg-background border-border">
                    <SelectValue placeholder="Division" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Divisions</SelectItem>
                    <SelectItem value="eastern">Eastern</SelectItem>
                    <SelectItem value="western">Western</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Eastern Division */}
        {showEastern && (
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Eastern Division</h2>
              <div className="w-12 h-1 bg-primary mb-2" />
              <p className="text-muted-foreground mb-8">{filteredEastern.length} Teams</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredEastern.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Western Division */}
        {showWestern && (
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-2xl uppercase tracking-wide italic mb-2">Western Division</h2>
              <div className="w-12 h-1 bg-primary mb-2" />
              <p className="text-muted-foreground mb-8">{filteredWestern.length} Teams</p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredWestern.map((team) => (
                  <TeamCard key={team.id} team={team} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Teams;
