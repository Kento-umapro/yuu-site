import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/Arrow";
import { SERVICES, TAGLINE_EN } from "@/lib/services";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "YOU Co., Ltd. — Total Building Maintenance / Kyoto · Otsu · Kusatsu",
  description: COMPANY.descriptionEn,
  alternates: {
    canonical: "/en",
    languages: { ja: "/", en: "/en", "x-default": "/" },
  },
  openGraph: { locale: "en_US", title: "YOU Co., Ltd. — Total Building Maintenance", description: COMPANY.descriptionEn },
};

const telStyle = {
  fontFamily: "var(--mono)",
  fontSize: "10px",
  letterSpacing: ".25em",
} as const;

const pad = (n: number) => String(n).padStart(2, "0");

const MARQUEE = [
  "Guest Room Cleaning",
  "Window Cleaning / Rope Access",
  "A/C Deep Cleaning",
  "Tree Pruning",
  "Kitchen Duct Cleaning",
  "Rooftop Waterproofing",
];

export default function HomeEn() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="hero-media">
          <video autoPlay muted loop playsInline poster="/images/hero-1.png">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <svg className="shader-defs" aria-hidden="true" focusable="false">
          <filter id="liquid" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves={2} seed={7} result="noise">
              <animate attributeName="baseFrequency" dur="9s" values="0.012 0.016;0.018 0.024;0.012 0.016" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale={6} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        <div className="wrap hero-inner">
          <div className="eyebrow hero-eyebrow reveal">TOTAL BUILDING CARE / SHIGA · KYOTO</div>
          <h1 className="hero-title reveal">
            <span className="l1">Hotel cleaning, from guest rooms to the rooftop.</span>
            <br />
            <span className="l2">We care for the whole building.</span>
          </h1>
          <p className="hero-lede reveal">
            YOU Co., Ltd. is built around full-scope hotel cleaning, reaching further into interiors, height work,
            facilities and landscaping. With <strong>dependable quality</strong>, we support cleaning companies on
            site and serve hotels directly — total building maintenance, based in Shiga.
          </p>
          <div className="hero-meta reveal">
            <div className="hero-fact"><div className="k">AREA</div><div className="v">Kyoto / Otsu / Kusatsu</div></div>
            <div className="hero-fact"><div className="k">SERVICE</div><div className="v">5 fields / 11 trades</div></div>
            <div className="hero-fact"><div className="k">PARTNER</div><div className="v">Cleaning partners welcome</div></div>
            <div className="hero-fact"><div className="k">QUOTE</div><div className="v">Free · same-day</div></div>
          </div>
          <div className="hero-cta reveal">
            <Link href="/en/services" className="btn-primary"><span>View our services</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost">
              <span>{COMPANY.tel}</span><span style={telStyle}>TEL</span>
            </a>
          </div>
        </div>
        <div className="hero-scroll"><span>SCROLL</span><span className="line" /></div>
      </header>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            MARQUEE.map((t) => <span key={`${k}-${t}`}>{t}</span>),
          )}
        </div>
      </div>

      {/* INTRO */}
      <section className="section alt intro-block">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: 28 }}>ABOUT US</div>
          <p className="intro-statement reveal">
            Whatever your building needs, <em>bring it to YOU.</em>
          </p>
          <p className="intro-text reveal">
            From guest-room cleaning to rope-access work at height, deep-cleaning of air-conditioners and ducts,
            tree pruning and rooftop waterproofing — there is no need to hunt down a different specialist for each job.
            Leave the whole building to us, in one place. Standardized procedures, post-work inspection and ten years of
            on-site experience let us deliver quality you can count on.
          </p>
          <div className="hero-cta reveal" style={{ marginTop: 38 }}>
            <Link href="/en/about" className="btn-ghost"><span>About the company</span><Arrow /></Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">01 / Services</div>
            <div>
              <h2 className="section-title reveal">All 11 trades around your building, in <br /><em>five fields.</em></h2>
              <p className="section-lede reveal">
                We have organized 11 specialist trades into five fields. Open any card to see the details of that field.
              </p>
            </div>
          </div>
          <div className="svc-grid reveal-stagger">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/en/services/${s.slug}`} className="svc-card">
                <div className="svc-kanji">{s.kanji}</div>
                <div className="svc-ix">{pad(i + 1)} / {pad(SERVICES.length)}</div>
                <div className="svc-name">{s.en}</div>
                <div className="svc-en">{s.cat}</div>
                <div className="svc-desc">{TAGLINE_EN[s.slug]}</div>
                <div className="svc-more">Learn more <span className="arr">→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="photo-band">
        <div className="photo-band-bg" style={{ backgroundImage: "url(/images/svc-gaiso.png)" }} />
        <div className="wrap">
          <div className="eyebrow pb-eyebrow reveal">QUALITY FIRST</div>
          <p className="pb-statement reveal">
            On time, at the quality we promised.<br />
            <em>The basics, done without fail.</em>
          </p>
          <p className="pb-sub reveal">
            We always make the check-in deadline. With standardized procedures and inspection, the finish never wavers
            even when the staff on duty changes. The “certainty” we have honed over ten years on site is YOU&apos;s greatest strength.
          </p>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">02 / Strengths</div>
            <div>
              <h2 className="section-title reveal">Chosen not for price — <br /><em>but for quality.</em></h2>
              <p className="section-lede reveal">
                YOU is a partner that supports, with dependable quality, the cleaning companies who take cleaning work from
                hotels. For smaller hotels, we answer directly with that same quality.
              </p>
            </div>
          </div>
          <div className="strengths-grid reveal-stagger">
            <div className="strength">
              <div className="strength-num">— 001</div><div className="strength-jp">Q U A L I T Y</div>
              <h3 className="strength-title">We answer with <span className="pop">quality</span>.</h3>
              <p className="strength-body">Procedures standardized for every room type, plus a post-cleaning inspection system. The finish stays consistent even when the person on duty changes. We deliver hotel-grade quality, reliably.</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 002</div><div className="strength-jp">P A R T N E R S</div>
              <h3 className="strength-title">A force for <span className="pop">cleaning firms</span>.</h3>
              <p className="strength-body">We back up the cleaning companies who take work from hotels — through peak seasons, staff shortages and quality challenges — with real on-site capability. Under your name, we promise a finish you can hand over with confidence.</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 003</div><div className="strength-jp">T E N&nbsp;&nbsp;Y E A R S</div>
              <h3 className="strength-title"><span className="pop">10 years</span> on site.</h3>
              <p className="strength-body">Our founder spent ten years on the floor of full-scope hotel cleaning. Procedures, logistics and trouble-shooting are instincts honed on site — so we can step in and contribute from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">03 / Works</div>
            <div>
              <h2 className="section-title reveal">Real work, on real sites.</h2>
              <p className="section-lede reveal">
                High-level window cleaning on a single rope, tree pruning in the height of summer, air-conditioners and ducts
                disassembled and washed to the core — the actual sites we serve every day across Kyoto and Otsu.
              </p>
            </div>
          </div>
          <div className="works-grid">
            <div className="work-col">
              <Link href="/en/services/gaiso" className="work-card big reveal">
                <img src="/images/work-rope-2.jpg" alt="Window cleaning by rope access" loading="lazy" />
                <div className="meta"><div className="label">Window Cleaning / Rope Access<small>Rope Access · Kyoto</small></div><span className="badge">HEIGHT</span></div>
              </Link>
            </div>
            <div className="work-col">
              <Link href="/en/services/gaikou" className="work-card wide reveal">
                <img src="/images/work-pruning-1.jpg" alt="Tree pruning" loading="lazy" />
                <div className="meta"><div className="label">Tree Pruning<small>Tree Pruning · Otsu</small></div><span className="badge">EXTERIOR</span></div>
              </Link>
              <Link href="/en/services/setsubi" className="work-card wide reveal">
                <img src="/images/work-aircon.jpg" alt="Air-conditioner deep cleaning" loading="lazy" />
                <div className="meta"><div className="label">A/C Deep Clean<small>A/C Deep Clean</small></div><span className="badge">FACILITY</span></div>
              </Link>
            </div>
          </div>
          <div className="hero-cta reveal" style={{ marginTop: 40 }}>
            <Link href="/en/works" className="btn-ghost"><span>See more works</span><Arrow /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="bg-glyph">悠</div>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow cta-eyebrow reveal">FREE ESTIMATE</div>
            <h2 className="cta-title reveal">“Can you take<br /><em>care of this?”</em></h2>
            <p className="cta-lede reveal">
              Whatever the trade, start by asking us. Tell us the situation and we&apos;ll give you a rough estimate on the spot.
              Quotes are free, and we never push a hard sell.
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="/en/contact" className="btn-primary"><span>Request via form</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
