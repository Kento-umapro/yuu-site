"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 元のバニラJS（cursor / nav scroll / reveal / parallax / tilt）をReactへ移植。
export default function SiteBehaviors() {
  const pathname = usePathname();

  // 一度だけ：カーソル追従・ナビのscrolled・パララックス
  useEffect(() => {
    let raf = 0;

    // cursor
    const dot = document.getElementById("cursor");
    let x = innerWidth / 2,
      y = innerHeight / 2,
      tx = x,
      ty = y;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    addEventListener("mousemove", onMove);
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element &&
      t.closest('[data-cursor="hover"],a,button,input,textarea,select');
    const onOver = (e: MouseEvent) => {
      if (dot && isInteractive(e.target)) dot.classList.add("hover");
    };
    const onOut = (e: MouseEvent) => {
      if (dot && isInteractive(e.target)) dot.classList.remove("hover");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    // nav scroll
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", scrollY > 40);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const loop = () => {
      // cursor lerp
      if (dot) {
        x += (tx - x) * 0.18;
        y += (ty - y) * 0.18;
        dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      }
      // parallax glyphs
      const sy = scrollY;
      const heroGlyph = document.getElementById("heroGlyph");
      if (heroGlyph)
        heroGlyph.style.transform = `translateY(calc(-50% + ${sy * 0.28}px))`;
      const dGlyph = document.getElementById("dGlyph");
      if (dGlyph) dGlyph.style.transform = `translateY(calc(-50% + ${sy * 0.22}px))`;
      const ctaGlyph = document.getElementById("ctaGlyph");
      if (ctaGlyph && ctaGlyph.parentElement) {
        const r = ctaGlyph.parentElement.getBoundingClientRect();
        const p = (innerHeight - r.top) / (innerHeight + r.height);
        ctaGlyph.style.transform = `translateY(calc(-50% + ${(p - 0.5) * -110}px))`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  // ページごと：reveal の IntersectionObserver と tilt の付与
  useEffect(() => {
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
      .querySelectorAll(".reveal,.reveal-stagger,.mask-line")
      .forEach((el) => io.observe(el));

    // tilt
    const touch = matchMedia("(hover:none)").matches;
    const cleanups: Array<() => void> = [];
    if (!touch) {
      const attach = (sel: string, deg: number, tz: number) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((card) => {
          const move = (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `rotateY(${px * deg}deg) rotateX(${-py * deg}deg) translateZ(${tz}px)`;
          };
          const leave = () => {
            card.style.transform = "";
          };
          card.addEventListener("mousemove", move);
          card.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", leave);
          });
        });
      };
      attach(".tilt", 12, 8);
      attach(".feat-card", 8, 6);
    }

    return () => {
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return <div className="cursor-dot" id="cursor" />;
}
