import Link from "next/link";
import Arrow from "./components/Arrow";
import ContactForm from "./components/ContactForm";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/company";

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
      <header className="hero" id="top">
        <div className="hero-photo" />
        <div className="hero-floor" />
        <div className="hero-glow" />
        <div className="hero-glyph3d" id="heroGlyph">悠</div>
        <div className="hero-inner">
          <div className="hero-eyebrow eyebrow reveal">TOTAL BUILDING CARE / SHIGA · KYOTO</div>
          <h1 className="hero-title">
            <span className="mask-line"><span className="l1">客室から、屋上まで。</span></span>
            <span className="mask-line"><span className="l2">建物まるごと、整える。</span></span>
          </h1>
          <p className="hero-lede reveal">
            株式会社 悠（YOU）は、ホテル清掃を起点に、窓・カーペット・エアコン・庭木・設備・防水まで。建物まわりの
            <strong style={{ color: "#fff" }}>11の専門業務</strong>を、一次受けでまるごと請け負う、滋賀発の総合ビルメンテナンス。
          </p>
          <div className="hero-meta reveal">
            <div className="hero-fact"><div className="k">AREA</div><div className="v">京都 / 大津 / 草津</div></div>
            <div className="hero-fact"><div className="k">SERVICE</div><div className="v">5分野 / 11業務</div></div>
            <div className="hero-fact"><div className="k">CONTRACT</div><div className="v">一次受け 直接契約</div></div>
            <div className="hero-fact"><div className="k">QUOTE</div><div className="v">無料・即日対応</div></div>
          </div>
          <div className="hero-cta reveal">
            <Link href="#services" className="btn-primary" data-cursor="hover"><span>業務内容を見る</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost on-light" data-cursor="hover">
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

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">01 / 業務内容</div>
            <div>
              <h2 className="section-title reveal">建物の困りごとは、<br /><em>ぜんぶ、悠へ。</em></h2>
              <p className="section-lede reveal">
                客室清掃から高所のロープ作業、エアコン・ダクトの分解洗浄、庭木の剪定や屋上防水まで。11の専門業務を<strong style={{ color: "#fff" }}>5つの分野</strong>に整理しました。専門会社を何社も探す手間なく、建物まわりをまるごとワンストップでお任せいただけます。各分野の詳細は、カードをクリックしてご覧ください。
              </p>
            </div>
          </div>
          <div className="svc-grid reveal-stagger">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card tilt" data-cursor="hover">
                <div className="svc-kanji">{s.kanji}</div>
                <div className="tilt-layer">
                  <div className="svc-ix">{pad(i + 1)} / {pad(SERVICES.length)}</div>
                  <div className="svc-name">{s.name}</div>
                  <div className="svc-en">{s.en}</div>
                  <div className="svc-desc">{s.tagline}</div>
                  <div className="svc-more">詳しく見る <span className="arr">→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">02 / 理念</div>
            <div><h2 className="section-title reveal">独立した理由は、ひとつ。<br />自分の色を、出すため。</h2></div>
          </div>
          <div className="manifesto">
            <div className="founder-photo reveal">
              <div className="founder-corner">FOUNDER</div>
              <div className="founder-tag">代表取締役<span className="name">{COMPANY.representative}</span></div>
            </div>
            <div>
              <p className="manifesto-body reveal">
                十年、清掃とビルメンテナンスの現場に立ってきました。<br />会社員のままでは、出せない色がある。<br />
                <span className="lead">建物を使う人へ。その先のお客様へ。</span><br />整った空間を、まっすぐに届けたかった。
              </p>
              <div className="signature reveal">— 株式会社 悠 代表取締役<span className="name">大 西 悠 佑</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section id="strengths" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">03 / 強み</div>
            <div>
              <h2 className="section-title reveal">大手と比べて、かなり、安い。<br />その理由は、構造にあります。</h2>
              <p className="section-lede reveal">
                中間マージンを挟まない一次受け契約、十年のオペレーション経験、そして「決めた時間に、決めた状態で納める」という当たり前。悠の強みは、足し算ではなく、引き算からできています。
              </p>
            </div>
          </div>
          <div className="strengths-grid reveal-stagger">
            <div className="strength">
              <div className="strength-num">— 001</div><div className="strength-jp">適 正 価 格</div>
              <h3 className="strength-title"><span className="pop">一次受け</span>直接、段取り。</h3>
              <p className="strength-body">二次・三次と受け渡されるたび、料金は積み上がります。悠は一次受けから現場までを自社で組み立てるため、無駄なマージンを削ぎ落とした価格でご提案できます。</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 002</div><div className="strength-jp">一 括 対 応</div>
              <h3 className="strength-title"><span className="pop">全11業種</span>を、まとめて。</h3>
              <p className="strength-body">清掃・高所作業・設備・剪定・防水まで自社で対応。業種ごとに別の会社を手配する手間と、窓口の煩雑さをなくし、建物の困りごとを一社に集約できます。</p>
            </div>
            <div className="strength">
              <div className="strength-num">— 003</div><div className="strength-jp">十 年 実 績</div>
              <h3 className="strength-title"><span className="pop">10年</span>の現場経験。</h3>
              <p className="strength-body">代表自らが清掃とビルメンテナンスの現場で十年。トラブル時の判断と、繁忙期の段取りは、現場で磨いた感覚です。だから、品質も納期もブレません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="works" id="works">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">04 / 施工事例</div>
            <div>
              <h2 className="section-title reveal">現場の、ほんとうの仕事。</h2>
              <p className="section-lede reveal">
                ロープ一本で降りる高所の窓清掃、真夏の庭木剪定、分解して芯まで洗うエアコンとダクト。京都・大津の建物で、日々お納めしている実際の現場です。
              </p>
            </div>
          </div>
          <div className="works-grid">
            <div className="work-col">
              <Link href="/services/gaiso" className="work-card big reveal" data-cursor="hover">
                <img src="/images/work-rope-2.jpg" alt="ロープ作業による窓清掃" loading="lazy" />
                <div className="meta"><div className="label">窓清掃 / ロープ作業<small>Rope Access · Kyoto</small></div><span className="badge">高所</span></div>
              </Link>
            </div>
            <div className="work-col">
              <Link href="/services/gaikou" className="work-card wide reveal" data-cursor="hover">
                <img src="/images/work-pruning-1.jpg" alt="庭木の剪定" loading="lazy" />
                <div className="meta"><div className="label">庭木の剪定<small>Tree Pruning · Otsu</small></div><span className="badge">外構</span></div>
              </Link>
              <Link href="/services/setsubi" className="work-card wide reveal" data-cursor="hover">
                <img src="/images/work-aircon.jpg" alt="エアコン分解洗浄" loading="lazy" />
                <div className="meta"><div className="label">エアコン分解洗浄<small>A/C Deep Clean</small></div><span className="badge">設備</span></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">05 / 価格の理由</div>
            <div><h2 className="section-title reveal">なぜ、安く<br />提供できるのか。</h2><p className="section-lede reveal">業界の慣習である多重請負。悠は、その構造そのものを変えています。</p></div>
          </div>
          <div className="pricing-flow">
            <div className="flow-card bad reveal">
              <div className="flow-label">— 一般的な構造</div><h3 className="flow-title">多重請負</h3>
              <div className="flow-chain">
                <div className="flow-link"><span>発注者</span><span className="pct">100%</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>一次請け</span><span className="pct">−15%</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>二次請け</span><span className="pct">−10%</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>三次請け</span><span className="pct">−10%</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>現場（四次）</span><span className="pct">≒ 65%</span></div>
              </div>
              <p className="price-callout">中間に立つ会社が増えるほど、現場に渡る予算は減り、発注者の支払いは膨らみます。</p>
            </div>
            <div className="flow-card good reveal">
              <div className="flow-label">— 悠 の 構 造</div><h3 className="flow-title">一次受け直接</h3>
              <div className="flow-chain">
                <div className="flow-link"><span>発注者</span><span className="pct">100%</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>株式会社 悠</span><span className="pct">直接</span></div><div className="flow-arrow">↓</div>
                <div className="flow-link"><span>悠の現場スタッフ</span><span className="pct">≒ 95%</span></div>
              </div>
              <p className="price-callout">中間マージンを挟まないから、<strong>同じ品質を、より低価格で。</strong> 浮いた予算は、品質と人員に還元します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">06 / 流れ</div>
            <div><h2 className="section-title reveal">お問い合わせから、<br />初回作業まで。</h2><p className="section-lede reveal">最短で、お問い合わせから一週間で初回稼働が可能です。</p></div>
          </div>
          <div className="process-grid reveal-stagger">
            <div className="step"><div className="step-num">01</div><div className="step-eyebrow">DAY 1</div><div className="step-title">お問い合わせ</div><div className="step-body">フォーム・お電話・LINEから、建物の種類やご希望の業種・時間帯などをお知らせください。</div></div>
            <div className="step"><div className="step-num">02</div><div className="step-eyebrow">DAY 2–3</div><div className="step-title">現地確認</div><div className="step-body">代表自ら現場へお伺いし、状況と運用フローを確認。既存の体制もそのまま引き継げます。</div></div>
            <div className="step"><div className="step-num">03</div><div className="step-eyebrow">DAY 4–5</div><div className="step-title">お見積もり</div><div className="step-body">規模・頻度・難易度から適正価格でお見積もり。提示後の追加請求はありません。</div></div>
            <div className="step"><div className="step-num">04</div><div className="step-eyebrow">DAY 7〜</div><div className="step-title">初回稼働</div><div className="step-body">ご契約後、最短一週間で稼働開始。決めた時刻に、決めた状態で、必ず納めます。</div></div>
          </div>
        </div>
      </section>

      {/* AREA */}
      <section className="area" id="area">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">07 / 対応エリア</div>
            <div><h2 className="section-title reveal">京都・大津・草津、<br /><em>毎朝、走れる距離。</em></h2><p className="section-lede reveal">本社を滋賀県大津市に置き、車で30分圏の建物を中心に対応。エリア内であれば、当日の急なトラブルにも代表が直接駆けつけます。</p></div>
          </div>
          <div className="area-grid">
            <div className="area-map reveal">
              <div className="area-pin" style={{ left: "32%", top: "46%" }}><div className="dot" /><div className="lbl">京都市</div></div>
              <div className="area-pin" style={{ left: "62%", top: "58%" }}><div className="dot" /><div className="lbl">大津市 / 本社</div></div>
              <div className="area-pin" style={{ left: "76%", top: "72%" }}><div className="dot" /><div className="lbl">草津市</div></div>
            </div>
            <div className="reveal-stagger">
              <div className="area-row"><div className="ix">— 001</div><div className="city">京 都 市<small>KYOTO CITY</small></div><div className="status">対応中</div></div>
              <div className="area-row"><div className="ix">— 002</div><div className="city">大 津 市<small>OTSU CITY · HQ</small></div><div className="status">対応中</div></div>
              <div className="area-row"><div className="ix">— 003</div><div className="city">草 津 市<small>KUSATSU CITY</small></div><div className="status">対応中</div></div>
              <div className="area-row" style={{ borderBottom: "none" }}><div className="ix">— 004</div><div className="city" style={{ color: "var(--muted)" }}>その他エリア<small>OTHER AREAS</small></div><div className="status" style={{ color: "var(--muted)" }}>ご相談</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="cta">
        <div className="bg-glyph" id="ctaGlyph">悠</div>
        <div className="cta-inner">
          <div>
            <div className="eyebrow reveal">FREE ESTIMATE</div>
            <h2 className="cta-title"><span className="mask-line"><span>「これ、お願い</span></span><span className="mask-line"><span><em>できますか？」</em></span></span></h2>
            <p style={{ fontFamily: "var(--serif)", fontSize: 16, lineHeight: 2, color: "var(--paper-3)", marginTop: 34, maxWidth: "46ch" }} className="reveal">
              どんな業種でも、まずはご相談ください。状況をお聞かせいただければ、その場で概算をお出しします。見積もりは無料、しつこい営業は一切ありません。
            </p>
          </div>
          <div className="cta-stack reveal">
            <Link href="#contact" className="btn-primary" data-cursor="hover"><span>フォームで依頼</span><Arrow /></Link>
            <a href={`tel:${COMPANY.tel}`} className="btn-ghost on-light" data-cursor="hover"><span>{COMPANY.tel}</span><span style={telStyle}>TEL</span></a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="section-head">
            <div className="section-num reveal">08 / お問い合わせ</div>
            <div><h2 className="section-title reveal">無料見積もり<br /><em>依頼フォーム。</em></h2><p className="section-lede reveal">下記フォームより、必要事項をご記入ください。原則 24時間以内 にご返信いたします。</p></div>
          </div>
          <div className="contact-grid">
            <aside className="contact-side reveal">
              <h3>電話・LINEでのご相談も<br />お気軽にどうぞ。</h3>
              <p>代表が直接対応します。建物の種類やご希望の業種、立地を教えていただければ、ざっくりの見立てはその場でお伝えできます。</p>
              <div className="contact-info">
                <div className="info-row"><div className="k">TEL</div><div className="v big">{COMPANY.tel}</div></div>
                <div className="info-row"><div className="k">EMAIL</div><div className="v">{COMPANY.email}</div></div>
                <div className="info-row"><div className="k">LINE</div><div className="v">ID&nbsp;:&nbsp;{COMPANY.lineId}</div></div>
                <div className="info-row"><div className="k">HQ</div><div className="v">{COMPANY.zip}<br />{COMPANY.address}</div></div>
                <div className="info-row" style={{ borderBottom: "none" }}><div className="k">HOURS</div><div className="v">{COMPANY.hours}</div></div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
