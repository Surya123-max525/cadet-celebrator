import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  Medal,
  Trophy,
  Star,
  MapPin,
  Calendar,
  Users,
  Download,
  Share2,
  Sparkles,
} from "lucide-react";
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

// ============================================================
// EVENT CONFIG — edit these placeholders for any event
// ============================================================
const EVENT = {
  institution: "[Your Institution Name]",
  eventName: "[Event / Competition Name]",
  hostedBy: "[Host Organization]",
  venue: "[Venue]",
  dateLabel: "[Event Dates]",
  achievementTitle: "Overall Championship",
  tagline: "Champions 2026",
  heroLine1: "Congratulations to Our",
  heroLine2: "Winning Team",
  heroSubtitle:
    "Our team has brought immense pride and glory to our institution by securing the top honours at [Event / Competition Name] hosted by [Host Organization] at [Venue].",
  achievementBody:
    "Throughout the event, our participants showcased exceptional discipline, leadership, teamwork, and dedication. They secured the top honours along with numerous medals and awards across various competitions.",
  achievementFootnote:
    "Their remarkable performance is a reflection of unwavering commitment, courage, discipline, and excellence.",
  felicitationCaption:
    "Our beloved [Principal / Head] felicitating the team for their outstanding achievements and appreciating their dedication and exemplary performance.",
  quote: "Discipline, Dedication, Determination —",
  quoteAccent: "the Hallmarks of Every Champion.",
  footerHeadline: "Congratulations Once Again to Our Team!",
  footerBody:
    "Your hard work, discipline, and determination continue to inspire our institution.",
  participantsHeading: "Our Winners",
};

const PARTICIPANTS: { name: string; detail: string }[] = [
  { name: "Participant 1", detail: "III EEE" },
  { name: "Participant 2", detail: "II CSE" },
  { name: "Participant 3", detail: "III AIML" },
  { name: "Participant 4", detail: "II ECE" },
  { name: "Participant 5", detail: "III Mechanical" },
  { name: "Participant 6", detail: "II Civil" },
];

const STATS = [
  { icon: Trophy, label: "Overall Championship", value: 1, suffix: "" },
  { icon: Medal, label: "Gold Medals", value: 8, suffix: "+" },
  { icon: Award, label: "Award Winners", value: 15, suffix: "+" },
  { icon: Users, label: "Team Members", value: PARTICIPANTS.length, suffix: "" },
];

function useCounter(target: number, start: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return v;
}

function StatCard({ item, delay }: { item: (typeof STATS)[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCounter(item.value, inView);
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className="glass rounded-3xl p-6 md:p-8 text-center animate-fade-up hover:-translate-y-1 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-gold)] shadow-glow">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-primary">
        {n}
        {item.suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-muted-foreground font-medium">
        {item.label}
      </div>
    </div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((_, i) => {
        const left = Math.random() * 100;
        const size = 6 + Math.random() * 8;
        const dur = 6 + Math.random() * 6;
        const delay = Math.random() * 4;
        const colors = ["#D4A017", "#556B2F", "#1B2A4E", "#F5DEB3", "#E63946"];
        const c = colors[i % colors.length];
        return (
          <span
            key={i}
            className="absolute animate-float-up rounded-sm"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 0.4,
              background: c,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(scrolled * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-[var(--gradient-gold)] transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

function Sparkle({ className = "" }: { className?: string }) {
  return <Sparkles className={`animate-sparkle text-accent ${className}`} />;
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
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      {showConfetti && <Confetti />}

      {/* Top corner badges */}
      <div className="pointer-events-none fixed top-4 left-4 z-30">
        <div className="glass rounded-2xl px-4 py-2 text-xs md:text-sm font-semibold text-primary pointer-events-auto">
          {EVENT.institution}
        </div>
      </div>
      <div className="pointer-events-none fixed top-4 right-4 z-30">
        <div className="glass rounded-2xl px-4 py-2 text-xs md:text-sm font-semibold text-primary pointer-events-auto flex items-center gap-2">
          <Star className="h-4 w-4 text-accent" fill="currentColor" /> Champions
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center px-4 py-24">
        <img
          src={heroImg}
          alt="Team celebration hero"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <Sparkle className="absolute top-24 left-[10%] h-6 w-6" />
        <Sparkle className="absolute top-40 right-[12%] h-8 w-8" />
        <Sparkle className="absolute bottom-32 left-[20%] h-5 w-5" />

        <div className="relative z-10 max-w-5xl text-center text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 mb-6 text-sm text-white">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="tracking-widest uppercase">{EVENT.tagline}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {EVENT.heroLine1}
            <span className="block text-gold-gradient mt-2">{EVENT.heroLine2}</span>
          </h1>
          <p className="mt-8 mx-auto max-w-3xl text-base md:text-lg text-white/85 leading-relaxed">
            {EVENT.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3 font-semibold text-primary shadow-glow hover:scale-105 transition-transform"
            >
              <Download className="h-4 w-4" /> Download Poster
            </button>
            <button
              onClick={share}
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 font-semibold text-white hover:scale-105 transition-transform"
            >
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENT */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="glass rounded-[2rem] p-8 md:p-14 animate-fade-up relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 animate-shimmer" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-[var(--gradient-gold)] flex items-center justify-center shadow-glow">
                <Medal className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                The Achievement
              </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85">
              {EVENT.achievementBody}{" "}
              <span className="font-display font-bold text-primary">
                {EVENT.achievementTitle}
              </span>
              .
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/85">
              {EVENT.achievementFootnote}
            </p>
          </div>
        </div>
      </section>

      {/* FELICITATION */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-accent font-semibold mb-3">
            A Moment of Honour
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-10">
            Felicitation Ceremony
          </h2>
          <div className="relative mx-auto max-w-3xl animate-fade-up">
            <div
              className="absolute -inset-3 rounded-[2rem] opacity-70 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border-4 border-white">
              <img
                src={feliImg}
                alt="Felicitation ceremony"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="mt-8 mx-auto max-w-2xl text-sm md:text-base text-muted-foreground italic">
            {EVENT.felicitationCaption}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
              Highlights of Glory
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((s, i) => (
              <StatCard key={s.label} item={s} delay={i * 120} />
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MapPin, text: EVENT.venue },
              { icon: Calendar, text: EVENT.dateLabel },
              { icon: Trophy, text: EVENT.hostedBy },
            ].map((it) => (
              <div
                key={it.text}
                className="glass rounded-2xl px-5 py-4 flex items-center gap-3"
              >
                <it.icon className="h-5 w-5 text-accent" />
                <span className="text-sm md:text-base font-medium text-primary">
                  {it.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-6">
            <Sparkle className="h-8 w-8" />
          </div>
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary">
            &ldquo;{EVENT.quote}
            <span className="block mt-2 text-gold-gradient">
              {EVENT.quoteAccent}&rdquo;
            </span>
          </blockquote>
        </div>
      </section>

      {/* PARTICIPANTS — mobile inline */}
      <section className="relative px-4 pb-32 lg:hidden">
        <ParticipantsTable />
      </section>

      {/* PARTICIPANTS — desktop floating bottom-right */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-30 w-[360px] animate-fade-up">
        <ParticipantsTable compact />
      </div>

      {/* FOOTER */}
      <footer className="relative px-4 py-16 mt-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <Trophy className="mx-auto h-10 w-10 text-accent mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">
              {EVENT.footerHeadline}
            </h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {EVENT.footerBody}
            </p>
            <div className="mt-6 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              {EVENT.institution}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ParticipantsTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="glass rounded-3xl overflow-hidden shadow-elegant">
      <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center gap-2">
        <Trophy className="h-5 w-5 text-accent" />
        <h3 className="font-display font-bold tracking-wide">
          {EVENT.participantsHeading}
        </h3>
      </div>
      <div className={compact ? "max-h-[320px] overflow-auto" : ""}>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground bg-secondary/40">
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Class / Team</th>
            </tr>
          </thead>
          <tbody>
            {PARTICIPANTS.map((p, i) => (
              <tr
                key={i}
                className="border-t border-border/60 hover:bg-accent/10 transition-colors"
              >
                <td className="px-5 py-3 font-medium text-primary">{p.name}</td>
                <td className="px-5 py-3 text-muted-foreground">{p.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
