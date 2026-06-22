import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${COMPANY.name}へのお問い合わせ・無料見積もり。電話・LINE・フォームから、京都・大津・草津の総合ビルメンテナンスをご相談ください。`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/room-twin.png" alt="客室清掃の現場" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/">HOME</Link><span className="sep">/</span><span>CONTACT</span>
          </nav>
          <div className="en reveal">CONTACT US</div>
          <h1 className="reveal">お問い合わせ</h1>
          <p className="lede reveal">
            無料見積もりのご依頼、ご相談はこちらから。下記フォーム、またはお電話・LINEにて、原則 <em>24時間以内</em> にご返信いたします。
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <aside className="contact-side reveal">
              <h3>電話・LINEでのご相談も<br />お気軽にどうぞ。</h3>
              <p>代表が直接対応します。建物の種類やご希望の業種、立地を教えていただければ、ざっくりの見立てはその場でお伝えできます。</p>
              <div className="contact-info">
                <div className="info-row"><div className="k">TEL</div><div className="v big"><a href={`tel:${COMPANY.tel}`}>{COMPANY.tel}</a></div></div>
                <div className="info-row"><div className="k">EMAIL</div><div className="v"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
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
