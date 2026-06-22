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
      <header className="detail-hero">
        <div className="floor" />
        <div className="glow" />
        <div className="big-kanji" id="dGlyph">{s.kanji}</div>
        <div className="detail-hero-inner">
          <nav className="breadcrumb reveal">
            <Link href="/">悠 TOP</Link><span>/</span>
            <Link href="/#services">業務内容</Link><span>/</span>
            <span style={{ color: "var(--teal-soft)" }}>{s.name}</span>
          </nav>
          <div className="reveal">
            <span className="cat-pill">{s.cat}</span>
            <span className="detail-num">{pad(n)} / 11</span>
          </div>
          <h1 className="detail-title reveal">{stripParen(s.name)}</h1>
          <div className="detail-en reveal">{s.en}</div>
          <p className="detail-tagline reveal">{s.tagline}</p>
          <div className="hero-cta reveal">
            <Link href="/#contact" className="btn-primary" data-cursor="hover"><span>この業種を相談する</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost on-light" data-cursor="hover"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="overview">
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

      {/* FEATURES */}
      <section className="feat">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">特徴 / FEATURES</div>
            <div><h2 className="section-title reveal">悠が選ばれる、<em>3つの理由。</em></h2></div>
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
      <section className="gallery">
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
              <div className="gal-card ph-stripe gal-ph">
                <div className="ph-label">{s.name} の現場写真<br />（ここに施工写真が入ります）</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RELATED */}
      <section className="related">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">ほかの業種 / MORE</div>
            <div><h2 className="section-title reveal">建物のこと、<em>まとめて悠へ。</em></h2></div>
          </div>
          <div className="rel-grid reveal-stagger">
            {related.map((r) => {
              const rn = SERVICES.findIndex((x) => x.slug === r.slug) + 1;
              return (
                <Link key={r.slug} href={`/services/${r.slug}`} className="rel-card" data-cursor="hover">
                  <div className="rk">{r.kanji}</div>
                  <div className="rix">{pad(rn)} / 11</div>
                  <div className="rn">{r.name}</div>
                  <div className="rm">詳しく <span className="arr">→</span></div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* MINI CTA */}
      <section className="cta-banner" style={{ padding: "110px 40px" }}>
        <div className="cta-inner" style={{ alignItems: "end" }}>
          <div>
            <div className="eyebrow reveal" style={{ color: "var(--paper-3)" }}>FREE ESTIMATE</div>
            <h2 className="reveal" style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: "clamp(36px,4.4vw,72px)", lineHeight: 1.2, marginTop: 28, letterSpacing: ".02em" }}>
              まずは、<span style={{ background: "linear-gradient(120deg,#6dd2db,#8ad895)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>無料で見積もり。</span>
            </h2>
            <p className="reveal" style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 2, color: "var(--paper-3)", marginTop: 30, maxWidth: "46ch" }}>
              状況をお聞かせいただければ、その場で概算をお出しします。見積もりは無料、しつこい営業は一切ありません。
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="/#contact" className="btn-primary" data-cursor="hover"><span>フォームで依頼</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost on-light" data-cursor="hover"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
