"use client";

import { useState } from "react";

const KINDS = [
  "客室清掃",
  "窓清掃 / 高所",
  "エアコン洗浄",
  "庭木の剪定",
  "ダクト・防水",
  "その他",
];

export default function ContactForm() {
  const [kind, setKind] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 送信先（メール / フォームサービス / API）を接続する
    alert("お問い合わせありがとうございます。\n（デモ環境のため送信は行われません）");
  };

  return (
    <form className="inquiry reveal" onSubmit={onSubmit}>
      <div className="field-row">
        <div className="field">
          <label>建物名・会社名 <span className="req">必須</span></label>
          <input type="text" name="building" required placeholder="例：◯◯ビル / ◯◯ホテル" />
        </div>
        <div className="field">
          <label>ご担当者名 <span className="req">必須</span></label>
          <input type="text" name="name" required placeholder="山田 太郎" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>電話番号 <span className="req">必須</span></label>
          <input type="tel" name="tel" required placeholder="080-0000-0000" />
        </div>
        <div className="field">
          <label>メールアドレス <span className="req">必須</span></label>
          <input type="email" name="email" required placeholder="contact@example.com" />
        </div>
      </div>
      <div className="field">
        <label>ご希望の業種</label>
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
        <label>ご相談内容 / 現状の課題</label>
        <textarea
          name="message"
          placeholder="例：5階建てビルの外壁窓清掃と、屋上の防水工事を検討中です。"
        />
      </div>
      <div className="submit-row">
        <p className="note">送信いただいた内容は、お見積もりとご返信以外には使用いたしません。</p>
        <button type="submit" className="submit-btn" data-cursor="hover">
          <span>無料見積もりを送信</span>
          <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
            <path d="M1 6H21M21 6L16 1M21 6L16 11" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
    </form>
  );
}
