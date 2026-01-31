import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Eye, Heart, MessageCircle } from "lucide-react";

import newsFeatured from "@/assets/news-featured.jpg";
import newsMatch from "@/assets/news-match.jpg";
import newsPlayer from "@/assets/news-player.jpg";
import newsSigning from "@/assets/news-signing.jpg";
import newsDraft from "@/assets/news-draft.jpg";
import newsTech from "@/assets/news-tech.jpg";
import newsPlayoff from "@/assets/news-playoff.jpg";

const categories = [
  "All News",
  "Match Reports",
  "Player News",
  "Team Updates",
  "League Announcements",
  "Draft & Transfers",
];

interface NewsArticle {
  id: number;
  category: string;
  categoryColor: string;
  date: string;
  title: string;
  description: string;
  image: string;
  views: string;
  likes: number;
  comments: number;
  featured?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: "Breaking",
    categoryColor: "bg-primary",
    date: "January 12, 2025 • 2:30 PM",
    title: "CSBA League Announces Expansion to 20 Teams for 2025-26 Season",
    description: "The CSBA Basketball League today announced its largest expansion in league history, welcoming four new franchises for the upcoming 2025-26 season. The new teams will join from major metropolitan areas including Shanghai, Guangzhou, Shenzhen, and Chengdu, bringing the total number of teams to 20 and creating new opportunities for player development across China...",
    image: newsFeatured,
    views: "2.4K",
    likes: 156,
    comments: 0,
    featured: true,
  },
  {
    id: 2,
    category: "Match Report",
    categoryColor: "bg-primary",
    date: "January 11, 2025 • 10:45 PM",
    title: "Rockets Defeat Celtics 118-112 in Overtime Thriller at Home Arena",
    description: "Michael Rodriguez scored 34 points including the game-winning three-pointer with 12 seconds left in overtime as the Rockets defeated the Celtics 118-112. The victory moves Rockets to 28-15 record and solidifies their position in the playoff race. James Thompson led Celtics with 29 points and 11 assists in the losing effort.",
    image: newsMatch,
    views: "1.8K",
    likes: 89,
    comments: 23,
  },
  {
    id: 3,
    category: "Player News",
    categoryColor: "bg-orange-dark",
    date: "January 11, 2025 • 6:30 PM",
    title: "David Chen Named Player of the Month for December Performance",
    description: "Warriors guard David Chen has been named CSBA League Player of the Month for December after averaging 26.8 points, 7.2 assists, and 5.1 rebounds per game. Chen led the Warriors to an impressive 11-2 record during the month, including a franchise-record 8-game winning streak. This marks Chen's second Player of the Month award this season.",
    image: newsPlayer,
    views: "1.2K",
    likes: 67,
    comments: 15,
  },
  {
    id: 4,
    category: "Team Updates",
    categoryColor: "bg-blue-600",
    date: "January 10, 2025 • 4:15 PM",
    title: "Thunder Signs International Forward Alexander Park to Multi-Year Extension",
    description: "The Thunder announced today that they have signed forward Alexander Park to a four-year contract extension worth $68 million. Park, who joined the team midseason last year, has been averaging 21.5 points and 9.8 rebounds this season. The 26-year-old international player has become a cornerstone of Thunder's rebuild and future championship aspirations.",
    image: newsSigning,
    views: "956",
    likes: 45,
    comments: 8,
  },
  {
    id: 5,
    category: "Draft News",
    categoryColor: "bg-green-600",
    date: "January 9, 2025 • 1:30 PM",
    title: "2025 CSBA Draft Lottery Set for March 15, Expanded Format Announced",
    description: "The CSBA League announced that the 2025 Draft Lottery will take place on March 15, featuring an expanded format with increased transparency and fan engagement. The lottery will determine the draft order for the first 14 picks, with the remaining picks based on regular season records. This year's draft class is considered one of the strongest in recent years.",
    image: newsDraft,
    views: "743",
    likes: 32,
    comments: 12,
  },
  {
    id: 6,
    category: "League News",
    categoryColor: "bg-purple-600",
    date: "January 8, 2025 • 11:00 AM",
    title: "New Partnership with Technology Company to Enhance Fan Experience",
    description: "CSBA League announces a groundbreaking partnership with leading technology company to revolutionize fan engagement through augmented reality experiences, advanced statistics tracking, and interactive mobile applications. The partnership will roll out across all arenas starting next season, offering fans unprecedented access to real-time data and immersive viewing experiences.",
    image: newsTech,
    views: "1.4K",
    likes: 78,
    comments: 19,
  },
  {
    id: 7,
    category: "Match Preview",
    categoryColor: "bg-primary",
    date: "January 7, 2025 • 3:45 PM",
    title: "Championship Contenders Face Off: Warriors vs Lakers This Weekend",
    description: "Two of the league's top teams collide this Saturday as the Warriors (32-11) host the Lakers (30-13) in what promises to be a preview of the playoffs. Both teams are riding hot streaks with the Warriors winning 7 of their last 8 games while the Lakers have won 9 of 10. The matchup features two of the league's most dynamic offenses and could have playoff seeding implications.",
    image: newsPlayoff,
    views: "892",
    likes: 54,
    comments: 7,
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All News");

  const filteredArticles = activeCategory === "All News" 
    ? newsArticles 
    : newsArticles.filter(article => {
        if (activeCategory === "Match Reports") return article.category === "Match Report" || article.category === "Match Preview";
        if (activeCategory === "Player News") return article.category === "Player News";
        if (activeCategory === "Team Updates") return article.category === "Team Updates";
        if (activeCategory === "League Announcements") return article.category === "League News" || article.category === "Breaking";
        if (activeCategory === "Draft & Transfers") return article.category === "Draft News";
        return true;
      });

  const featuredArticle = filteredArticles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-6xl md:text-7xl text-primary-foreground uppercase tracking-tight mb-4">
              News
            </h1>
            <p className="text-primary-foreground/80">
              Latest Updates • Match Reports • League Announcements
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-muted"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div className="mb-8">
              <div className="w-12 h-1 bg-primary mb-4" />
              <h2 className="text-lg text-muted-foreground">Latest Updates & Hot Topics</h2>
            </div>

            {/* Featured Article */}
            {featuredArticle && (
              <div className="bg-dark rounded-lg overflow-hidden mb-8">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`${featuredArticle.categoryColor} text-primary-foreground text-xs font-medium px-3 py-1 rounded`}>
                        {featuredArticle.category}
                      </span>
                      <span className="text-dark-foreground/60 text-sm">{featuredArticle.date}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-primary uppercase tracking-wide mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-dark-foreground/80 text-sm leading-relaxed mb-6">
                      {featuredArticle.description}
                    </p>
                    <div className="flex items-center gap-6 text-dark-foreground/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" /> {featuredArticle.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> {featuredArticle.likes} likes
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-video md:aspect-auto">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Regular Articles */}
            <div className="space-y-6">
              {regularArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-[1fr,200px] gap-0">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`${article.categoryColor} text-white text-xs font-medium px-3 py-1 rounded`}>
                          {article.category}
                        </span>
                        <span className="text-muted-foreground text-sm">{article.date}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-6 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" /> {article.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" /> {article.likes} likes
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" /> {article.comments} comments
                        </span>
                      </div>
                    </div>
                    <div className="relative hidden md:block">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More News
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
