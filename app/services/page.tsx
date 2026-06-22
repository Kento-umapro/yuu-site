import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "../components/Arrow";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "業務内容",
  description: `${COMPANY.name}の業務内容。客室清掃・館内清掃・高所/外装・設備メンテナンス・外構/植栽の5分野11業務をワンストップで。`,
  alternates: { canonical: "/services" },
};

const pad = (n: number) => String(n).padStart(2, "0");

const PROCESS = [
  { num: "01", day: "DAY 1", title: "お問い合わせ", body: "フォーム・お電話・LINEから、建物の種類やご希望の業種・時間帯などをお知らせください。" },
  { num: "02", day: "DAY 2–3", title: "現地確認", body: "代表自ら現場へお伺いし、状況と運用フローを確認。既存の体制もそのまま引き継げます。" },
  { num: "03", day: "DAY 4–5", title: "お見積もり", body: "規模・頻度・難易度から適正価格でお見積もり。提示後の追加請求はありません。" },
  { num: "04", day: "DAY 7〜", title: "初回稼働", body: "ご契約後、最短一週間で稼働開始。決めた時刻に、決めた状態で、必ず納めます。" },
];

export default function Services() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/svc-setsubi.png" alt="設備メンテナンスの現場" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link><span className="sep">/</span><span>SERVICE</span>
          </nav>
          <div className="en reveal">OUR SERVICE</div>
          <h1 className="reveal">業務内容</h1>
          <p className="lede reveal">
            客室清掃から高所のロープ作業、エアコン・ダクトの分解洗浄、庭木の剪定や屋上防水まで。11の専門業務を<em>5つの分野</em>に整理しました。建物まわりをまるごとワンストップでお任せいただけます。
          </p>
        </div>
      </header>

      {/* サービス一覧 */}
      <section className="section">
        <div className="wrap">
          <div className="svc-grid reveal-stagger">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
                <div className="svc-kanji">{s.kanji}</div>
                <div className="svc-ix">{pad(i + 1)} / {pad(SERVICES.length)} · {s.cat}</div>
                <div className="svc-name">{s.name}</div>
                <div className="svc-en">{s.en}</div>
                <div className="svc-desc">{s.tagline}</div>
                <div className="svc-more">詳しく見る <span className="arr">→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">FLOW</div>
            <div>
              <h2 className="section-title reveal">お問い合わせから、<br />初回作業まで。</h2>
              <p className="section-lede reveal">最短で、お問い合わせから一週間で初回稼働が可能です。</p>
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
            <h2 className="cta-title reveal">「これ、お願い<br /><em>できますか？」</em></h2>
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
