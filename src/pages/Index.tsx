import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StarPlayers from "@/components/StarPlayers";
import ChampionshipNews from "@/components/ChampionshipNews";
import UpcomingGames from "@/components/UpcomingGames";
import StatsSection from "@/components/StatsSection";
import TeamsMap from "@/components/TeamsMap";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <StarPlayers />
        <ChampionshipNews />
        <UpcomingGames />
        <StatsSection />
        <TeamsMap />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
