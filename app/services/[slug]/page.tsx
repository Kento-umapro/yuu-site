import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "../../components/Arrow";
import { SERVICES, getService } from "@/lib/services";
import { COMPANY } from "@/lib/company";

const pad = (n: number) => String(n).padStart(2, "0");
const stripParen = (s: string) => s.replace(/（.*）/, "");

const telStyle = {
  fontFamily: "var(--mono)",
  fontSize: "10px",
  letterSpacing: ".25em",
} as const;

// 各業種ページのヒーロー背景写真
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
  if (!s) return { title: "業種詳細" };
  const title = `${stripParen(s.name)} / 総合ビルメンテナンス`;
  const description = `${s.tagline} 京都・大津・草津対応、株式会社 悠の${stripParen(s.name)}。${COMPANY.areas}で一次受け・無料見積もり。`;
  return {
    title,
    description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${stripParen(s.name)} — 株式会社 悠`, description, type: "website", locale: "ja_JP" },
  };
}

export default async function ServiceDetail(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const idx = SERVICES.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const s = SERVICES[idx];
  const n = idx + 1;
  const related = [1, 2, 3, 4].map((k) => SERVICES[(idx + k) % SERVICES.length]);

  return (
    <>
      {/* DETAIL HERO */}
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src={HERO_IMG[s.slug] ?? "/images/hero-2.png"} alt={`${s.name}の現場`} />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link><span className="sep">/</span>
            <Link href="/services">SERVICE</Link><span className="sep">/</span>
            <span style={{ color: "var(--accent)" }}>{stripParen(s.name)}</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
            <span className="cat-pill">{s.cat}</span>
            <span className="detail-num">{pad(n)} / {pad(SERVICES.length)}</span>
          </div>
          <h1 className="reveal">{stripParen(s.name)}</h1>
          <div className="en reveal" style={{ marginTop: 12 }}>{s.en}</div>
          <p className="lede reveal">{s.tagline}</p>
          <div className="hero-cta reveal" style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn-primary"><span>この業種を相談する</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </header>

      {/* STATS（主力ページ） */}
      {s.stats && (
        <section className="stat-band">
          <div className="wrap">
            {s.stats.map((st, i) => (
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
            <div className="ov-side reveal"><div className="lbl">Overview / 概要</div><div className="big-num">{pad(n)}</div></div>
            <div className="ov-body reveal">
              {s.intro.map((p, i) => <p key={i}>{p}</p>)}
              <div className="ov-target"><div className="k">対象</div><div className="v">{s.target}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* COVERS（対応内容 / 含まれる業務） */}
      {s.covers && (
        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <div className="section-num reveal">対応内容 / SCOPE</div>
              <div><h2 className="section-title reveal">{s.covers.heading}</h2></div>
            </div>
            <div className="cover-grid reveal-stagger">
              {s.covers.items.map((c, i) => (
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
            <div className="section-num reveal">特徴 / FEATURES</div>
            <div><h2 className="section-title reveal">悠が選ばれる、<em>理由。</em></h2></div>
          </div>
          <div className="feat-grid reveal-stagger">
            {s.features.map((f, i) => (
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
            <div className="section-num reveal">施工の様子 / WORKS</div>
            <div><h2 className="section-title reveal">現場の、ほんとうの仕事。</h2></div>
          </div>
          {s.photos && s.photos.length ? (
            <div className={`gal-grid ${s.photos.length > 1 ? "cols-2" : "cols-1"} reveal-stagger`}>
              {s.photos.map((p, i) => (
                <div className="gal-card" key={i}>
                  <img src={`/images/${p.src}`} alt={p.label} loading="lazy" />
                  <div className="meta"><div className="label">{p.label}</div><span className="badge">{p.badge}</span></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="gal-grid cols-1 reveal">
              <div className="gal-card gal-ph">
                <div className="ph-label">{s.name} の現場写真<br />（ここに施工写真が入ります）</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">ほかの業種 / MORE</div>
            <div><h2 className="section-title reveal">建物のこと、<em>まとめて悠へ。</em></h2></div>
          </div>
          <div className="rel-grid reveal-stagger">
            {related.map((r) => {
              const rn = SERVICES.findIndex((x) => x.slug === r.slug) + 1;
              return (
                <Link key={r.slug} href={`/services/${r.slug}`} className="rel-card">
                  <div className="rk">{r.kanji}</div>
                  <div className="rix">{pad(rn)} / {pad(SERVICES.length)}</div>
                  <div className="rn">{r.name}</div>
                  <div className="rm">詳しく <span className="arr">→</span></div>
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
            <h2 className="cta-title reveal">まずは、<em>無料で見積もり。</em></h2>
            <p className="cta-lede reveal">
              状況をお聞かせいただければ、その場で概算をお出しします。見積もりは無料、しつこい営業は一切ありません。
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="/contact" className="btn-primary"><span>フォームで依頼</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
