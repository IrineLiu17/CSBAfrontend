import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, Linkedin, Twitter, Flame, Award, Users, Lightbulb } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import originStory from "@/assets/origin-story.jpg";
import missionImage from "@/assets/mission-image.jpg";
import ctaBuilding from "@/assets/cta-building.jpg";

const stats = [
  { value: "2018", label: "Founded" },
  { value: "847", label: "Players Signed" },
  { value: "23", label: "Pro Contracts" },
];

const missionPoints = [
  {
    icon: CheckCircle,
    title: "Authentic Competition",
    description: "Real games, real stakes, real opportunities for players to showcase their skills.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building stronger communities through basketball and youth development.",
  },
  {
    icon: Award,
    title: "Professional Pathway",
    description: "Creating legitimate routes to professional basketball careers.",
  },
];

const leadershipTeam = [
  { name: "Sarah Johnson", role: "Chief Executive Officer", department: "Executive Leaders", linkedin: true, twitter: true },
  { name: "Michael Chen", role: "Chief Strategy Officer", department: "Executive Leaders", linkedin: true, twitter: true },
];

const marketingTeam = [
  { name: "Emma Davis", role: "Marketing Director", desc: "Team Ops & Strategy" },
  { name: "Alex Rodriguez", role: "Social Media Manager", desc: "Full-stack Digital Lead" },
  { name: "Lisa Park", role: "Content Lead", desc: "Video & Photography" },
  { name: "James Wilson", role: "Brand Strategist", desc: "Design Systems" },
];

const adminTeam = [
  { name: "Maria Garcia", role: "HR Director" },
  { name: "Robert Kim", role: "Finance Manager" },
  { name: "Jennifer Lee", role: "Operations Coordinator" },
  { name: "David Zhang", role: "IT Support Specialist" },
];

const eventTeam = [
  { name: "Thomas Anderson", role: "Event Director" },
  { name: "Rachel Brown", role: "Tournament Coordinator" },
  { name: "Kevin Martinez", role: "Venue Operations" },
  { name: "Mark Johnson", role: "Logistics Manager" },
];

const values = [
  { icon: Flame, title: "Passion", description: "Every decision we make comes from a love for the game and respect for its players and culture." },
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in our game organization and player experience." },
  { icon: Users, title: "Community", description: "Basketball brings people together. We're actively connecting a positive culture and network." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace technology and creative thinking to improve the basketball experience for players and fans." },
];

const TeamMemberCard = ({ name, role, desc, showSocial }: { name: string; role: string; desc?: string; showSocial?: boolean }) => (
  <div className="text-center">
    <div className="w-20 h-20 mx-auto mb-3 rounded-lg bg-secondary flex items-center justify-center">
      <span className="text-2xl text-muted-foreground">👤</span>
    </div>
    <h4 className="font-semibold text-foreground">{name}</h4>
    <p className="text-sm text-primary">{role}</p>
    {desc && <p className="text-xs text-muted-foreground mt-1">{desc}</p>}
    {showSocial && (
      <div className="flex justify-center gap-2 mt-2">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    )}
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${aboutHero})` }}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 container mx-auto px-4 text-center py-20">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-dark-foreground uppercase tracking-tight mb-6">
              For the Players,<br />
              <span className="text-primary italic">By the Players</span>
            </h1>
            <p className="text-dark-foreground/90 text-lg max-w-2xl mx-auto">
              Built by ballers who understand the grind. We're not just organizing games — we're creating a movement that elevates street basketball to the professional level it deserves.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-6">The Origin Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  It started in the streets of Brooklyn in 2018, where Marcus Chen and his crew would ball every evening after work. They saw real talent everywhere they looked, but no way to climb.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "We had players who could go pro as far as the eyes, but no one was looking in this direction because there was no platform," Marcus recalls. "That's when we realized we had to build our own."
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  In 2018, what began as weekend local games in local gyms has evolved into a full-scale professional league that hosts talented, driven, well-trained, and capable young players from across the globe.
                </p>

                {/* Stats */}
                <div className="flex gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-3xl text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={originStory}
                  alt="Origin story - basketball gym"
                  className="w-full rounded-lg shadow-[var(--shadow-elevated)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={missionImage}
                  alt="Our mission - basketball community"
                  className="w-full rounded-lg shadow-[var(--shadow-elevated)]"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="section-title mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  To create the most competitive and authentic basketball league where raw talent meets professional opportunity. We believe every baller deserves a shot at greatness, regardless of their background or connections.
                </p>

                <div className="space-y-6">
                  {missionPoints.map((point) => (
                    <div key={point.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <point.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                        <p className="text-sm text-muted-foreground">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-2">Leadership Team</h2>
            <p className="text-muted-foreground mb-12">2 Executive Leaders</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mb-16">
              {leadershipTeam.map((member) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} showSocial />
              ))}
            </div>

            {/* Marketing Department */}
            <h3 className="font-display text-2xl uppercase tracking-wide mb-2">Marketing Department</h3>
            <p className="text-muted-foreground mb-8">4 Team Members</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {marketingTeam.map((member) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} desc={member.desc} />
              ))}
            </div>

            {/* Admin Department */}
            <h3 className="font-display text-2xl uppercase tracking-wide mb-2">Admin Department</h3>
            <p className="text-muted-foreground mb-8">4 Team Members</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {adminTeam.map((member) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} />
              ))}
            </div>

            {/* Event Department */}
            <h3 className="font-display text-2xl uppercase tracking-wide mb-2">Event Department</h3>
            <p className="text-muted-foreground mb-8">4 Team Members</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {eventTeam.map((member) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-dark text-dark-foreground">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl uppercase tracking-wide text-center mb-12">Our Values</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide mb-3">{value.title}</h3>
                  <p className="text-dark-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide mb-2">Ready to Join</h2>
                <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-primary italic mb-6">The Movement?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you're a player looking to showcase your skills, a sponsor wanting to support authentic basketball, or a fan ready to witness the future of the sport — we want to hear from you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>Player Hotline: (555) 123-HOOP</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@csba-league.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Main Office: Downtown Sports Complex</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    Become a Player
                  </Button>
                  <Button variant="outline" size="lg">
                    Sponsor Us
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={ctaBuilding}
                  alt="Sports complex building"
                  className="w-full rounded-lg shadow-[var(--shadow-elevated)]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
