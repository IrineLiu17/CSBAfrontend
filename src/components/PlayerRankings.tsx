import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const rankingCategories = ["Points", "Assists", "Rebounds", "Efficiency", "Turnovers", "Minutes"];

// Generate 100 player rankings
const generatePlayers = () => {
  const teams = ["ROCKETS", "CELTICS", "WARRIORS", "THUNDER", "LAKERS", "HEAT", "BULLS", "NETS", "SUNS", "MAVS"];
  const firstNames = ["Michael", "James", "David", "Alexander", "Roberto", "Kevin", "Stephen", "LeBron", "Anthony", "Chris", "Damian", "Jayson", "Luka", "Giannis", "Nikola", "Joel", "Devin", "Ja", "Trae", "Zion"];
  const lastNames = ["Rodriguez", "Thompson", "Chen", "Park", "Silva", "Johnson", "Williams", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Garcia"];
  
  const players = [];
  for (let i = 1; i <= 100; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const team = teams[Math.floor(Math.random() * teams.length)];
    
    players.push({
      rank: i,
      name: `${firstName} ${lastName}`,
      team,
      ppg: Math.round((30 - i * 0.15 + Math.random() * 5) * 10) / 10,
      apg: Math.round((12 - i * 0.08 + Math.random() * 3) * 10) / 10,
      rpg: Math.round((14 - i * 0.1 + Math.random() * 4) * 10) / 10,
      eff: Math.round((25 - i * 0.12 + Math.random() * 4) * 10) / 10,
      to: Math.round((1.5 + i * 0.02 + Math.random() * 1) * 10) / 10,
      min: Math.round((38 - i * 0.1 + Math.random() * 5) * 10) / 10,
      performance: Math.max(20, Math.round(95 - i * 0.7 + Math.random() * 5)),
    });
  }
  return players;
};

const playerRankings = generatePlayers();
const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(playerRankings.length / ITEMS_PER_PAGE);

const PlayerRankings = () => {
  const [activeCategory, setActiveCategory] = useState("Points");
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPlayers = playerRankings.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= TOTAL_PAGES) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const pages: (number | "ellipsis")[] = [];
    
    if (TOTAL_PAGES <= 7) {
      for (let i = 1; i <= TOTAL_PAGES; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("ellipsis");
      }
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(TOTAL_PAGES - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < TOTAL_PAGES - 2) {
        pages.push("ellipsis");
      }
      
      pages.push(TOTAL_PAGES);
    }
    
    return pages;
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Player Rankings</h2>
        <p className="text-muted-foreground mb-8">Top 100 Player Performance • Multiple Categories • 2024-25 Season</p>

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
                {currentPlayers.map((player) => (
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

        {/* Pagination */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            Showing {startIndex + 1}-{Math.min(endIndex, playerRankings.length)} of {playerRankings.length} players
          </p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {getVisiblePages().map((page, index) => (
                <PaginationItem key={index}>
                  {page === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === TOTAL_PAGES ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default PlayerRankings;
