"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ナビのスクロール検知 + reveal（IntersectionObserver）のみ。
export default function SiteBehaviors() {
  const pathname = usePathname();

  // ナビの scrolled 切り替え（一度だけ）
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // ページごと：reveal を IntersectionObserver で発火
  useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document
      .querySelectorAll(".reveal,.reveal-stagger")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // 代表写真：タッチ端末は「画面内に入ったら満面の笑み」に切替（PCはCSSの:hover）
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".page-hero.with-photo, .founder-photo"),
    );
    if (!targets.length) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) =>
          (e.target as HTMLElement).classList.toggle(
            "is-smiling",
            e.intersectionRatio >= 0.5,
          ),
        ),
      { threshold: [0, 0.5, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [pathname]);

  // ヒーローCTA：マグネット追従（PCのみ・reduced-motionは無効）
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const btns = Array.from(
      document.querySelectorAll<HTMLElement>(".hero-cta .btn-primary, .hero-cta .btn-ghost"),
    );
    if (!btns.length) return;
    const cleanups: Array<() => void> = [];
    btns.forEach((b) => {
      const onMove = (e: PointerEvent) => {
        const r = b.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        b.style.transform = `translate(${mx * 0.22}px, ${my * 0.4}px)`;
      };
      const onLeave = () => {
        b.style.transform = "";
      };
      b.addEventListener("pointermove", onMove);
      b.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        b.removeEventListener("pointermove", onMove);
        b.removeEventListener("pointerleave", onLeave);
        b.style.transform = "";
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
