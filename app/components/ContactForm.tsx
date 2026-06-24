"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const KINDS_JA = ["客室清掃", "窓清掃 / 高所", "エアコン洗浄", "庭木の剪定", "ダクト・防水", "その他"];
const KINDS_EN = ["Guest-room cleaning", "Windows / height", "A/C cleaning", "Tree pruning", "Ducts / waterproofing", "Other"];

export default function ContactForm() {
  const pathname = usePathname();
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const [kind, setKind] = useState("");
  const KINDS = isEn ? KINDS_EN : KINDS_JA;

  const t = {
    building: isEn ? "Building / company name" : "建物名・会社名",
    buildingPh: isEn ? "e.g. ○○ Building / ○○ Hotel" : "例：◯◯ビル / ◯◯ホテル",
    name: isEn ? "Contact name" : "ご担当者名",
    namePh: isEn ? "Taro Yamada" : "山田 太郎",
    tel: isEn ? "Phone" : "電話番号",
    email: isEn ? "Email" : "メールアドレス",
    req: isEn ? "required" : "必須",
    kind: isEn ? "Service of interest" : "ご希望の業種",
    msg: isEn ? "Your message / current issue" : "ご相談内容 / 現状の課題",
    msgPh: isEn
      ? "e.g. We're considering facade window cleaning and rooftop waterproofing for a 5-story building."
      : "例：5階建てビルの外壁窓清掃と、屋上の防水工事を検討中です。",
    note: isEn
      ? "Your details are used only for the estimate and our reply."
      : "送信いただいた内容は、お見積もりとご返信以外には使用いたしません。",
    submit: isEn ? "Send a free estimate request" : "無料見積もりを送信",
    alert: isEn
      ? "Thank you for your inquiry.\n(This is a demo environment, so nothing is actually sent.)"
      : "お問い合わせありがとうございます。\n（デモ環境のため送信は行われません）",
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 送信先（メール / フォームサービス / API）を接続する
    alert(t.alert);
  };

  return (
    <form className="inquiry reveal" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label>{t.building} <span className="req">{t.req}</span></label>
          <input type="text" name="building" required placeholder={t.buildingPh} />
        </div>
        <div className="field">
          <label>{t.name} <span className="req">{t.req}</span></label>
          <input type="text" name="name" required placeholder={t.namePh} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>{t.tel} <span className="req">{t.req}</span></label>
          <input type="tel" name="tel" required placeholder="080-0000-0000" />
        </div>
        <div className="field">
          <label>{t.email} <span className="req">{t.req}</span></label>
          <input type="email" name="email" required placeholder="contact@example.com" />
        </div>
      </div>
      <div className="field">
        <label>{t.kind}</label>
        <div className="radio-grid">
          {KINDS.map((k) => (
            <label key={k} className={kind === k ? "active" : ""}>
              <input
                type="radio"
                name="kind"
                value={k}
                checked={kind === k}
                onChange={() => setKind(k)}
              />
              {k}
            </label>
          ))}
        </div>
      </div>
      <div className="field">
        <label>{t.msg}</label>
        <textarea name="message" placeholder={t.msgPh} />
      </div>
      <div className="submit-row">
        <p className="note">{t.note}</p>
        <button type="submit" className="submit-btn" data-cursor="hover">
          <span>{t.submit}</span>
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
            <path d="M1 6H21M21 6L16 1M21 6L16 11" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </form>
  );
}
