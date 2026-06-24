import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../../components/Arrow";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: `Company profile and philosophy of ${COMPANY.nameEn}. Based in Otsu, Shiga, providing total building maintenance across Kyoto, Otsu and Kusatsu.`,
  alternates: { canonical: "/en/about", languages: { ja: "/about", en: "/en/about" } },
};

const INFO: { en: string; td: React.ReactNode }[] = [
  { en: "COMPANY", td: <>{COMPANY.name}（{COMPANY.nameEn}）</> },
  { en: "REPRESENTATIVE", td: <>Yusuke Onishi, Representative Director</> },
  { en: "ADDRESS", td: <>{COMPANY.zip}<br />{COMPANY.addressEn}</> },
  { en: "TEL", td: <a href={`tel:${COMPANY.tel}`}>{COMPANY.tel}</a> },
  { en: "EMAIL", td: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> },
  { en: "LINE", td: <>{COMPANY.lineId}</> },
  { en: "HOURS", td: <>{COMPANY.hoursEn}</> },
  { en: "AREA", td: <>{COMPANY.areasEn}（within about 30 min by car）</> },
  {
    en: "BUSINESS",
    td: <>Total building maintenance<br />Guest-room cleaning / interior &amp; common-area care / height &amp; exterior work / facility maintenance / landscaping (5 fields, 11 trades)</>,
  },
];

export default function AboutEn() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/founder-onishi-v2.jpg" alt="Yusuke Onishi, Representative Director" style={{ objectPosition: "center 60%" }} />
          <img className="sp-smile" src="/images/founder-onishi-smile.jpg" alt="" aria-hidden="true" style={{ objectPosition: "center 60%" }} />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/en">HOME</Link><span className="sep">/</span><span>ABOUT</span>
          </nav>
          <div className="en reveal">ABOUT US</div>
          <h1 className="reveal">About Us</h1>
          <p className="lede reveal">
            Based in Otsu, Shiga, we provide total building maintenance — starting from hotel cleaning and supporting everything around the building. Here is our philosophy and company information.
          </p>
        </div>
      </header>

      {/* Philosophy */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">01 / Philosophy</div>
            <div><h2 className="section-title reveal">One reason to go independent:<br />to show our own colors.</h2></div>
          </div>
          <div className="manifesto">
            <div className="founder-photo reveal">
              <div className="founder-corner">FOUNDER</div>
              <div className="founder-tag">Representative Director<span className="name">Yusuke Onishi</span></div>
            </div>
            <div>
              <p className="manifesto-body reveal">
                Ten years on the floor of full-scope hotel cleaning.<br />There are colors you can&apos;t show as someone else&apos;s employee.<br />
                <span className="lead">To the people who use the building. To their guests beyond.</span><br />I wanted to deliver well-ordered spaces, straight and true.
              </p>
              <div className="signature reveal">— {COMPANY.nameEn} Representative Director<span className="name">Yusuke Onishi</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">02 / Company</div>
            <div><h2 className="section-title reveal">Company Information</h2></div>
          </div>
          <div className="info-table reveal">
            {INFO.map((r) => (
              <div className="row" key={r.en}>
                <div className="th">{r.en}</div>
                <div className="td">{r.td}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">03 / Area</div>
            <div>
              <h2 className="section-title reveal">Kyoto, Otsu, Kusatsu —<br /><em>close enough to run to every morning.</em></h2>
              <p className="section-lede reveal">
                Our head office is in Otsu, Shiga, and we mainly serve buildings within about 30 minutes by car. Within that area, our founder comes directly even for sudden same-day trouble.
              </p>
            </div>
          </div>
          <div className="area-grid">
            <div className="area-map reveal">
              <iframe
                className="area-map-frame"
                title="Service area (Kyoto, Otsu, Kusatsu)"
                src="https://www.google.com/maps?q=%E6%BB%8B%E8%B3%80%E7%9C%8C%E5%A4%A7%E6%B4%A5%E5%B8%82%E8%A1%A3%E5%B7%9D1%E4%B8%81%E7%9B%AE40-23&z=10&hl=en&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="reveal-stagger">
              <div className="area-row"><div className="ix">— 001</div><div className="city">K Y O T O<small>KYOTO CITY</small></div><div className="status">Active</div></div>
              <div className="area-row"><div className="ix">— 002</div><div className="city">O T S U<small>OTSU CITY · HQ</small></div><div className="status">Active</div></div>
              <div className="area-row"><div className="ix">— 003</div><div className="city">K U S A T S U<small>KUSATSU CITY</small></div><div className="status">Active</div></div>
              <div className="area-row" style={{ borderBottom: "none" }}><div className="ix">— 004</div><div className="city" style={{ color: "var(--ink-3)" }}>Other areas<small>OTHER AREAS</small></div><div className="status" style={{ color: "var(--ink-3)", borderColor: "var(--line)", background: "transparent" }}>On request</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="bg-glyph">悠</div>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow cta-eyebrow reveal">FREE ESTIMATE</div>
            <h2 className="cta-title reveal">First, <em>a free estimate.</em></h2>
            <p className="cta-lede reveal">
              Tell us the situation and we&apos;ll give you a rough figure on the spot. Quotes are free, and there is never a hard sell.
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
