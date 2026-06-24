import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../../components/Arrow";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Works",
  description: `Selected works by ${COMPANY.nameEn}. Window cleaning and rope access, tree pruning, A/C and duct deep cleaning — real sites we serve daily across Kyoto and Otsu.`,
  alternates: { canonical: "/en/works", languages: { ja: "/works", en: "/en/works" } },
};

const WORKS: { src: string; label: string; en: string; badge: string; href: string }[] = [
  { src: "work-rope-2.jpg", label: "Rope access on a building facade", en: "Rope Access · Kyoto", badge: "HEIGHT", href: "/en/services/gaiso" },
  { src: "work-rope-1.jpg", label: "Upper-floor window cleaning", en: "Window Cleaning", badge: "HEIGHT", href: "/en/services/gaiso" },
  { src: "work-pruning-1.jpg", label: "Pruning planting in front of a building", en: "Tree Pruning · Otsu", badge: "EXTERIOR", href: "/en/services/gaikou" },
  { src: "work-pruning-2.jpg", label: "Tending high branches", en: "Pruning", badge: "EXTERIOR", href: "/en/services/gaikou" },
  { src: "work-aircon.jpg", label: "Disassembling a ceiling-recessed fan", en: "A/C Deep Clean", badge: "FACILITY", href: "/en/services/setsubi" },
  { src: "work-duct-dirty.jpg", label: "Grease inside an exhaust fan", en: "Kitchen Duct", badge: "FACILITY", href: "/en/services/setsubi" },
  { src: "room-twin.png", label: "Twin-room guest cleaning", en: "Guest Room", badge: "CLEANING", href: "/en/services/kyakushitsu" },
  { src: "tokuso-bath-after.jpg", label: "Unit-bath floor special cleaning (after)", en: "Special Cleaning", badge: "SPECIAL", href: "/en/services/kannai" },
  { src: "svc-gaiso.png", label: "Building exterior maintenance", en: "Exterior Care", badge: "EXTERIOR", href: "/en/services/gaiso" },
];

export default function WorksEn() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/work-rope-2.jpg" alt="Window cleaning by rope access" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/en">HOME</Link><span className="sep">/</span><span>WORKS</span>
          </nav>
          <div className="en reveal">OUR WORKS</div>
          <h1 className="reveal">Works</h1>
          <p className="lede reveal">
            High-level window cleaning on a single rope, tree pruning in midsummer, air-conditioners and ducts washed to the core. Across buildings in Kyoto and Otsu, this is <em>the real work we deliver every day</em>.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="works-gallery reveal-stagger">
            {WORKS.map((w) => (
              <Link key={w.src + w.label} href={w.href} className="gal-card">
                <img src={`/images/${w.src}`} alt={w.label} loading="lazy" />
                <div className="meta">
                  <div className="label">{w.label}<small style={{ display: "block", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: ".2em", color: "rgba(255,255,255,.65)", marginTop: 4 }}>{w.en}</small></div>
                  <span className="badge">{w.badge}</span>
                </div>
              </Link>
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
            <h2 className="cta-title reveal">Your building, too,<br /><em>set right by YOU.</em></h2>
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
