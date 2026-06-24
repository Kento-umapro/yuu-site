"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/company";

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const L = (href: string) => (isEn ? "/en" + (href === "/" ? "" : href) : href);

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="flogo">
            <img src="/images/logo-yuu.png" alt="株式会社 悠" />
          </div>
          <p>{isEn ? COMPANY.descriptionEn : COMPANY.description}</p>
        </div>
        <div className="footer-col">
          <h4>{isEn ? "Services" : "業務内容"}</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={L(`/services/${s.slug}`)}>
                  {isEn ? s.en : s.name.replace(/（.*）/, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONTACT</h4>
          <ul>
            <li><a href={`tel:${COMPANY.tel}`}>{COMPANY.tel}</a></li>
            <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><Link href={L("/contact")}>LINE / {COMPANY.lineId}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>OFFICE</h4>
          <ul>
            {isEn ? (
              <>
                <li><span>{COMPANY.addressEn}</span></li>
                <li><span>{COMPANY.zip}</span></li>
                <li><span>{COMPANY.hoursEn}</span></li>
              </>
            ) : (
              <>
                <li><span>{COMPANY.zip}</span></li>
                <li><span>滋賀県大津市</span></li>
                <li><span>衣川 1丁目40-23</span></li>
                <li><span>{COMPANY.hours}</span></li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {COMPANY.nameEn}</span>
        <span>{COMPANY.tagline}</span>
      </div>
    </footer>
  );
}
