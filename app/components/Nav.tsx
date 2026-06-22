"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#services", label: "業務内容" },
  { href: "/#about", label: "理念" },
  { href: "/#strengths", label: "強み" },
  { href: "/#works", label: "事例" },
  { href: "/#area", label: "対応エリア" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`top on-dark${open ? " menu-open" : ""}`} id="nav">
      <Link href="/" className="brand" data-cursor="hover" onClick={close}>
        <img className="brand-logo" src="/images/logo-yuu.png" alt="株式会社 悠 ロゴ" />
        <span className="brand-text">
          <span className="brand-name">株式会社 悠</span>
          <span className="brand-en">YOU&nbsp;·&nbsp;Total&nbsp;Building&nbsp;Care</span>
        </span>
      </Link>

      <ul>
        {LINKS.map((l) => (
          <li key={l.href}>
            <Link href={l.href} data-cursor="hover">{l.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/#contact" className="nav-cta" data-cursor="hover">
        <span>無料見積もり</span>
        <span className="arr">→</span>
      </Link>

      <button
        className="nav-burger"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-mobile${open ? " open" : ""}`}>
        <ul>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/#contact" className="nav-mobile-cta" onClick={close}>無料見積もり →</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
