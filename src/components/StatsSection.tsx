import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  highlight?: boolean;
}

const stats: Stat[] = [
  { value: 12, suffix: "", label: "Teams" },
  { value: 144, suffix: "", label: "Players", highlight: true },
  { value: 68, suffix: "", label: "Games Played" },
  { value: 2.5, suffix: "M", label: "Total Viewers", highlight: true },
];

const AnimatedNumber = ({ value, suffix, delay = 0 }: { value: number; suffix: string; delay?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            const duration = 1500;
            const steps = 60;
            const increment = value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
              } else {
                setDisplayValue(Math.floor(current * 10) / 10);
              }
            }, duration / steps);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl">
      {Number.isInteger(value) ? Math.floor(displayValue) : displayValue.toFixed(1)}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={stat.highlight ? "text-primary" : "text-foreground"}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} delay={index * 100} />
              </div>
              <p className="text-muted-foreground text-sm mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
