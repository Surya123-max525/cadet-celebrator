import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trophy, Medal, Star, MapPin, Calendar, Download, Share2, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-cadets.jpg";
import feliImg from "@/assets/felicitation.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

const EVENT = {
  institution: "[Your Institution Name]",
  eventName: "[Event / Competition Name]",
  hostedBy: "[Host Organization]",
  venue: "[Venue]",
  dateLabel: "[Event Dates]",
  achievementTitle: "Overall Championship",
  tagline: "Champions 2026",
  heroLine1: "Congratulations",
  heroLine2: "to Our Winning Team",
  heroSubtitle:
    "Our team has brought immense pride and glory to our institution by securing the top honours at [Event Name], hosted by [Host Organization] at [Venue].",
  quote: "Discipline, Dedication, Determination —",
  quoteAccent: "the Hallmarks of Every Champion.",
};

const PARTICIPANTS: { name: string; detail: string }[] = [
  { name: "Participant 1", detail: "III EEE" },
  { name: "Participant 2", detail: "II CSE" },
  { name: "Participant 3", detail: "III AIML" },
  { name: "Participant 4", detail: "II ECE" },
  { name: "Participant 5", detail: "III Mechanical" },
  { name: "Participant 6", detail: "II Civil" },
];

function Confetti() {
  const pieces = Array.from({ length: 30 });
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const size = 5 + Math.random() * 7;
        const dur = 6 + Math.random() * 6;
        const delay = Math.random() * 4;
        const colors = ["#D4A017", "#556B2F", "#1B2A4E", "#F5DEB3", "#E63946"];
        return (
          <span
            key={i}
            className="absolute animate-float-up rounded-sm"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 0.4,
              background: colors[i % colors.length],
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function Index() {
  const [showConfetti, setShowConfetti] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(t);
  }, []);

  const share = async () => {
    const data = {
      title: `Congratulations — ${EVENT.eventName}`,
      text: EVENT.heroSubtitle,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* cancelled */
      }
    } else if (typeof navigator !== "undefined") {
      await navigator.clipboard.writeText(data.url);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start gap-6 py-8 px-4 print:p-0 print:gap-0">
      {/* Action bar — hidden on print */}
      <div className="no-print flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-5 py-2.5 text-sm font-semibold text-primary shadow-glow hover:scale-105 transition-transform"
        >
          <Download className="h-4 w-4" /> Download A4 Poster
        </button>
        <button
          onClick={share}
          className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-primary hover:scale-105 transition-transform"
        >
          <Share2 className="h-4 w-4" /> Share
        </button>
      </div>

      {/* ===== A4 POSTER ===== */}
      <article
        className="a4-sheet relative bg-white text-primary shadow-elegant overflow-hidden print:shadow-none"
      >
        {showConfetti && <Confetti />}

        {/* Decorative corner ribbons */}
        <div className="absolute top-0 left-0 h-24 w-24 bg-[var(--gradient-gold)] [clip-path:polygon(0_0,100%_0,0_100%)] opacity-90" />
        <div className="absolute top-0 right-0 h-24 w-24 bg-[var(--gradient-gold)] [clip-path:polygon(0_0,100%_0,100%_100%)] opacity-90" />

        {/* Institution / NCC badges */}
        <div className="absolute top-3 left-4 z-10 text-[10px] font-bold uppercase tracking-widest text-primary">
          {EVENT.institution}
        </div>
        <div className="absolute top-3 right-4 z-10 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary">
          <Star className="h-3 w-3 text-primary" fill="currentColor" /> Champions
        </div>

        <div className="a4-inner flex flex-col items-center text-center">
          {/* Header */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
            <Trophy className="h-3 w-3 text-accent" /> {EVENT.tagline}
          </div>

          <h1 className="font-display mt-3 text-3xl md:text-4xl font-bold leading-tight">
            {EVENT.heroLine1}
            <span className="block text-gold-gradient mt-1 text-3xl md:text-4xl">
              {EVENT.heroLine2}
            </span>
          </h1>

          <p className="mt-3 max-w-[85%] text-[11px] md:text-xs leading-relaxed text-foreground/80">
            {EVENT.heroSubtitle}
          </p>

          {/* Hero image */}
          <div className="mt-4 w-full">
            <div className="relative rounded-xl overflow-hidden border-2 border-accent/70">
              <img
                src={heroImg}
                alt="Winning team"
                className="w-full h-[26%] max-h-[240px] object-cover"
                style={{ height: "240px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Achievement */}
          <div className="mt-4 w-full rounded-xl border border-accent/40 bg-secondary/30 px-4 py-3">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Medal className="h-4 w-4 text-accent" />
              <span className="font-display text-sm font-bold uppercase tracking-wider">
                {EVENT.achievementTitle}
              </span>
              <Medal className="h-4 w-4 text-accent" />
            </div>
          </div>

          {/* Felicitation image centered */}
          <div className="mt-4 w-full flex flex-col items-center">
            <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-semibold mb-1">
              Felicitation Ceremony
            </p>
            <div className="relative w-[75%] max-w-[420px]">
              <div className="absolute -inset-1 rounded-xl bg-[var(--gradient-gold)] opacity-60 blur-md" />
              <img
                src={feliImg}
                alt="Felicitation ceremony"
                className="relative w-full rounded-xl border-2 border-white shadow-elegant object-cover"
                style={{ maxHeight: "220px" }}
              />
            </div>
          </div>

          {/* Meta row */}
          <div className="mt-4 grid grid-cols-3 gap-2 w-full text-[10px]">
            {[
              { icon: MapPin, text: EVENT.venue },
              { icon: Calendar, text: EVENT.dateLabel },
              { icon: Trophy, text: EVENT.hostedBy },
            ].map((it) => (
              <div
                key={it.text}
                className="flex items-center gap-1.5 rounded-lg border border-border bg-white px-2 py-1.5"
              >
                <it.icon className="h-3 w-3 text-accent shrink-0" />
                <span className="truncate font-medium text-primary">{it.text}</span>
              </div>
            ))}
          </div>

          {/* Participants table */}
          <div className="mt-4 w-full rounded-xl overflow-hidden border border-border">
            <div className="bg-primary text-primary-foreground px-3 py-1.5 flex items-center gap-2">
              <Trophy className="h-3 w-3 text-accent" />
              <span className="font-display text-xs font-bold uppercase tracking-wider">
                Our Winners
              </span>
            </div>
            <table className="w-full text-[10px]">
              <thead>
                <tr className="bg-secondary/40 text-[9px] uppercase tracking-wider text-muted-foreground">
                  <th className="text-left px-3 py-1.5 font-semibold">Name</th>
                  <th className="text-left px-3 py-1.5 font-semibold">Class / Team</th>
                </tr>
              </thead>
              <tbody>
                {PARTICIPANTS.map((p, i) => (
                  <tr key={i} className="border-t border-border/60">
                    <td className="px-3 py-1 font-medium text-primary">{p.name}</td>
                    <td className="px-3 py-1 text-muted-foreground">{p.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quote */}
          <blockquote className="mt-4 font-display text-sm md:text-base font-bold leading-snug text-primary">
            <Sparkles className="inline h-3 w-3 text-accent mr-1" />
            &ldquo;{EVENT.quote}{" "}
            <span className="text-gold-gradient">{EVENT.quoteAccent}&rdquo;</span>
          </blockquote>

          {/* Footer strip */}
          <div className="mt-auto pt-3 w-full text-center">
            <div className="h-[2px] w-full bg-[var(--gradient-gold)] rounded-full mb-2" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              {EVENT.institution}
            </p>
            <p className="text-[9px] text-muted-foreground mt-0.5">
              Your hard work continues to inspire our institution.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
