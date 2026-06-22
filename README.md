# 株式会社 悠 — コーポレートサイト

滋賀・大津を拠点とする総合ビルメンテナンス「株式会社 悠（YOU CO., LTD.）」のコーポレートサイト。

Next.js（App Router / TypeScript / SSG）で構築した、明るいゴシック基調のマルチページ構成です。

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（ヒーロー動画・会社紹介・業務プレビュー・強み・事例・CTA） |
| `/about` | 会社概要（理念・会社情報・対応エリア） |
| `/services` | 業務内容（5分野11業務・ご依頼の流れ） |
| `/services/[slug]` | 各業種の詳細（5ページ・SSG） |
| `/works` | 施工事例ギャラリー |
| `/contact` | お問い合わせ（連絡先・フォーム） |

## 技術スタック

- [Next.js 15](https://nextjs.org/)（App Router / SSG）
- React 19 / TypeScript
- 素のCSS（`app/globals.css` のデザインシステム）

## 開発

```bash
npm install      # 依存関係のインストール
npm run dev      # 開発サーバー（http://localhost:3000）
npm run build    # 本番ビルド（静的書き出し）
npm run start    # 本番サーバー
npm run lint     # ESLint
npm run typecheck # 型チェック
```

Node.js 20 以上が必要です。

## コンテンツの編集

- 会社情報：`lib/company.ts`
- 業務内容（5分野）：`lib/services.ts`
- 画像：`public/images/` / ヒーロー動画：`public/videos/hero.mp4`

## お問い合わせフォームについて

`app/components/ContactForm.tsx` は現在デモ実装（送信は行われません）。
本番では送信先（メール送信API・フォームサービス等）の接続が必要です。
