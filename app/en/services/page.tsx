import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../../components/Arrow";
import { SERVICES, TAGLINE_EN, CAT_EN } from "@/lib/services";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Services",
  description: `Services of ${COMPANY.nameEn}. Guest-room cleaning, interior & common-area care, height/exterior work, facility maintenance and landscaping — 11 trades in 5 fields, one-stop.`,
  alternates: { canonical: "/en/services", languages: { ja: "/services", en: "/en/services" } },
};

const pad = (n: number) => String(n).padStart(2, "0");

const PROCESS = [
  { num: "01", day: "DAY 1", title: "Inquiry", body: "Reach us by form, phone or LINE and tell us your building type, the trades you need and preferred times." },
  { num: "02", day: "DAY 2–3", title: "Site visit", body: "Our founder visits in person to check conditions and your operation flow. We can take over your existing setup as-is." },
  { num: "03", day: "DAY 4–5", title: "Estimate", body: "A fair quote based on scale, frequency and difficulty. No added charges after we present it." },
  { num: "04", day: "DAY 7+", title: "First service", body: "After contract, we can start in as little as a week — delivered at the agreed time and condition, without fail." },
];

export default function ServicesEn() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/svc-setsubi.png" alt="Facility maintenance on site" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/en">HOME</Link><span className="sep">/</span><span>SERVICE</span>
          </nav>
          <div className="en reveal">OUR SERVICE</div>
          <h1 className="reveal">Services</h1>
          <p className="lede reveal">
            From guest-room cleaning to rope-access work at height, deep-cleaning of A/C and ducts, tree pruning and rooftop waterproofing. We have organized 11 specialist trades into <em>five fields</em>, so you can leave the whole building to us, one-stop.
          </p>
        </div>
      </header>

      {/* Service list */}
      <section className="section">
        <div className="wrap">
          <div className="svc-grid reveal-stagger">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/en/services/${s.slug}`} className="svc-card">
                <div className="svc-kanji">{s.kanji}</div>
                <div className="svc-ix">{pad(i + 1)} / {pad(SERVICES.length)} · {CAT_EN[s.cat]}</div>
                <div className="svc-name">{s.en}</div>
                <div className="svc-en">{CAT_EN[s.cat]}</div>
                <div className="svc-desc">{TAGLINE_EN[s.slug]}</div>
                <div className="svc-more">Learn more <span className="arr">→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">FLOW</div>
            <div>
              <h2 className="section-title reveal">From inquiry to<br />your first service.</h2>
              <p className="section-lede reveal">At the fastest, first service is possible within a week of your inquiry.</p>
            </div>
          </div>
          <div className="process-grid reveal-stagger">
            {PROCESS.map((p) => (
              <div className="step" key={p.num}>
                <div className="step-num">{p.num}</div>
                <div className="step-eyebrow">{p.day}</div>
                <div className="step-title">{p.title}</div>
                <div className="step-body">{p.body}</div>
              </div>
            ))}
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
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="/en/contact" className="btn-primary"><span>Request via form</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".25em" }}>TEL</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
