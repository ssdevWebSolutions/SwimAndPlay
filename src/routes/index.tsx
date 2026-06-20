import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroImg from "@/assets/hero-waterpark.jpg";
import softplayImg from "@/assets/softplay.jpg";
import bowlingImg from "@/assets/bowling.jpg";
import { Waves, Droplets, Blocks, CircleDot, Clock, MapPin, Phone, Shirt, PartyPopper, ArrowRight, Star, Instagram, Facebook } from "lucide-react";
import { useMemo, useRef, type CSSProperties } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swim & Play Guntur — Pools, Water Park, Soft Play & Bowling" },
      { name: "description", content: "Family aquatic & play center on Inner Ring Road, Gorantla, Guntur. Hourly tickets for swimming, kids water park, soft play and bowling. Open 6:30 AM – 10:00 PM daily." },
      { property: "og:title", content: "Swim & Play Guntur — Pools, Water Park, Soft Play & Bowling" },
      { property: "og:description", content: "Hourly tickets for swimming, water park, soft play and bowling on Inner Ring Road, Guntur." },
    ],
  }),
  component: Index,
});

function Index() {
  const book = (what: string) =>
    toast("Booking coming soon", {
      description: `${what} reservations will be available online shortly. For now, please call +91 93928 97779.`,
    });

  const bubbles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const size = 8 + Math.random() * 46;
        return {
          key: i,
          style: {
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${8 + Math.random() * 14}s`,
            animationDelay: `${Math.random() * 10}s`,
            ["--drift" as string]: `${(Math.random() - 0.5) * 120}px`,
          } as CSSProperties,
        };
      }),
    [],
  );

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateY(-6px)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  };

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "var(--font-body)" }}>
      <Toaster />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="size-10 bg-brand-blue rounded-xl flex items-center justify-center text-white text-xl font-extrabold" style={{ fontFamily: "var(--font-display)" }}>S</div>
            <span className="text-2xl tracking-tight text-brand-deep font-extrabold" style={{ fontFamily: "var(--font-display)" }}>SWIM&amp;PLAY</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
            <a href="#activities" className="hover:text-brand-blue transition-colors">Activities</a>
            <a href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</a>
            <a href="#info" className="hover:text-brand-blue transition-colors">Visit</a>
            <button onClick={() => book("Ticket")} className="bg-brand-deep text-white px-6 py-3 rounded-full hover:bg-brand-blue transition-all cursor-pointer">Book Ticket</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-sky-50 via-cyan-50 to-slate-50">
        {/* Animated bubble field */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {bubbles.map((b) => (
            <span key={b.key} className="bubble" style={b.style} />
          ))}
        </div>
        {/* Water wave bottom */}
        <svg aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[200%] h-24 animate-water-wave text-brand-blue/15" viewBox="0 0 2880 120" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 C1680,120 1920,0 2160,60 C2400,120 2640,0 2880,60 L2880,120 L0,120 Z" />
        </svg>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="size-3.5" /> Inner Ring Road, Guntur
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Your Ultimate <span className="text-brand-blue">Water Adventure</span> Awaits.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Dive into Guntur's premier recreation destination. From Olympic-sized fun to soft play wonderlands and neon bowling lanes — we have something for every age.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => book("Slot")} className="bg-brand-accent text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-brand-accent/20 hover:scale-105 transition-transform cursor-pointer italic inline-flex items-center gap-2">
                RESERVE YOUR SLOT <ArrowRight className="size-4" />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="size-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Open Today: 6:30 AM – 10:00 PM</span>
              </div>
            </div>
          </div>
          <div ref={heroRef} className="relative animate-float" style={{ perspective: "1200px" }}>
            <img
              src={heroImg}
              alt="Children playing at the Swim & Play water park in Guntur"
              width={1280}
              height={1280}
              className="w-full aspect-square object-cover rounded-[40px] shadow-2xl outline outline-1 -outline-offset-1 outline-black/5 [transform:rotateY(-6deg)_rotateX(4deg)]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <p className="text-xs text-slate-400 uppercase font-bold mb-1">Starting At</p>
              <p className="text-3xl text-brand-deep font-extrabold" style={{ fontFamily: "var(--font-display)" }}>
                ₹99<span className="text-sm font-normal text-slate-500">/30m</span>
              </p>
            </div>
            {/* Floating droplet badge */}
            <div className="absolute -top-4 -right-4 size-20 rounded-full bg-gradient-to-br from-brand-blue to-brand-deep text-white grid place-items-center shadow-2xl shadow-brand-blue/40 animate-float hidden md:flex" style={{ animationDelay: "1.2s" }}>
              <Droplets className="size-9" />
            </div>
          </div>
        </div>
      </header>

      {/* Pricing & Activities */}
      <section id="activities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4" style={{ fontFamily: "var(--font-display)" }}>Pricing &amp; Activities</h2>
            <p className="text-slate-500">Transparent hourly rates for endless enjoyment.</p>
          </div>

          <div id="pricing" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Waves, title: "Swimming Pool", desc: "Crystal clear, temperature controlled waters with proper filtration.", price: "₹199", unit: "/hour", iconBg: "bg-brand-blue/10 text-brand-blue", hover: "hover:border-brand-blue" },
              { Icon: Droplets, title: "Kids Water Park", desc: "Slides, splashes and safe aquatic play for little adventurers.", price: "₹299", unit: "/hour", iconBg: "bg-cyan-100 text-cyan-600", hover: "hover:border-brand-blue" },
              { Icon: Blocks, title: "Soft Play Area", desc: "Indoor ball pools and cushioned obstacle courses for toddlers.", price: "₹99", unit: "/30 mins", iconBg: "bg-brand-accent/10 text-brand-accent", hover: "hover:border-brand-accent" },
              { Icon: CircleDot, title: "Bowling Alley", desc: "Professional lanes with neon vibes. ₹249 on Sundays.", price: "₹199", unit: " Mon–Sat", iconBg: "bg-indigo-100 text-indigo-600", hover: "hover:border-indigo-500", footnote: "₹249 Sundays" },
            ].map(({ Icon, title, desc, price, unit, iconBg, hover, footnote }) => (
              <div
                key={title}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className={`group tilt-3d p-8 bg-slate-50 rounded-3xl border border-slate-200 ${hover} hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/10 flex flex-col`}
              >
                <div className={`size-12 rounded-2xl flex items-center justify-center mb-6 ${iconBg}`}>
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">{desc}</p>
                <p className="text-3xl text-slate-900 font-extrabold" style={{ fontFamily: "var(--font-display)" }}>
                  {price}<span className="text-xs font-normal text-slate-400">{unit}</span>
                </p>
                {footnote && <p className="text-sm font-medium text-slate-400 mt-1">{footnote}</p>}
                <button
                  onClick={() => book(title)}
                  className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-deep hover:text-brand-blue transition-colors cursor-pointer"
                >
                  Book {title} <ArrowRight className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Reviews */}
      <section id="reviews" className="py-24 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Star className="size-3.5 fill-current" /> 4.6 / 5 on Google &amp; Justdial
            </span>
            <h2 className="text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-display)" }}>Loved by Guntur Families</h2>
            <p className="text-slate-500">Real reactions from real visitors across social media.</p>
          </div>
        </div>

        {/* Edge fades */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-marquee w-max">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <article key={i} className="w-[340px] shrink-0 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`size-11 rounded-full grid place-items-center text-white font-bold ${r.color}`} style={{ fontFamily: "var(--font-display)" }}>
                    {r.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{r.name}</p>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5">
                      <r.Platform className="size-3" /> {r.source}
                    </p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`size-3.5 ${s < r.rating ? "fill-brand-accent text-brand-accent" : "text-slate-200"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section id="info" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-extrabold mb-8" style={{ fontFamily: "var(--font-display)" }}>Know Before You Go</h2>
                <div className="space-y-8">
                  {[
                    { Icon: Shirt, label: "Dress Code", text: "Nylon or proper swim attire is mandatory. Forgot yours? Rental and purchase options are available on-site." },
                    { Icon: Clock, label: "Daily Hours", text: "Open every day from 6:30 AM to 10:00 PM. Last entry 30 minutes before closing." },
                    { Icon: PartyPopper, label: "Group Bookings", text: "Planning a birthday or corporate event? Call +91 93928 97779 for exclusive group discounts." },
                  ].map(({ Icon, label, text }) => (
                    <div key={label} className="flex gap-6">
                      <div className="size-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-brand-blue">{label}</h4>
                        <p className="text-slate-400">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Swim+%26+Play+Gorantla+Guntur"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 w-full lg:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all cursor-pointer"
              >
                <MapPin className="size-5" /> GET DIRECTIONS VIA GOOGLE MAPS
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={softplayImg} alt="Indoor soft play area with colorful ball pool" loading="lazy" width={768} height={1024} className="w-full aspect-[3/4] object-cover rounded-3xl outline outline-1 -outline-offset-1 outline-white/10" />
              <img src={bowlingImg} alt="Neon-lit bowling alley" loading="lazy" width={768} height={1024} className="w-full aspect-[3/4] object-cover rounded-3xl outline outline-1 -outline-offset-1 outline-white/10 mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl text-brand-deep mb-2 font-extrabold" style={{ fontFamily: "var(--font-display)" }}>Swim &amp; Play Guntur</p>
            <p className="text-slate-500 text-sm inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> 118, D7, Mahatma Gandhi Inner Ring Road, Gorantla, Guntur.
            </p>
          </div>
          <a href="tel:+919392897779" className="text-right group">
            <p className="text-xs font-bold text-slate-400 uppercase inline-flex items-center gap-1.5"><Phone className="size-3" /> Call Us</p>
            <p className="font-bold group-hover:text-brand-blue transition-colors">+91 93928 97779</p>
          </a>
        </div>
      </footer>
    </div>
  );
}

const REVIEWS = [
  { name: "Sravani K.", source: "Google Reviews", Platform: Star, color: "bg-brand-blue", rating: 5, text: "The kids water park is fantastic! My twins didn't want to leave. Staff is super friendly and the pool is spotless." },
  { name: "Ravi Teja", source: "Justdial", Platform: Star, color: "bg-brand-deep", rating: 5, text: "Best swimming pool in Guntur for the price. Clean water, good timings and the bowling alley is a great bonus." },
  { name: "Anitha P.", source: "Instagram", Platform: Instagram, color: "bg-pink-500", rating: 4, text: "Took the family for my son's birthday — soft play area was a huge hit with the toddlers. Will be back!" },
  { name: "Vikram S.", source: "Facebook", Platform: Facebook, color: "bg-indigo-500", rating: 5, text: "Sunday bowling with friends is now a weekly ritual. Neon lanes look stunning at night." },
  { name: "Meera R.", source: "Google Reviews", Platform: Star, color: "bg-brand-accent", rating: 5, text: "Loved the morning swim sessions. Calm, well-maintained and great instructors available on request." },
  { name: "Karthik N.", source: "Justdial", Platform: Star, color: "bg-cyan-500", rating: 4, text: "Good value at ₹199/hour. The water park gets busy on weekends — go early morning for the best experience." },
  { name: "Lakshmi D.", source: "Instagram", Platform: Instagram, color: "bg-pink-600", rating: 5, text: "Hosted my daughter's 5th birthday here. Ball pool + cake = pure joy. Thank you Swim & Play team!" },
  { name: "Arjun M.", source: "Google Reviews", Platform: Star, color: "bg-emerald-500", rating: 5, text: "Hidden gem on Inner Ring Road. Clean, safe and reasonably priced. Highly recommend for families." },
];
