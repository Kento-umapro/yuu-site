import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "../../../components/Arrow";
import { SERVICES, getService, SERVICE_EN, CAT_EN } from "@/lib/services";
import { COMPANY } from "@/lib/company";

const pad = (n: number) => String(n).padStart(2, "0");

const telStyle = {
  fontFamily: "var(--mono)",
  fontSize: "10px",
  letterSpacing: ".25em",
} as const;

const HERO_IMG: Record<string, string> = {
  kyakushitsu: "/images/hero-2.png",
  kannai: "/images/svc-kannai.png",
  gaiso: "/images/svc-gaiso.png",
  setsubi: "/images/svc-setsubi.png",
  gaikou: "/images/svc-gaikou.png",
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  const en = SERVICE_EN[slug];
  if (!s || !en) return { title: "Service" };
  const title = `${s.en} / Total Building Maintenance`;
  const description = `${en.tagline} ${s.en} by ${COMPANY.nameEn}, serving ${COMPANY.areasEn}. Primary contractor, free estimates.`;
  return {
    title,
    description,
    alternates: { canonical: `/en/services/${s.slug}`, languages: { ja: `/services/${s.slug}`, en: `/en/services/${s.slug}` } },
    openGraph: { title: `${s.en} — ${COMPANY.nameEn}`, description, type: "website", locale: "en_US" },
  };
}

export default async function ServiceDetailEn(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const idx = SERVICES.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = SERVICES[idx];
  const en = SERVICE_EN[slug];
  if (!en) notFound();
  const n = idx + 1;
  const related = [1, 2, 3, 4].map((k) => SERVICES[(idx + k) % SERVICES.length]);

  return (
    <>
      {/* DETAIL HERO */}
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src={HERO_IMG[s.slug] ?? "/images/hero-2.png"} alt={`${s.en} on site`} />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/en">HOME</Link><span className="sep">/</span>
            <Link href="/en/services">SERVICE</Link><span className="sep">/</span>
            <span style={{ color: "var(--accent)" }}>{s.en}</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
            <span className="cat-pill">{CAT_EN[s.cat]}</span>
            <span className="detail-num">{pad(n)} / {pad(SERVICES.length)}</span>
          </div>
          <h1 className="reveal">{s.en}</h1>
          <div className="en reveal" style={{ marginTop: 12 }}>{s.name}</div>
          <p className="lede reveal">{en.tagline}</p>
          <div className="hero-cta reveal" style={{ marginTop: 34 }}>
            <Link href="/en/contact" className="btn-primary"><span>Ask about this service</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </header>

      {/* STATS */}
      {en.stats && (
        <section className="stat-band">
          <div className="wrap">
            {en.stats.map((st, i) => (
              <div className="stat-cell" key={i}>
                <div className="k">{st.k}</div>
                <div className="v">{st.v}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* OVERVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="ov-grid">
            <div className="ov-side reveal"><div className="lbl">Overview</div><div className="big-num">{pad(n)}</div></div>
            <div className="ov-body reveal">
              {en.intro.map((p, i) => <p key={i}>{p}</p>)}
              <div className="ov-target"><div className="k">For</div><div className="v">{en.target}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERS */}
      {en.covers && (
        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num reveal">SCOPE</div>
              <div><h2 className="section-title reveal">{en.covers.heading}</h2></div>
            </div>
            <div className="cover-grid reveal-stagger">
              {en.covers.items.map((c, i) => (
                <div className="cover-card" key={i}>
                  <div className="cn">{pad(i + 1)}</div>
                  <div className="ct">{c.t}</div>
                  <div className="cb">{c.b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">FEATURES</div>
            <div><h2 className="section-title reveal">Why YOU is <em>chosen.</em></h2></div>
          </div>
          <div className="feat-grid reveal-stagger">
            {en.features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="fn">0{i + 1}</div>
                <div className="ft">{f.t}</div>
                <div className="fb">{f.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">WORKS</div>
            <div><h2 className="section-title reveal">Real work, on real sites.</h2></div>
          </div>
          {s.photos && s.photos.length ? (
            <div className={`gal-grid ${s.photos.length > 1 ? "cols-2" : "cols-1"} reveal-stagger`}>
              {s.photos.map((p, i) => (
                <div className="gal-card" key={i}>
                  <img src={`/images/${p.src}`} alt={en.photos?.[i]?.label ?? s.en} loading="lazy" />
                  <div className="meta"><div className="label">{en.photos?.[i]?.label ?? ""}</div><span className="badge">{en.photos?.[i]?.badge ?? p.badge}</span></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gal-grid cols-1 reveal">
              <div className="gal-card gal-ph">
                <div className="ph-label">Site photos of {s.en}<br />(work photos go here)</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">MORE</div>
            <div><h2 className="section-title reveal">Everything about your building, <em>to YOU.</em></h2></div>
          </div>
          <div className="rel-grid reveal-stagger">
            {related.map((r) => {
              const rn = SERVICES.findIndex((x) => x.slug === r.slug) + 1;
              return (
                <Link key={r.slug} href={`/en/services/${r.slug}`} className="rel-card">
                  <div className="rk">{r.kanji}</div>
                  <div className="rix">{pad(rn)} / {pad(SERVICES.length)}</div>
                  <div className="rn">{r.en}</div>
                  <div className="rm">View <span className="arr">→</span></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINI CTA */}
      <section className="cta-banner">
        <div className="bg-glyph">悠</div>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow cta-eyebrow reveal">FREE ESTIMATE</div>
            <h2 className="cta-title reveal">First, <em>a free estimate.</em></h2>
            <p className="cta-lede reveal">
              Tell us the situation and we&apos;ll give you a rough figure on the spot. Quotes are free, with no hard sell.
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
