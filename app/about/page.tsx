import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/Arrow";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "会社概要",
  description: `${COMPANY.name}の会社概要・経営理念。${COMPANY.address}を拠点に、京都・大津・草津で総合ビルメンテナンスを手がけています。`,
  alternates: { canonical: "/about" },
};

const INFO: { en: string; jp: string; td: React.ReactNode }[] = [
  { en: "COMPANY", jp: "商号", td: <>{COMPANY.name}（{COMPANY.nameEn}）</> },
  { en: "REPRESENTATIVE", jp: "代表者", td: <>代表取締役　{COMPANY.representative}</> },
  { en: "ADDRESS", jp: "所在地", td: <>{COMPANY.zip}<br />{COMPANY.address}</> },
  { en: "TEL", jp: "電話番号", td: <a href={`tel:${COMPANY.tel}`}>{COMPANY.tel}</a> },
  { en: "EMAIL", jp: "メール", td: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> },
  { en: "LINE", jp: "LINE ID", td: <>{COMPANY.lineId}</> },
  { en: "HOURS", jp: "営業時間", td: <>{COMPANY.hours}</> },
  { en: "AREA", jp: "対応エリア", td: <>{COMPANY.areas}（車で30分圏を中心に対応）</> },
  {
    en: "BUSINESS",
    jp: "事業内容",
    td: <>総合ビルメンテナンス<br />客室清掃 / 館内・共用部清掃 / 高所・建物外装 / 設備メンテナンス / 外構・植栽管理（全5分野11業務）</>,
  },
];

export default function About() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/founder-onishi.jpg" alt="代表取締役 大西 悠佑" style={{ objectPosition: "center 28%" }} />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link><span className="sep">/</span><span>ABOUT</span>
          </nav>
          <div className="en reveal">ABOUT US</div>
          <h1 className="reveal">会社概要</h1>
          <p className="lede reveal">
            滋賀・大津を拠点に、ホテル清掃を起点として建物まわりをまるごと支える総合ビルメンテナンス。私たちの理念と会社情報をご紹介します。
          </p>
        </div>
      </header>

      {/* 理念 */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">01 / 理念</div>
            <div><h2 className="section-title reveal">独立した理由は、ひとつ。<br />自分の色を、出すため。</h2></div>
          </div>
          <div className="manifesto">
            <div className="founder-photo reveal">
              <div className="founder-corner">FOUNDER</div>
              <div className="founder-tag">代表取締役<span className="name">{COMPANY.representative}</span></div>
            </div>
            <div>
              <p className="manifesto-body reveal">
                十年、ホテルの全般清掃の現場に立ってきました。<br />会社員のままでは、出せない色がある。<br />
                <span className="lead">建物を使う人へ。その先のお客様へ。</span><br />整った空間を、まっすぐに届けたかった。
              </p>
              <div className="signature reveal">— 株式会社 悠 代表取締役<span className="name">大 西 悠 佑</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社情報 */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">02 / 会社情報</div>
            <div><h2 className="section-title reveal">会社情報</h2></div>
          </div>
          <div className="info-table reveal">
            {INFO.map((r) => (
              <div className="row" key={r.en}>
                <div className="th">{r.en}<span className="jp">{r.jp}</span></div>
                <div className="td">{r.td}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">03 / 対応エリア</div>
            <div>
              <h2 className="section-title reveal">京都・大津・草津、<br /><em>毎朝、走れる距離。</em></h2>
              <p className="section-lede reveal">
                本社を滋賀県大津市に置き、車で30分圏の建物を中心に対応。エリア内であれば、当日の急なトラブルにも代表が直接駆けつけます。
              </p>
            </div>
          </div>
          <div className="area-grid">
            <div className="area-map reveal">
              <iframe
                className="area-map-frame"
                title="対応エリア（京都市・大津市・草津市）"
                src="https://www.google.com/maps?q=%E6%BB%8B%E8%B3%80%E7%9C%8C%E5%A4%A7%E6%B4%A5%E5%B8%82%E8%A1%A3%E5%B7%9D1%E4%B8%81%E7%9B%AE40-23&z=10&hl=ja&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="reveal-stagger">
              <div className="area-row"><div className="ix">— 001</div><div className="city">京 都 市<small>KYOTO CITY</small></div><div className="status">対応中</div></div>
              <div className="area-row"><div className="ix">— 002</div><div className="city">大 津 市<small>OTSU CITY · HQ</small></div><div className="status">対応中</div></div>
              <div className="area-row"><div className="ix">— 003</div><div className="city">草 津 市<small>KUSATSU CITY</small></div><div className="status">対応中</div></div>
              <div className="area-row" style={{ borderBottom: "none" }}><div className="ix">— 004</div><div className="city" style={{ color: "var(--ink-3)" }}>その他エリア<small>OTHER AREAS</small></div><div className="status" style={{ color: "var(--ink-3)", borderColor: "var(--line)", background: "transparent" }}>ご相談</div></div>
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
            <h2 className="cta-title reveal">まずは、<em>無料で見積もり。</em></h2>
            <p className="cta-lede reveal">
              状況をお聞かせいただければ、その場で概算をお出しします。見積もりは無料、しつこい営業は一切ありません。
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
