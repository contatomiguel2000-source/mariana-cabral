import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Inter Tight hospedada no próprio site (fonte variável, caracteres latinos)
const interTight = localFont({
  src: "./fonts/InterTight-latin.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariana Cabral | Arquitetura e Interiores",
  description:
    "Há 10 anos criando ambientes únicos. Mais de 1000 projetos no mundo, online e presencial, a partir de Campos dos Goytacazes (RJ). Projetos residenciais e comerciais.",
  openGraph: {
    title: "Mariana Cabral Arquitetura e Interiores",
    description: "Há 10 anos criando ambientes únicos. Mais de 1000 projetos no mundo, online e presencial.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
