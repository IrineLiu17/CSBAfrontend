import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-basketball.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-dark-foreground uppercase tracking-tight mb-6 animate-fade-in-up">
          Born to <span className="text-primary italic">Play</span>
        </h1>
        
        <p className="text-dark-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Elite basketball competition bringing together the finest athletes in professional urban basketball. Experience the intensity, skill, and passion of street-to-pro basketball culture.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="text-lg px-8 py-6">
            Join the League
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
