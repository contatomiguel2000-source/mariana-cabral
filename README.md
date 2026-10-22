# Mariana Cabral Arquitetura e Interiores

Site em Next.js, publicado no hub com o slug `/mariana-cabral` (ver `src/lib/base-path.ts`). Layout inspirado no template Norevan (https://norevan.framer.website/).

- Conteúdo: Instagram [@marianacabral.arq](https://www.instagram.com/marianacabral.arq/), Linktree e Google Maps (`src/lib/data.ts`).
- Fonte Inter Tight hospedada no projeto (`src/app/fonts`), sem depender do Google Fonts no build.
- Imagens em `public/img`, reels em `public/video` (prévia curta sem som + vídeo completo com som). Originais em `midia-original/` (fora do Git).

```bash
npm run dev   # http://localhost:3000/mariana-cabral
```
