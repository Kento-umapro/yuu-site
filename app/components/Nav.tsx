import Link from "next/link";

const LINKS = [
  { href: "/#about", label: "理念" },
  { href: "/#services", label: "業務内容" },
  { href: "/#strengths", label: "強み" },
  { href: "/#works", label: "事例" },
  { href: "/#area", label: "対応エリア" },
];

export default function Nav() {
  return (
    <nav className="top on-dark" id="nav">
      <Link href="/" className="brand" data-cursor="hover">
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
    </nav>
  );
}
