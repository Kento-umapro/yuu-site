import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${COMPANY.nameEn} for a free estimate. Reach us by phone, LINE or form for total building maintenance in Kyoto, Otsu and Kusatsu.`,
  alternates: { canonical: "/en/contact", languages: { ja: "/contact", en: "/en/contact" } },
};

export default function ContactEn() {
  return (
    <>
      <header className="page-hero with-photo">
        <div className="page-hero-bg">
          <img src="/images/room-twin.png" alt="Guest-room cleaning on site" />
        </div>
        <div className="wrap page-hero-inner">
          <nav className="breadcrumb">
            <Link href="/en">HOME</Link><span className="sep">/</span><span>CONTACT</span>
          </nav>
          <div className="en reveal">CONTACT US</div>
          <h1 className="reveal">Contact</h1>
          <p className="lede reveal">
            For a free estimate or any question, reach us here. By the form below, phone or LINE — we reply <em>within 24 hours</em> as a rule.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <aside className="contact-side reveal">
              <h3>Feel free to reach us<br />by phone or LINE, too.</h3>
              <p>Our founder responds directly. Tell us your building type, the trades you need and the location, and we can give you a rough idea on the spot.</p>
              <div className="contact-info">
                <div className="info-row"><div className="k">TEL</div><div className="v big"><a href={`tel:${COMPANY.tel}`}>{COMPANY.tel}</a></div></div>
                <div className="info-row"><div className="k">EMAIL</div><div className="v"><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></div></div>
                <div className="info-row"><div className="k">LINE</div><div className="v">ID&nbsp;:&nbsp;{COMPANY.lineId}</div></div>
                <div className="info-row"><div className="k">HQ</div><div className="v">{COMPANY.zip}<br />{COMPANY.addressEn}</div></div>
                <div className="info-row" style={{ borderBottom: "none" }}><div className="k">HOURS</div><div className="v">{COMPANY.hoursEn}</div></div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
