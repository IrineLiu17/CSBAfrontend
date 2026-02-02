import { useState } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const rankingCategories = ["Wins", "Points", "Defense", "Offense", "Rebounds"];

// Generate team rankings
const generateTeams = () => {
  const teamNames = ["ROCKETS", "CELTICS", "WARRIORS", "THUNDER", "LAKERS", "HEAT", "BULLS", "NETS", "SUNS", "MAVS", "SPURS", "CLIPPERS", "NUGGETS", "76ERS", "BUCKS", "HAWKS"];
  const teams = [];
  for (let i = 1; i <= 16; i++) {
    teams.push({
      rank: i,
      name: teamNames[i - 1],
      wins: Math.max(0, 45 - i * 2 + Math.floor(Math.random() * 5)),
      losses: Math.min(82, 20 + i * 2 + Math.floor(Math.random() * 5)),
      ppg: Math.round((115 - i * 1.5 + Math.random() * 5) * 10) / 10,
      oppg: Math.round((105 + i * 0.8 + Math.random() * 5) * 10) / 10,
      rpg: Math.round((48 - i * 0.5 + Math.random() * 3) * 10) / 10,
      winRate: Math.max(20, Math.round(85 - i * 4 + Math.random() * 5))
    });
  }
  return teams;
};

const teamRankings = generateTeams();
const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(teamRankings.length / ITEMS_PER_PAGE);

const TeamRankings = () => {
  const [activeCategory, setActiveCategory] = useState("Wins");
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTeams = teamRankings.slice(startIndex, endIndex);

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
        <h2 className="font-display text-3xl uppercase tracking-wide italic mb-2">Team Rankings</h2>
        <p className="text-muted-foreground mb-8">Season Team Standings • Win/Loss Records • Performance Stats</p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {rankingCategories.map(category => (
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
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Team</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">W</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">L</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">PPG</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">OPPG</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">RPG</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Win Rate</th>
                </tr>
              </thead>
              <tbody>
                {currentTeams.map(team => (
                  <tr key={team.rank} className="border-b border-border last:border-0 hover:bg-muted/50">
                    <td className="p-4">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                        team.rank === 1 ? "bg-primary" : team.rank === 2 ? "bg-gray-500" : team.rank === 3 ? "bg-orange-dark" : "bg-muted-foreground"
                      }`}>
                        {team.rank}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-foreground">{team.name}</td>
                    <td className="p-4 text-center text-primary font-semibold">{team.wins}</td>
                    <td className="p-4 text-center text-foreground">{team.losses}</td>
                    <td className="p-4 text-center text-foreground">{team.ppg}</td>
                    <td className="p-4 text-center text-foreground">{team.oppg}</td>
                    <td className="p-4 text-center text-foreground">{team.rpg}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${team.winRate}%` }} />
                        </div>
                        <span className="text-sm text-muted-foreground">{team.winRate}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground whitespace-nowrap">
            Showing {startIndex + 1}-{Math.min(endIndex, teamRankings.length)} of {teamRankings.length} teams
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

export default TeamRankings;
