import Image from "next/image";
import { Counter, Reveal } from "@/components/Reveal";
import {
  DragGallery,
  FooterName,
  Header,
  HeroName,
  HoverStrip,
  Parallax,
  ProcessOrbit,
  ProjectShowcase,
  ScrollWords,
  ServiceCircles,
  Statement,
  Testimonials,
  VideoCards,
} from "@/components/Motion";
import { IconInstagram, IconPin } from "@/components/Icons";
import { faqs, gallery, heroCategories, nav, numbers, principles, studio } from "@/lib/data";
import { asset } from "@/lib/base-path";

// Conteúdo limitado a 1160px (o padding fica fora dessa largura)
const wrap = "mx-auto w-full max-w-[calc(1160px+2rem)] px-4 md:max-w-[calc(1160px+4rem)] md:px-8";

function Num({ n, label }: { n: string; label: string }) {
  return (
    <p className="label flex items-center gap-3 text-muted">
      <span>({n})</span>
      <span className="text-ink">{label}</span>
    </p>
  );
}

function Marquee({ text, reverse = false }: { text: string; reverse?: boolean }) {
  return (
    <div className="overflow-hidden border-y border-line py-3" aria-hidden>
      <div className={`marquee gap-10 whitespace-nowrap text-[0.78rem] uppercase italic tracking-[0.08em] text-muted ${reverse ? "marquee-reverse" : ""}`}>
        {Array.from({ length: 8 }).map((_, k) => (
          <span key={k} className="flex gap-10">
            {text} <span>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Topo */}
        <section id="inicio" className="pt-24">
          <div className={wrap}>
            <HeroName />
            <div className="mt-4 flex justify-between text-[0.72rem] uppercase italic tracking-[0.06em] text-muted">
              <span>Arquitetura · Interiores</span>
              <span>Campos dos Goytacazes · Online</span>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end">
              <Reveal>
                <h1 className="t-h1">Ambientes únicos para quem vive neles.</h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="max-w-[24rem] leading-relaxed text-muted">
                  Há 10 anos criando ambientes que abraçam. Mais de mil projetos no mundo, online e presencial.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projetos" className="rounded-full bg-ink px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-gold-dark">
                    Ver projetos
                  </a>
                  <a href={studio.budgetForm} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-ink hover:text-paper">
                    • Pedir orçamento
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <HoverStrip items={heroCategories} />
            </Reveal>
          </div>
        </section>

        {/* (01) Escritório */}
        <section id="escritorio" className="py-24 md:py-32">
          <div className={`${wrap} grid gap-10 md:grid-cols-[1fr_1.4fr]`}>
            <div>
              <Num n="01" label="O escritório" />
              <Reveal className="mt-8">
                <div className="clip-up relative aspect-[3/4] overflow-hidden">
                  <Image src={asset("/img/mariana-2.webp")} alt="Mariana Cabral, arquiteta" fill quality={90} sizes="(min-width: 768px) 440px, 100vw" className="object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="md:pt-16">
              <Reveal>
                <h2 className="t-h1">Criamos ambientes que abraçam.</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-[1.15rem] uppercase leading-snug tracking-[-0.01em]">
                  Mariana Cabral Arquitetura e Interiores é um escritório de Campos dos Goytacazes que cria casas, consultórios, escritórios e lojas, presencialmente e online.
                </p>
                <p className="mt-6 max-w-[34rem] leading-relaxed text-muted">
                  São muitos anos fazendo projetos e mais de oito compartilhando dicas no YouTube, no canal Dicas Decor. Nunca foi uma jornada fácil, mas é sempre uma grande alegria ver a concretização de cada projeto sonhado.
                </p>
                <a href={studio.youtube} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase">
                  Canal Dicas Decor
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-paper">↗</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <Marquee text="Arquitetura · Interiores · Residencial · Comercial" />

        {/* (02) Projetos */}
        <section id="projetos" className="py-24 md:py-32">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <Num n="02" label="Projetos" />
                <Reveal className="mt-6">
                  <h2 className="t-h1">Projetos com história.</h2>
                </Reveal>
              </div>
              <Reveal delay={100}>
                <p className="max-w-[22rem] leading-relaxed text-muted">Passe o mouse ou toque nos nomes. Os textos são o que a Mariana escreveu sobre cada projeto.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <ProjectShowcase />
            </Reveal>
          </div>
        </section>

        {/* (03) Abordagem */}
        <section className="py-24 md:py-32">
          <div className={`${wrap} grid gap-10 md:grid-cols-[1fr_1fr]`}>
            <div>
              <Num n="03" label="Nossa abordagem" />
              <Reveal className="mt-6">
                <h2 className="t-h1">O projeto é só o começo.</h2>
              </Reveal>
              <ScrollWords
                className="mt-10 text-[clamp(1.25rem,2vw,1.6rem)] font-medium uppercase leading-snug tracking-[-0.01em]"
                text="O que fazemos é caminhar ao seu lado, em uma jornada de decisões acertadas, com auxílio em todas as fases e a tranquilidade de saber que o seu investimento em cada escolha é seguro."
              />
            </div>
            <Parallax src="/img/sjb-jantar.webp" alt="Sala de jantar integrada com escada em madeira" className="min-h-[24rem] md:min-h-full" sizes="(min-width: 768px) 580px, 100vw" />
          </div>
        </section>

        {/* (04) Números */}
        <section className="pb-24 md:pb-32">
          <div className={wrap}>
            <Num n="04" label="Números" />
            <Reveal className="mt-6">
              <h2 className="t-h1">Feito com experiência.</h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {numbers.map((n, i) => (
                <Reveal key={n.label} delay={i * 100} className="border-t-2 border-ink pt-5">
                  <p className="text-[clamp(2.6rem,5vw,4rem)] font-light leading-none tracking-[-0.05em]">
                    <Counter value={n.value} />
                    {n.suffix}
                  </p>
                  <p className="label mt-3 text-muted">{n.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee text="Ambientes únicos para quem vive neles" reverse />

        {/* (05) Serviços */}
        <section id="servicos" className="bg-cream py-24 md:py-32">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <Num n="05" label="Serviços" />
                <Reveal className="mt-6">
                  <h2 className="t-h1">Do projeto ao real.</h2>
                </Reveal>
              </div>
              <Reveal delay={100}>
                <p className="max-w-[22rem] leading-relaxed text-muted">Passe o mouse em cada círculo para ver um projeto daquele tipo.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <ServiceCircles />
            </Reveal>
          </div>
        </section>

        {/* (06) Processo */}
        <section id="processo" className="py-24 md:py-32">
          <div className={wrap}>
            <Num n="06" label="Processo" />
            <Reveal className="mt-6">
              <h2 className="t-h1">Da primeira ideia à casa pronta.</h2>
            </Reveal>
            <div className="mt-12">
              <ProcessOrbit />
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className={wrap}>
            <Statement />
          </div>
        </section>

        {/* Princípios */}
        <section className="pb-24 md:pb-32">
          <div className={wrap}>
            <Num n="—" label="O que a gente acredita" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} className="group flex min-h-[15rem] flex-col justify-between border border-line p-5 transition-all duration-500 hover:-translate-y-2 hover:border-ink hover:bg-ink hover:text-paper">
                  <div className="flex justify-between">
                    <span className="label text-muted transition-colors group-hover:text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-3 w-3 rounded-full border border-current transition-all duration-500 group-hover:bg-gold" />
                  </div>
                  <div>
                    <h3 className="t-h3">{p.title}</h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-muted transition-colors group-hover:text-paper/80">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* (07) Vídeos */}
        <section id="videos" className="bg-cream py-24 md:py-32">
          <div className={wrap}>
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <Num n="07" label="Vídeos" />
                <Reveal className="mt-6">
                  <h2 className="t-h1">Bastidores e transformações.</h2>
                </Reveal>
              </div>
              <Reveal delay={100}>
                <p className="max-w-[22rem] leading-relaxed text-muted">Passe o mouse para uma prévia e clique para assistir com som.</p>
              </Reveal>
            </div>
            <Reveal delay={150} className="mt-12">
              <VideoCards />
            </Reveal>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-24 md:py-32">
          <div className={wrap}>
            <Testimonials />
          </div>
        </section>

        {/* Galeria */}
        <section className="pb-24 md:pb-32">
          <div className={wrap}>
            <div className="flex items-end justify-between gap-6">
              <Reveal>
                <h2 className="t-h2">Mais projetos</h2>
              </Reveal>
              <p className="label text-muted max-md:hidden">Arraste para o lado →</p>
            </div>
            <Reveal delay={100} className="mt-8">
              <DragGallery items={gallery} />
            </Reveal>
          </div>
        </section>

        {/* Dúvidas */}
        <section className="pb-24 md:pb-32">
          <div className={`${wrap} grid gap-10 md:grid-cols-[1fr_1.3fr]`}>
            <div>
              <Num n="08" label="Dúvidas" />
              <Reveal className="mt-6">
                <h2 className="t-h1">Perguntas, respondidas.</h2>
              </Reveal>
            </div>
            <div>
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line py-5 first:border-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1rem] font-medium uppercase tracking-[-0.01em]">
                    {f.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink transition-transform duration-500 group-open:rotate-45 group-open:bg-ink group-open:text-paper">+</span>
                  </summary>
                  <p className="mt-3 max-w-[34rem] leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden bg-cream py-28 md:py-36">
          <div className="orbit-slow pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full border border-line" aria-hidden />
          <div className="orbit pointer-events-none absolute -bottom-48 -left-40 h-[28rem] w-[28rem] rounded-full border border-line" aria-hidden />
          <div className={`${wrap} relative text-center`}>
            <Reveal>
              <p className="label text-muted">Tem um projeto em mente?</p>
              <h2 className="t-h1 mx-auto mt-6 max-w-[48rem] !text-[clamp(2.4rem,5.4vw,4.6rem)]">Vamos criar o seu ambiente único.</h2>
              <p className="mx-auto mt-6 max-w-[28rem] leading-relaxed text-muted">Conte o que você imagina no formulário de orçamento. A equipe responde com os próximos passos.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href={studio.budgetForm} target="_blank" rel="noopener noreferrer" className="rounded-full bg-ink px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-gold-dark">
                  • Formulário de orçamento
                </a>
                <a href={`mailto:${studio.email}`} className="rounded-full border border-ink px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-ink hover:text-paper">
                  {studio.email}
                </a>
              </div>
              <a href={studio.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-[0.85rem] text-muted hover:text-ink">
                <IconPin className="h-4 w-4" /> {studio.address}, {studio.city}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="overflow-hidden bg-night pt-16 text-paper">
        <div className={wrap}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <p className="label text-gold">Arquitetura · Interiores</p>
              <p className="mt-3 max-w-[18rem] text-[0.95rem] font-medium uppercase leading-snug">Há 10 anos criando ambientes únicos.</p>
            </div>
            <div>
              <p className="label text-paper/60">(01) Navegue</p>
              <ul className="mt-3 space-y-1.5 text-[0.85rem] uppercase">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-gold">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-paper/60">(02) Redes</p>
              <ul className="mt-3 space-y-1.5 text-[0.85rem] uppercase">
                <li><a href={studio.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><IconInstagram className="h-3.5 w-3.5" /> Instagram</a></li>
                <li><a href={studio.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gold">YouTube · Dicas Decor</a></li>
                <li><a href={studio.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-gold">TikTok</a></li>
              </ul>
            </div>
            <div>
              <p className="label text-paper/60">(03) Contato</p>
              <ul className="mt-3 space-y-1.5 text-[0.85rem]">
                <li><a href={`mailto:${studio.email}`} className="hover:text-gold">{studio.email}</a></li>
                <li><a href={`mailto:${studio.pressEmail}`} className="hover:text-gold">Imprensa: {studio.pressEmail}</a></li>
                <li><a href={studio.budgetForm} target="_blank" rel="noopener noreferrer" className="uppercase hover:text-gold">Pedir orçamento</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <FooterName />
          </div>
          <p className="border-t border-paper/15 py-6 text-[0.75rem] uppercase text-paper/60">© {new Date().getFullYear()} {studio.full}</p>
        </div>
      </footer>
    </>
  );
}
