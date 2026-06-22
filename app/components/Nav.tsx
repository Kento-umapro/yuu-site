"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TABS = [
  { href: "/", jp: "ホーム", en: "HOME" },
  { href: "/services", jp: "業務内容", en: "SERVICE" },
  { href: "/works", jp: "施工事例", en: "WORKS" },
  { href: "/about", jp: "会社概要", en: "ABOUT" },
  { href: "/contact", jp: "お問い合わせ", en: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ルート変更でメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
    <nav className={`nav${open ? " menu-open" : ""}`} id="nav">
      <Link href="/" className="brand" onClick={close}>
        <img className="brand-logo" src="/images/logo-yuu.png" alt="株式会社 悠 ロゴ" />
        <span className="brand-text">
          <span className="brand-name">株式会社 悠</span>
          <span className="brand-en">YOU&nbsp;·&nbsp;TOTAL&nbsp;BUILDING&nbsp;CARE</span>
        </span>
      </Link>

      <ul className="nav-tabs">
        {TABS.map((t) => (
          <li key={t.href}>
            <Link href={t.href} className={`nav-tab${isActive(t.href) ? " active" : ""}`}>
              <span className="jp">{t.jp}</span>
              <span className="en">{t.en}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="nav-cta">
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
    </nav>

    {/* スクリム＋ドロワーは nav の外（backdrop-filter の影響を受けないよう） */}
    <div
      className={`nav-scrim${open ? " open" : ""}`}
      onClick={close}
      aria-hidden="true"
    />

    <div className={`nav-mobile${open ? " open" : ""}`}>
      <div className="nav-mobile-label">MENU</div>
      <ul>
        {TABS.map((t, i) => (
          <li key={t.href}>
            <Link
              href={t.href}
              className={isActive(t.href) ? "active" : undefined}
              onClick={close}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              {t.jp}
              <span className="en">{t.en}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="nav-mobile-cta" onClick={close}>
        <span>無料見積もり</span>
        <span className="arr">→</span>
      </Link>
    </div>
    </>
  );
}
