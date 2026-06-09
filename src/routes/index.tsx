import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  Activity,
  Wind,
  Thermometer,
  ClipboardCheck,
  Salad,
  Siren,
  Award,
  GraduationCap,
  UserCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Clock,
  Quote,
} from "lucide-react";
import doctorAsset from "@/assets/dr-tanveer.png.asset.json";
import {
  Reveal,
  Stagger,
  staggerChild,
  Counter,
  Magnetic,
  Particles,
  GradientGlow,
} from "@/components/motion-fx";

const PHONE = "+919161031401";
const PHONE_DISPLAY = "+91 91610 31401";
const WHATSAPP = "919161031401";
const ADDRESS = "Dasharibag, Rasoolpur, Gorakhnath, Gorakhpur, Uttar Pradesh";
const MAPS_URL =
  "https://www.google.com/maps/place/Dr.Tanveer+Alam+(MD)+medicine/@26.7741222,83.3523423,17z";
const DOCTOR_IMAGE = doctorAsset.url;

const SITE_TITLE =
  "Dr. Tanveer Alam (MD Medicine) — Trusted Physician in Gorakhpur";
const SITE_DESC =
  "Premium internal medicine care by Dr. Tanveer Alam, MD. Evidence-based treatment for diabetes, hypertension, respiratory and lifestyle conditions in Gorakhpur. 5.0★ Google rating, 147+ verified reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "Dr Tanveer Alam, MD Medicine Gorakhpur, physician Gorakhpur, diabetes doctor Gorakhpur, best general physician Gorakhnath" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:image", content: DOCTOR_IMAGE },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: DOCTOR_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Physician", "MedicalBusiness", "LocalBusiness"],
          name: "Dr. Tanveer Alam (MD Medicine)",
          image: DOCTOR_IMAGE,
          telephone: PHONE,
          priceRange: "₹₹",
          medicalSpecialty: "InternalMedicine",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dasharibag, Rasoolpur, Gorakhnath",
            addressLocality: "Gorakhpur",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 26.7741222, longitude: 83.3523423 },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "147",
          },
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

// ───────────────────────── helpers ─────────────────────────
const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Comprehensive adult internal medicine consultation and diagnostics." },
  { icon: Activity, title: "Diabetes Management", desc: "Structured glycemic care with lifestyle, medication and monitoring plans." },
  { icon: HeartPulse, title: "Hypertension", desc: "Long-term BP control with evidence-based, individualized protocols." },
  { icon: Wind, title: "Respiratory Disorders", desc: "Asthma, COPD, allergic and infective airway disease management." },
  { icon: Thermometer, title: "Fever & Infection", desc: "Accurate diagnosis and targeted treatment for acute infections." },
  { icon: ClipboardCheck, title: "Preventive Health Checkups", desc: "Personalized screenings, risk profiling and annual reviews." },
  { icon: Salad, title: "Lifestyle Diseases", desc: "Obesity, thyroid, cholesterol and metabolic syndrome programs." },
  { icon: Siren, title: "Emergency Consultation", desc: "Priority guidance for urgent medical concerns and triage." },
];

const reasons = [
  { icon: Award, title: "Accurate Diagnosis", desc: "Clinical precision powered by experience and modern protocols." },
  { icon: GraduationCap, title: "Evidence-Based Treatment", desc: "Care plans grounded in the latest medical literature." },
  { icon: UserCheck, title: "Personalized Care", desc: "Tailored treatment for your body, history and lifestyle." },
  { icon: Sparkles, title: "Patient Education", desc: "You leave informed, confident and in control of your health." },
  { icon: HeartPulse, title: "Long-Term Health Focus", desc: "Not just symptoms — sustainable outcomes and prevention." },
  { icon: ShieldCheck, title: "Trusted Local Reputation", desc: "5.0★ rated, 147+ verified reviews from the Gorakhpur community." },
];

const reviews = [
  { name: "Ravi Shankar", text: "Dr. Tanveer explained everything with patience. My diabetes is finally under control. Highly recommended physician in Gorakhpur.", rating: 5 },
  { name: "Anjali Verma", text: "Very professional and calm doctor. Listens carefully and gives accurate medicines. My BP is stable now after years.", rating: 5 },
  { name: "Mohammad Faisal", text: "Best MD doctor in Gorakhnath area. Diagnosed my issue correctly when others failed. Truly grateful for the care.", rating: 5 },
  { name: "Priya Singh", text: "Spotless clinic, no rush, and genuine guidance. Felt like a premium hospital experience without leaving Gorakhpur.", rating: 5 },
  { name: "Aman Khan", text: "Sahi diagnosis aur sahi treatment. Family ke sabhi log ab unhi ke paas jate hain. Bahut trusted doctor hain.", rating: 5 },
  { name: "Sunita Devi", text: "Doctor sahab bahut acche se samjhate hain. Costly tests bina zaroorat ke nahi likhte. Bharosa ho gaya hai.", rating: 5 },
];

const faqs = [
  {
    q: "What is Dr. Tanveer Alam's specialization?",
    a: "Dr. Tanveer Alam is an MD in Medicine (Internal Medicine), specializing in adult general medicine, diabetes, hypertension, respiratory disorders, infections, and preventive health.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can use the appointment form on this site — it instantly opens WhatsApp with your details — or call directly at +91 91610 31401.",
  },
  {
    q: "Where is the clinic located?",
    a: "The clinic is located at Dasharibag, Rasoolpur, Gorakhnath, Gorakhpur, Uttar Pradesh. Directions are available via the map section below.",
  },
  {
    q: "Do you handle emergency consultations?",
    a: "Yes. For urgent concerns, please call the clinic directly. Same-day priority slots are typically available for acute medical issues.",
  },
  {
    q: "Are preventive health checkups available?",
    a: "Yes. Personalized preventive packages and annual reviews are designed based on your age, family history, and risk profile.",
  },
];

// ───────────────────────── component ─────────────────────────
function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <Reviews />
      <Appointment />
      <Location />
      <Faq />
      <Footer />
      <MobileCallBar />
    </div>
  );
}

// ───────────────────────── Nav ─────────────────────────
function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container-luxe flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-luxe">
            <HeartPulse className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-700 tracking-tight text-foreground">
              Dr. Tanveer Alam
            </div>
            <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">
              MD · Medicine
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#about">About</a>
          <a className="transition-colors hover:text-foreground" href="#services">Services</a>
          <a className="transition-colors hover:text-foreground" href="#reviews">Reviews</a>
          <a className="transition-colors hover:text-foreground" href="#location">Visit</a>
        </nav>
        <a
          href="#appointment"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02] md:inline-flex"
        >
          Book Appointment <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground md:hidden"
        >
          <Phone className="h-3.5 w-3.5" /> Call
        </a>
      </div>
    </header>
  );
}

// ───────────────────────── Hero ─────────────────────────
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden noise-overlay">
      {/* layered radial wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 60%), radial-gradient(50% 40% at 0% 100%, color-mix(in oklab, var(--color-gold) 14%, transparent), transparent 60%)",
        }}
      />
      {/* animated glow blobs */}
      <GradientGlow className="-z-10 -top-32 -right-32 h-[520px] w-[520px]" />
      <GradientGlow
        className="-z-10 -bottom-40 -left-32 h-[460px] w-[460px]"
        from="var(--color-gold)"
        to="var(--color-secondary)"
      />
      {/* grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* floating particles */}
      <Particles count={26} className="-z-10" />

      <div className="container-luxe grid items-center gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-secondary backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Trusted Physician · Gorakhpur
          </motion.div>

          <h1 className="mt-6 font-display text-[42px] font-700 leading-[1.04] tracking-tight text-balance md:text-[64px] lg:text-[76px]">
            <span className="text-gradient-gold">Dr. Tanveer Alam</span>
            <span className="mt-2 block text-[18px] font-500 tracking-[0.18em] text-secondary uppercase md:text-[15px]">
              MD · Medicine
            </span>
          </h1>


          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground md:text-[18px]">
            Precise diagnosis. Evidence-based treatment. A calmer, more
            considered standard of internal medicine — delivered with the rigor
            of a leading hospital and the warmth of a family physician.
          </p>

          {/* trust pills */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <Pill icon={<Star className="h-3.5 w-3.5 fill-gold text-gold" />}>5.0 Google Rating</Pill>
            <Pill icon={<ShieldCheck className="h-3.5 w-3.5 text-primary" />}>147+ Verified Reviews</Pill>
            <Pill icon={<HeartPulse className="h-3.5 w-3.5 text-secondary" />}>Patient-First Care</Pill>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic strength={0.3} className="inline-block">
              <a
                href="#appointment"
                className="btn-glow group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-transform hover:scale-[1.03]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2} className="inline-block">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-muted hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px]">
            {/* rotating conic glow ring */}
            <div className="absolute -inset-6 rounded-[32px] opacity-60 blur-2xl animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, color-mix(in oklab, var(--color-gold) 60%, transparent), color-mix(in oklab, var(--color-primary) 50%, transparent), color-mix(in oklab, var(--color-gold) 60%, transparent))",
              }}
            />
            {/* gold frame accent */}
            <div className="absolute -inset-3 rounded-[28px] border border-gold/40" />
            <div
              className="absolute -inset-1 rounded-[24px]"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 30%, transparent), color-mix(in oklab, var(--color-gold) 28%, transparent))",
              }}
            />

            <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-muted shadow-luxe">
              <img
                src={DOCTOR_IMAGE}
                alt="Dr. Tanveer Alam, MD Medicine, Gorakhpur"
                width={880}
                height={1100}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              {/* gradient veil for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass-card animate-float-slow absolute -left-4 top-10 rounded-2xl px-4 py-3 md:-left-10"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-[13px] font-semibold text-foreground">5.0 Rating</div>
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">147+ verified reviews</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="glass-card absolute -right-4 bottom-20 rounded-2xl px-4 py-3 md:-right-10"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <div className="text-[13px] font-semibold text-foreground">MD · Medicine</div>
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">Trusted Physician</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass-card animate-float-slow absolute -bottom-4 left-6 rounded-2xl px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <HeartPulse className="h-4 w-4 text-secondary" />
                <div className="text-[13px] font-semibold text-foreground">Patient First</div>
              </div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">Advanced medical care</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1.5 text-[12px] font-medium text-foreground/80 backdrop-blur">
      {icon}
      {children}
    </span>
  );
}

// ───────────────────────── Trust Bar ─────────────────────────
function TrustBar() {
  const items: {
    label: string;
    counter?: { to: number; suffix?: string; prefix?: string };
    text?: string;
  }[] = [
    { label: "Verified Reviews", counter: { to: 147, suffix: "+" } },
    { label: "Google Rating", text: "5.0★" },
    { label: "Patients Guided", text: "1000s" },
    { label: "Patient-Focused", counter: { to: 100, suffix: "%" } },
  ];
  return (
    <section aria-label="Trust" className="relative overflow-hidden border-y border-border bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--color-gold) 70%, transparent), transparent)",
        }}
      />
      <Stagger className="container-luxe grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4 md:py-10">
        {items.map((i) => (
          <motion.div
            key={i.label}
            variants={staggerChild}
            className="text-center"
          >
            <div className="font-display text-[24px] font-700 tracking-tight text-foreground md:text-[30px]">
              {i.counter ? (
                <Counter
                  to={i.counter.to}
                  suffix={i.counter.suffix}
                  prefix={i.counter.prefix}
                />
              ) : (
                i.text
              )}
            </div>
            <div className="mt-1 text-[11.5px] uppercase tracking-[0.16em] text-muted-foreground">
              {i.label}
            </div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}


// ───────────────────────── About ─────────────────────────
function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <GradientGlow className="-z-10 top-10 -left-32 h-[380px] w-[380px] opacity-40" />
      <div className="container-luxe grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <SectionEyebrow>About the doctor</SectionEyebrow>
          <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
            Medicine, practiced with{" "}
            <span className="text-gradient-gold">precision and patience.</span>
          </h2>
          <div className="gold-rule mt-6 w-24" />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-7 md:col-start-6">
          <p className="text-[17px] leading-[1.75] text-foreground/80 md:text-[18px]">
            Dr. Tanveer Alam holds an MD in Medicine and has spent years
            guiding patients across Gorakhpur through diabetes, hypertension,
            respiratory and complex internal medicine concerns. His practice
            is built on a simple belief — that good medicine begins with
            listening carefully, diagnosing accurately, and explaining
            clearly.
          </p>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
            <motion.div variants={staggerChild}><Stat number="MD" label="Internal Medicine" /></motion.div>
            <motion.div variants={staggerChild}><Stat number="5.0★" label="Patient Rating" /></motion.div>
            <motion.div variants={staggerChild}>
              <div className="hairline group relative overflow-hidden rounded-2xl bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-luxe">
                <div className="font-display text-[26px] font-700 tracking-tight text-primary">
                  <Counter to={147} suffix="+" />
                </div>
                <div className="mt-1 text-[13px] text-muted-foreground">Verified Reviews</div>
              </div>
            </motion.div>
            <motion.div variants={staggerChild}><Stat number="1:1" label="Personalized Consults" /></motion.div>
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}


function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="hairline rounded-2xl bg-background p-5">
      <div className="font-display text-[26px] font-700 tracking-tight text-primary">{number}</div>
      <div className="mt-1 text-[13px] text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
      <span className="h-px w-6 bg-gold" />
      {children}
    </div>
  );
}

// ───────────────────────── Services ─────────────────────────
function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <SectionEyebrow>Areas of care</SectionEyebrow>
          <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
            Comprehensive internal medicine, under one roof.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            From everyday concerns to long-term conditions — clear answers,
            unhurried consultations, and a treatment plan built around you.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group hairline relative overflow-hidden rounded-2xl bg-background p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-luxe"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/15">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-[17px] font-700 tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Why Choose ─────────────────────────
function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Why Dr. Tanveer</SectionEyebrow>
          <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
            A different standard of care.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="bg-background p-7 md:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-secondary ring-1 ring-gold/30">
                <r.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-5 font-display text-[18px] font-700 tracking-tight">
                {r.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Reviews ─────────────────────────
function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-secondary py-20 text-primary-foreground md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(50% 50% at 80% 0%, color-mix(in oklab, var(--color-gold) 30%, transparent), transparent 65%)",
        }}
      />
      <div className="container-luxe relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              <span className="h-px w-6 bg-gold" />
              Patient stories
            </div>
            <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
              Loved by the Gorakhpur community.
            </h2>
          </div>
          <div className="glass-card rounded-2xl px-5 py-4 text-foreground">
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <div className="text-[15px] font-700 leading-none">5.0 · Google</div>
                <div className="mt-1 text-[11px] text-muted-foreground">147+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <Quote className="h-5 w-5 text-gold/80" />
              <blockquote className="mt-3 text-[14.5px] leading-relaxed text-white/90">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-[13px] font-700 text-gold">
                  {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-[13px] font-600">{r.name}</div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] text-white/80">
            Join hundreds of patients who chose Dr. Tanveer for clarity and care.
          </p>
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
          >
            Book Your Appointment <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── Appointment ─────────────────────────
function Appointment() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const age = String(f.get("age") || "");
    const concern = String(f.get("concern") || "");
    const date = String(f.get("date") || "");

    const msg =
      `*Appointment Request — Dr. Tanveer Alam (MD)*%0A` +
      `%0A*Name:* ${encodeURIComponent(name)}` +
      `%0A*Phone:* ${encodeURIComponent(phone)}` +
      `%0A*Age:* ${encodeURIComponent(age)}` +
      `%0A*Concern:* ${encodeURIComponent(concern)}` +
      `%0A*Preferred Date:* ${encodeURIComponent(date)}`;

    setSubmitting(true);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="appointment" className="py-20 md:py-28">
      <div className="container-luxe">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background shadow-luxe">
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden p-8 md:p-12">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(60% 50% at 0% 100%, color-mix(in oklab, var(--color-gold) 30%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  <span className="h-px w-6 bg-gold" />
                  Premium appointment
                </div>
                <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[40px]">
                  Reserve your consultation in under a minute.
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-background/70">
                  Submit your details and we'll instantly open WhatsApp with a
                  pre-filled appointment request to our clinic.
                </p>

                <ul className="mt-8 space-y-3 text-[14px] text-background/85">
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Same-day slots often available</li>
                  <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-gold" /> Confidential and secure</li>
                  <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-gold" /> Direct WhatsApp confirmation</li>
                </ul>
              </div>
            </div>

            <form onSubmit={onSubmit} className="bg-background p-8 text-foreground md:p-12">
              <div className="grid gap-4">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Phone" name="phone" type="tel" placeholder="+91…" required />
                  <Field label="Age" name="age" type="number" placeholder="35" min={1} max={120} required />
                </div>
                <Field label="Concern" name="concern" placeholder="e.g. diabetes, fever, BP" required />
                <Field label="Preferred Date" name="date" type="date" required />

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-luxe transition-transform hover:scale-[1.01] disabled:opacity-70"
                >
                  <MessageCircle className="h-4 w-4" />
                  {submitting ? "Opening WhatsApp…" : "Request via WhatsApp"}
                </button>
                <p className="text-center text-[11.5px] text-muted-foreground">
                  By submitting you agree to be contacted regarding your appointment.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", ...rest
}: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11.5px] font-600 uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        {...rest}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-[14.5px] text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:ring-4 focus:ring-primary/12"
      />
    </label>
  );
}

// ───────────────────────── Location ─────────────────────────
function Location() {
  const mapEmbed =
    "https://www.google.com/maps?q=Dr.Tanveer+Alam+MD+medicine+Gorakhnath+Gorakhpur&output=embed";
  return (
    <section id="location" className="bg-surface py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionEyebrow>Visit the clinic</SectionEyebrow>
            <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
              Calm. Clean.<br />Close to home.
            </h2>
            <div className="mt-7 flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p className="text-[15px] leading-relaxed text-foreground/80">{ADDRESS}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ActionTile href={`tel:${PHONE}`} icon={<Phone className="h-4 w-4" />} title="Call" sub={PHONE_DISPLAY} />
              <ActionTile href={`https://wa.me/${WHATSAPP}`} icon={<MessageCircle className="h-4 w-4" />} title="WhatsApp" sub="Chat instantly" />
              <ActionTile href={MAPS_URL} icon={<MapPin className="h-4 w-4" />} title="Directions" sub="Open in Maps" />
              <ActionTile href="#appointment" icon={<ClipboardCheck className="h-4 w-4" />} title="Book" sub="Appointment form" />
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="hairline overflow-hidden rounded-3xl bg-background shadow-luxe">
              <iframe
                title="Clinic location map"
                src={mapEmbed}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[420px] w-full md:h-[520px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionTile({
  href, icon, title, sub,
}: { href: string; icon: React.ReactNode; title: string; sub: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group hairline flex items-center gap-3 rounded-2xl bg-background p-4 transition-all hover:-translate-y-0.5 hover:shadow-luxe"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/15">
        {icon}
      </div>
      <div>
        <div className="text-[13.5px] font-700 text-foreground">{title}</div>
        <div className="text-[11.5px] text-muted-foreground">{sub}</div>
      </div>
    </a>
  );
}

// ───────────────────────── FAQ ─────────────────────────
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <div className="container-luxe grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <SectionEyebrow>Questions</SectionEyebrow>
          <h2 className="mt-4 font-display text-[34px] font-700 leading-[1.08] tracking-tight md:text-[44px]">
            Frequently asked.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a className="font-600 text-primary underline underline-offset-4" href={`tel:${PHONE}`}>Call the clinic.</a>
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <div className="divide-y divide-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="py-5">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[17px] font-700 tracking-tight text-foreground md:text-[18px]">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

// ───────────────────────── Footer ─────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-luxe grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <HeartPulse className="h-4 w-4" />
            </div>
            <div>
              <div className="font-display text-[15px] font-700 tracking-tight">Dr. Tanveer Alam</div>
              <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted-foreground">MD · Medicine</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
            Trusted internal medicine care for the Gorakhpur community —
            precise, evidence-based and deeply personal.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Clinic</div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/85">{ADDRESS}</p>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
          <ul className="mt-3 space-y-2 text-[13.5px] text-foreground/85">
            <li><a className="hover:text-primary" href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li><a className="hover:text-primary" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li><a className="hover:text-primary" href={MAPS_URL} target="_blank" rel="noreferrer">Google Maps</a></li>
          </ul>
        </div>
      </div>

      <div className="container-luxe mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[12px] text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Dr. Tanveer Alam (MD Medicine). All rights reserved.</div>
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span>5.0 · 147+ Google Reviews</span>
        </div>
      </div>
    </footer>
  );
}

// ───────────────────────── Mobile Call Bar ─────────────────────────
function MobileCallBar() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-30 md:hidden">
      <div className="glass-card flex items-center gap-2 rounded-full p-1.5 shadow-luxe">
        <a
          href={`tel:${PHONE}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[13px] font-semibold text-background"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
