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

  return null;
}
