"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, projects, services, steps, studio, testimonials, videos } from "@/lib/data";
import { asset } from "@/lib/base-path";

/* ---------- utilitários ---------- */

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Progresso (0 a 1) do elemento atravessando a tela. */
function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight;
        setP(Math.min(1, Math.max(0, (window.innerHeight - r.top) / total)));
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return [ref, p] as const;
}

/* ---------- cabeçalho: some ao descer, volta ao subir ---------- */
export function Header() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 30);
      setHidden(y > 400 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${hidden && !open ? "-translate-y-full" : ""} ${solid || open ? "border-b border-line bg-paper/90 backdrop-blur" : ""}`}>
      <div className="mx-auto grid h-16 max-w-[calc(1160px+2rem)] grid-cols-[1fr_auto_1fr] items-center px-4 md:max-w-[calc(1160px+4rem)] md:px-8">
        <nav className="hidden gap-5 lg:flex" aria-label="Menu principal">
          {nav.slice(0, 4).map((n) => (
            <a key={n.href} href={n.href} className="group relative text-[0.75rem] font-semibold uppercase tracking-[0.06em]">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <button type="button" className="text-left text-[0.8rem] font-semibold uppercase lg:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {open ? "Fechar" : "Menu"}
        </button>
        <a href="#inicio" className="text-[1.05rem] font-bold uppercase tracking-[-0.03em]">
          Mariana Cabral
        </a>
        <a href={studio.budgetForm} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-self-end gap-3 text-right text-[0.68rem] font-semibold uppercase leading-tight">
          <span className="max-sm:hidden">
            Pedir
            <br />
            orçamento
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-paper">↗</span>
        </a>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-4 pb-6 lg:hidden" aria-label="Menu principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-3.5 text-[1.3rem] font-medium uppercase tracking-[-0.02em]">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------- topo: nome gigante + foto que cresce ao rolar ---------- */
export function HeroName() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const k = reduced() ? 1 : Math.min(1, y / 520); // a foto cresce nos primeiros 520px de rolagem
  return (
    <div className="relative">
      <p className="t-mega relative z-10 text-center">Mariana Cabral</p>
      <div className="relative z-0 mx-auto -mt-[4vw] overflow-hidden" style={{ width: `${46 + k * 54}%`, transition: "width 80ms linear" }}>
        <div className="relative aspect-[1536/864]">
          <Image src={asset("/img/sjb-sala.webp")} alt="Sala com pé-direito duplo, projeto de Mariana Cabral" fill priority quality={90} sizes="(min-width: 1200px) 1160px, 100vw" className="object-cover" style={{ transform: `scale(${1.15 - k * 0.15})` }} />
        </div>
      </div>
    </div>
  );
}

/* ---------- categorias: a foto em foco abre (acordeão no hover) ---------- */
export function HoverStrip({ items }: { items: { label: string; image: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex h-[22rem] gap-2 max-md:h-auto max-md:flex-col md:h-[26rem]">
      {items.map((it, i) => (
        <button
          key={it.label}
          type="button"
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
          onClick={() => setActive(i)}
          className="relative overflow-hidden text-left transition-[flex-grow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] max-md:h-48"
          style={{ flexGrow: active === i ? 3 : 1, flexBasis: 0 }}
        >
          <Image src={asset(it.image)} alt="" fill quality={90} sizes="(min-width: 768px) 580px, 100vw" className={`object-cover transition-transform duration-1000 ${active === i ? "scale-100" : "scale-110"}`} />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <span className="label absolute bottom-4 left-4 text-paper">{it.label}</span>
        </button>
      ))}
    </div>
  );
}

/* ---------- parallax simples ---------- */
export function Parallax({ src, alt, className = "", strength = 80, sizes = "100vw" }: { src: string; alt: string; className?: string; strength?: number; sizes?: string }) {
  const [ref, p] = useScrollProgress<HTMLDivElement>();
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-x-0 -inset-y-[12%]" style={{ transform: `translateY(${(p - 0.5) * -strength}px)` }}>
        <Image src={asset(src)} alt={alt} fill quality={90} sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}

/* ---------- texto que acende palavra por palavra ao rolar ---------- */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const [ref, p] = useScrollProgress<HTMLParagraphElement>();
  const words = text.split(" ");
  const lit = Math.round(Math.min(1, Math.max(0, (p - 0.18) / 0.45)) * words.length);
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="transition-colors duration-300" style={{ color: i < lit ? "var(--color-ink)" : "#b3a999" }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

/* ---------- vitrine de projetos ---------- */
export function ProjectShowcase() {
  const [i, setI] = useState(0);
  const [img, setImg] = useState(0);
  const p = projects[i];
  const pick = (k: number) => {
    setI(k);
    setImg(0);
  };
  return (
    <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">
      <div>
        <div className="group relative aspect-[16/11] overflow-hidden bg-sand">
          {projects.map((pr, k) =>
            pr.images.map((src, j) => (
              <div key={src + k} className={`absolute inset-0 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${k === i && j === img ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}>
                <Image src={asset(src)} alt={k === i && j === img ? pr.name : ""} fill quality={90} sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
              </div>
            )),
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 text-paper">
            <p key={p.name} className="t-h2 reveal is-visible">{p.name}</p>
            <p className="label mt-2 opacity-90">{p.place}</p>
          </div>
          {p.images.length > 1 && (
            <div className="absolute right-4 top-4 flex flex-col gap-2">
              {(["↑", "↓"] as const).map((a, d) => (
                <button key={a} type="button" onClick={() => setImg((v) => (v + (d ? 1 : -1) + p.images.length) % p.images.length)} aria-label={d ? "Próxima foto" : "Foto anterior"} className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/70 bg-ink/20 text-paper backdrop-blur transition-colors hover:bg-paper hover:text-ink">
                  {a}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-6">
          <p key={p.text} className="reveal is-visible max-w-[34rem] leading-relaxed text-muted">“{p.text}”</p>
          <span className="label shrink-0 text-muted">
            {img + 1} / {p.images.length}
          </span>
        </div>
      </div>
      <ol className="border-t border-line">
        {projects.map((pr, k) => (
          <li key={pr.name}>
            <button type="button" onClick={() => pick(k)} onMouseEnter={() => pick(k)} className="group flex w-full items-baseline gap-4 border-b border-line py-4 text-left">
              <span className={`label w-6 transition-colors ${k === i ? "text-gold-dark" : "text-muted"}`}>{String(k + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className={`block text-[1.05rem] font-medium uppercase tracking-[-0.01em] transition-all duration-300 ${k === i ? "translate-x-2" : "text-muted group-hover:text-ink"}`}>{pr.name}</span>
                <span className="mt-0.5 block text-[0.78rem] uppercase tracking-[0.04em] text-muted">{pr.place}</span>
              </span>
              <span className={`transition-all duration-300 ${k === i ? "opacity-100" : "-translate-x-2 opacity-0"}`}>→</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- serviços em círculos ---------- */
export function ServiceCircles() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <div key={s.title} className="group relative aspect-square overflow-hidden rounded-full border border-line">
          <Image src={asset(s.image)} alt="" fill quality={90} sizes="(min-width: 1024px) 380px, 50vw" className="scale-125 object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100" />
          <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center transition-colors duration-500 group-hover:text-paper">
            <span className="label text-gold-dark transition-colors group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
            <span className="t-h3 mt-2">{s.title}</span>
            <span className="mt-3 max-w-[16rem] text-[0.9rem] leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/90">{s.text}</span>
          </div>
        </div>
      ))}
      <a href={studio.budgetForm} target="_blank" rel="noopener noreferrer" className="group flex aspect-square flex-col items-center justify-center rounded-full bg-ink text-paper transition-transform duration-500 hover:scale-[0.97]">
        <span className="text-2xl transition-transform duration-500 group-hover:rotate-45">↗</span>
        <span className="t-h3 mt-3">Pedir orçamento</span>
      </a>
    </div>
  );
}

/* ---------- processo: órbita que acompanha a etapa ---------- */
export function ProcessOrbit() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const angle = (active / steps.length) * 360;
  return (
    <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative hidden md:block">
        <div className="sticky top-1/4 mx-auto aspect-square w-full max-w-[22rem]">
          <div className="absolute inset-0 rounded-full border border-line" />
          <div className="absolute inset-[22%] rounded-full border border-line" />
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: `rotate(${angle}deg)` }}>
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
          </div>
          <div className="orbit-slow absolute inset-[22%]">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span key={active} className="reveal is-visible text-[4rem] font-light leading-none tracking-[-0.04em]">{String(active + 1).padStart(2, "0")}</span>
            <span className="label mt-2 text-muted">{steps[active].title}</span>
          </div>
        </div>
      </div>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title} ref={(el) => { refs.current[i] = el; }} data-i={i} className={`border-t border-line py-10 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-45"}`}>
            <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="t-h1 mt-2 !text-[clamp(1.9rem,3.4vw,2.8rem)]">{s.title}</h3>
            <p className="mt-3 max-w-[30rem] leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- frase com foto girando entre as palavras ---------- */
export function Statement() {
  const [ref, p] = useScrollProgress<HTMLDivElement>();
  return (
    <div ref={ref} className="relative py-10 text-center">
      <p className="t-h1 !text-[clamp(2.4rem,6.2vw,5.4rem)] !leading-[0.95]">
        Ambientes únicos.
        <br />
        Feitos para viver.
      </p>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[clamp(9rem,16vw,13rem)] w-[clamp(7rem,12vw,10rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl" style={{ transform: `translate(-50%,-50%) rotate(${(p - 0.5) * 24}deg) scale(${0.8 + p * 0.3})` }}>
        <Image src={asset("/img/refugio-quarto.webp")} alt="" fill quality={90} sizes="160px" className="object-cover" />
      </div>
      <p className="label mt-8 text-muted">Há 10 anos criando ambientes que abraçam</p>
    </div>
  );
}

/* ---------- vídeos: prévia no hover, som ao clicar ---------- */
export function VideoCards() {
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  const v = videos.find((x) => x.slug === open);
  return (
    <>
      <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
        {videos.map((x) => (
          <button
            key={x.slug}
            type="button"
            onClick={() => setOpen(x.slug)}
            onMouseEnter={(e) => e.currentTarget.querySelector("video")?.play().catch(() => {})}
            onMouseLeave={(e) => e.currentTarget.querySelector("video")?.pause()}
            className="group w-[62%] shrink-0 snap-start text-left md:w-auto"
            aria-label={`Assistir: ${x.title}`}
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-sand">
              <video className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={asset(`/video/${x.slug}-preview.mp4`)} poster={asset(`/img/reel-${x.slug}.webp`)} muted loop playsInline preload="none" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/80 text-paper transition-all duration-500 group-hover:scale-110 group-hover:bg-paper group-hover:text-ink">▶</span>
              <span className="label absolute bottom-4 left-4 right-4 text-paper">{x.views}</span>
            </div>
            <p className="mt-3 text-[1rem] font-medium uppercase tracking-[-0.01em]">{x.title}</p>
            <p className="text-[0.9rem] text-muted">{x.text}</p>
          </button>
        ))}
      </div>
      {v && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={v.title}>
          <video className="max-h-[88vh] w-auto max-w-full" src={asset(`/video/${v.slug}.mp4`)} poster={asset(`/img/reel-${v.slug}.webp`)} autoPlay controls playsInline onClick={(e) => e.stopPropagation()} />
          <button type="button" className="absolute right-5 top-5 text-3xl text-paper" aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </>
  );
}

/* ---------- depoimentos com barra de progresso ---------- */
export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setI((v) => (v + 1) % testimonials.length), []);
  useEffect(() => {
    if (paused || reduced()) return;
    const t = setTimeout(next, 7000);
    return () => clearTimeout(t);
  }, [i, paused, next]);
  const t = testimonials[i];
  return (
    <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative mx-auto aspect-square w-full max-w-[18rem]">
        <div className="absolute inset-0 rounded-full border border-line" />
        <div className="orbit absolute inset-0">
          <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
        </div>
        <div className="orbit-slow absolute inset-[16%]">
          <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold" />
        </div>
        <div className="absolute inset-[16%] overflow-hidden rounded-full">
          <Image src={asset("/img/mariana-1.webp")} alt="Mariana Cabral" fill quality={90} sizes="200px" className="object-cover object-top grayscale" />
        </div>
      </div>
      <div>
        <p className="label text-muted">
          (07) O que dizem no Google · {studio.rating} com {studio.reviewCount} avaliações
        </p>
        <blockquote key={i} className="reveal is-visible mt-6 text-[clamp(1.3rem,2.3vw,1.9rem)] leading-snug tracking-[-0.02em]">
          “{t.text}”
        </blockquote>
        <p className="label mt-6">{t.name}</p>
        <div className="mt-10 flex items-center gap-2">
          {testimonials.map((x, k) => (
            <button key={x.name} type="button" onClick={() => setI(k)} aria-label={`Depoimento ${k + 1}`} className="relative h-0.5 w-12 overflow-hidden bg-line">
              {k === i && <span key={`${i}-${paused}`} className="absolute inset-0 origin-left bg-ink" style={paused ? undefined : { animation: "fill 7s linear forwards" }} />}
              {k < i && <span className="absolute inset-0 bg-ink" />}
            </button>
          ))}
          <span className="label ml-3 text-muted">
            {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- galeria arrastável ---------- */
export function DragGallery({ items }: { items: { src: string; alt: string }[] }) {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [zoom, setZoom] = useState<number | null>(null);
  const moved = useRef(false);
  return (
    <>
      <div
        ref={track}
        className="no-scrollbar flex cursor-grab gap-4 overflow-x-auto active:cursor-grabbing"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !track.current) return;
          moved.current = false;
          drag.current = { x: e.clientX, left: track.current.scrollLeft };
        }}
        onPointerMove={(e) => {
          if (!drag.current || !track.current) return;
          const dx = e.clientX - drag.current.x;
          if (Math.abs(dx) > 4) moved.current = true;
          track.current.scrollLeft = drag.current.left - dx;
        }}
        onPointerUp={() => (drag.current = null)}
        onPointerLeave={() => (drag.current = null)}
      >
        {items.map((g, i) => (
          <button key={g.src} type="button" onClick={() => !moved.current && setZoom(i)} className={`group relative shrink-0 overflow-hidden ${i % 2 ? "h-[20rem] w-[16rem]" : "h-[24rem] w-[19rem]"}`} aria-label={`Ampliar: ${g.alt}`}>
            <Image src={asset(g.src)} alt={g.alt} fill quality={90} draggable={false} sizes="320px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {zoom !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4" onClick={() => setZoom(null)} role="dialog" aria-modal="true">
          <div className="relative h-[86vh] w-full max-w-5xl">
            <Image src={asset(items[zoom].src)} alt={items[zoom].alt} fill quality={90} sizes="100vw" className="object-contain" />
          </div>
          <button type="button" className="absolute right-5 top-5 text-3xl text-paper" aria-label="Fechar">
            ×
          </button>
        </div>
      )}
    </>
  );
}

/* ---------- rodapé: etiqueta que segue o mouse ---------- */
export function FooterName() {
  const [pos, setPos] = useState({ x: 50, y: 55 });
  return (
    <div
      className="relative select-none"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
    >
      <p className="t-mega text-paper">Mariana Cabral</p>
      <span className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] bg-gold px-4 py-2 text-[0.85rem] font-bold uppercase text-ink shadow-xl transition-[left,top] duration-300 ease-out max-md:hidden" style={{ left: `${pos.x}%`, top: `${pos.y}%` }} aria-hidden>
        Ambientes únicos.
      </span>
    </div>
  );
}
