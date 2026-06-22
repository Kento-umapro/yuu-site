import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/Arrow";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "施工事例",
  description: `${COMPANY.name}の施工事例。窓清掃・ロープ作業、庭木の剪定、エアコン・ダクトの分解洗浄など、京都・大津で日々お納めしている実際の現場。`,
  alternates: { canonical: "/works" },
};

const WORKS: { src: string; label: string; en: string; badge: string; href: string }[] = [
  { src: "work-rope-2.jpg", label: "ビル外壁のロープ作業", en: "Rope Access · Kyoto", badge: "高所", href: "/services/gaiso" },
  { src: "work-rope-1.jpg", label: "上階窓の清掃", en: "Window Cleaning", badge: "高所", href: "/services/gaiso" },
  { src: "work-pruning-1.jpg", label: "ビル前植栽の剪定", en: "Tree Pruning · Otsu", badge: "外構", href: "/services/gaikou" },
  { src: "work-pruning-2.jpg", label: "高所の枝の手入れ", en: "Pruning", badge: "外構", href: "/services/gaikou" },
  { src: "work-aircon.jpg", label: "天井埋込型ファンの分解", en: "A/C Deep Clean", badge: "設備", href: "/services/setsubi" },
  { src: "work-duct-dirty.jpg", label: "排気ファン内部の油汚れ", en: "Kitchen Duct", badge: "設備", href: "/services/setsubi" },
  { src: "room-twin.png", label: "ツインルームの客室清掃", en: "Guest Room", badge: "清掃", href: "/services/kyakushitsu" },
  { src: "tokuso-bath-after.jpg", label: "ユニットバス床の特掃（施工後）", en: "Bathroom Special Cleaning", badge: "特掃", href: "/services/kannai" },
  { src: "svc-gaiso.png", label: "建物外装のメンテナンス", en: "Exterior Care", badge: "外装", href: "/services/gaiso" },
];

export default function Works() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/work-rope-2.jpg" alt="ロープ作業による窓清掃" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link><span className="sep">/</span><span>WORKS</span>
          </nav>
          <div className="en reveal">OUR WORKS</div>
          <h1 className="reveal">施工事例</h1>
          <p className="lede reveal">
            ロープ一本で降りる高所の窓清掃、真夏の庭木剪定、分解して芯まで洗うエアコンとダクト。京都・大津の建物で、日々お納めしている<em>現場のほんとうの仕事</em>です。
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
            <h2 className="cta-title reveal">あなたの建物も、<br /><em>悠が整えます。</em></h2>
            <p className="cta-lede reveal">
              どんな業種でも、まずはご相談ください。状況をお聞かせいただければ、その場で概算をお出しします。
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="/contact" className="btn-primary"><span>フォームで依頼</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost"><span>{COMPANY.tel}</span><span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: ".25em" }}>TEL</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
