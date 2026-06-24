import Link from "next/link";
import Arrow from "./components/Arrow";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { ja: "/", en: "/en", "x-default": "/" },
  },
};

const telStyle = {
  fontFamily: "var(--mono)",
  fontSize: "10px",
  letterSpacing: ".25em",
} as const;

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
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
            <span className="l1">ホテル清掃、客室から屋上まで。</span>
            <br />
            <span className="l2">建物まるごと、整える。</span>
          </h1>
          <p className="hero-lede reveal">
            株式会社 悠（YOU）は、ホテルの全般清掃を軸に、館内・高所・設備・外構まで。
            <strong>確かな品質</strong>
            で、清掃会社さまの現場を支え、ホテルさまへ直接お届けする、滋賀発の総合ビルメンテナンスです。
          </p>
          <div className="hero-meta reveal">
            <div className="hero-fact"><div className="k">AREA</div><div className="v">京都 / 大津 / 草津</div></div>
            <div className="hero-fact"><div className="k">SERVICE</div><div className="v">5分野 / 11業務</div></div>
            <div className="hero-fact"><div className="k">PARTNER</div><div className="v">清掃会社さま歓迎</div></div>
            <div className="hero-fact"><div className="k">QUOTE</div><div className="v">無料・即日対応</div></div>
          </div>
          <div className="hero-cta reveal">
            <Link href="/services" className="btn-primary"><span>業務内容を見る</span><Arrow /></Link>
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
            ["客室清掃", "窓清掃 / ロープ作業", "エアコン分解洗浄", "庭木の剪定", "厨房ダクト清掃", "屋上防水"].map(
              (t) => <span key={`${k}-${t}`}>{t}</span>,
            ),
          )}
        </div>
      </div>

      {/* INTRO */}
      <section className="section alt intro-block">
        <div className="wrap">
          <div className="eyebrow reveal" style={{ marginBottom: 28 }}>ABOUT US</div>
          <p className="intro-statement reveal">
            建物の困りごとは、<em>ぜんぶ、悠へ。</em>
          </p>
          <p className="intro-text reveal">
            客室清掃から高所のロープ作業、エアコン・ダクトの分解洗浄、庭木の剪定や屋上防水まで。専門会社を何社も探す手間なく、建物まわりをまるごとワンストップでお任せいただけます。標準化した手順とインスペクション、十年の現場経験で、確かな品質をお納めします。
          </p>
          <div className="hero-cta reveal" style={{ marginTop: 38 }}>
            <Link href="/about" className="btn-ghost"><span>会社概要を見る</span><Arrow /></Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">01 / 業務内容</div>
            <div>
              <h2 className="section-title reveal">建物まわりの全11業務を、<br /><em>5つの分野</em>に。</h2>
              <p className="section-lede reveal">
                11の専門業務を5つの分野に整理しました。各分野の詳細は、カードからご覧いただけます。
              </p>
            </div>
          </div>
          <div className="svc-grid reveal-stagger">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                <div className="svc-kanji">{s.kanji}</div>
                <div className="svc-ix">{pad(i + 1)} / {pad(SERVICES.length)}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-en">{s.en}</div>
                <div className="svc-desc">{s.tagline}</div>
                <div className="svc-more">詳しく見る <span className="arr">→</span></div>
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
            時間どおりに、決めた品質で。<br />
            <em>当たり前を、確実に。</em>
          </p>
          <p className="pb-sub reveal">
            チェックイン時刻に必ず間に合わせる。標準化した手順と検品で、担当者が変わっても仕上がりはブレない。十年の現場で磨いた「確実さ」が、悠のいちばんの強みです。
          </p>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">02 / 強み</div>
            <div>
              <h2 className="section-title reveal">選ばれる理由は、<br /><em>価格ではなく、品質。</em></h2>
              <p className="section-lede reveal">
                悠は、ホテルから清掃を請ける清掃会社さまの現場を、確かな品質で支える協力会社です。小規模ホテルさまへは直接、同じ品質でお応えします。
              </p>
            </div>
          </div>
          <div className="strengths-grid reveal-stagger">
            <div className="strength">
              <div className="strength-num">— 001</div><div className="strength-jp">品 質 第 一</div>
              <h3 className="strength-title"><span className="pop">品質</span>で、応える。</h3>
              <p className="strength-body">客室タイプごとに標準化した手順と、清掃後のチェック体制（インスペクション）。担当者が変わっても仕上がりはブレません。ホテル基準の品質を、安定してお納めします。</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 002</div><div className="strength-jp">協 力 会 社 歓 迎</div>
              <h3 className="strength-title"><span className="pop">清掃会社</span>さまの戦力に。</h3>
              <p className="strength-body">ホテルから清掃を請ける清掃会社さまの、繁忙期・人手不足・品質課題を、確かな現場力で支えます。御社の看板で、安心してお任せいただける仕上がりをお約束します。</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 003</div><div className="strength-jp">十 年 実 績</div>
              <h3 className="strength-title"><span className="pop">10年</span>の現場経験。</h3>
              <p className="strength-body">代表自らホテルの全般清掃の現場で十年。手順も段取りもトラブル対応も、現場で磨いた感覚です。だから、即戦力としてすぐに現場へ入れます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">03 / 施工事例</div>
            <div>
              <h2 className="section-title reveal">現場の、ほんとうの仕事。</h2>
              <p className="section-lede reveal">
                ロープ一本で降りる高所の窓清掃、真夏の庭木剪定、分解して芯まで洗うエアコンとダクト。京都・大津の建物で、日々お納めしている実際の現場です。
              </p>
            </div>
          </div>
          <div className="works-grid">
            <div className="work-col">
              <Link href="/services/gaiso" className="work-card big reveal">
                <img src="/images/work-rope-2.jpg" alt="ロープ作業による窓清掃" loading="lazy" />
                <div className="meta"><div className="label">窓清掃 / ロープ作業<small>Rope Access · Kyoto</small></div><span className="badge">高所</span></div>
              </Link>
            </div>
            <div className="work-col">
              <Link href="/services/gaikou" className="work-card wide reveal">
                <img src="/images/work-pruning-1.jpg" alt="庭木の剪定" loading="lazy" />
                <div className="meta"><div className="label">庭木の剪定<small>Tree Pruning · Otsu</small></div><span className="badge">外構</span></div>
              </Link>
              <Link href="/services/setsubi" className="work-card wide reveal">
                <img src="/images/work-aircon.jpg" alt="エアコン分解洗浄" loading="lazy" />
                <div className="meta"><div className="label">エアコン分解洗浄<small>A/C Deep Clean</small></div><span className="badge">設備</span></div>
              </Link>
            </div>
          </div>
          <div className="hero-cta reveal" style={{ marginTop: 40 }}>
            <Link href="/works" className="btn-ghost"><span>施工事例をもっと見る</span><Arrow /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="bg-glyph">悠</div>
        <div className="wrap cta-inner">
          <div>
            <div className="eyebrow cta-eyebrow reveal">FREE ESTIMATE</div>
            <h2 className="cta-title reveal">「これ、お願い<br /><em>できますか？」</em></h2>
            <p className="cta-lede reveal">
              どんな業種でも、まずはご相談ください。状況をお聞かせいただければ、その場で概算をお出しします。見積もりは無料、しつこい営業は一切ありません。
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
