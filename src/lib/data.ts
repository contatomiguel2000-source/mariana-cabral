// Conteúdo real: Instagram @marianacabral.arq (bio, legendas, posts e reels), Linktree e Google Maps (coletado em out/2026).

export const studio = {
  name: "Mariana Cabral",
  full: "Mariana Cabral Arquitetura e Interiores",
  city: "Campos dos Goytacazes - RJ",
  address: "R. Cora de Alvarenga, 363 - 1º andar, sala 2 - Parque Leopoldina",
  cep: "28051-271",
  instagram: "https://www.instagram.com/marianacabral.arq/",
  instagramHandle: "@marianacabral.arq",
  youtube: "https://www.youtube.com/@dicasdecor",
  tiktok: "https://tiktok.com/@marianacabral.arq",
  email: "projetos@marianacabral.arq.br",
  pressEmail: "contato@marianacabral.arq.br",
  budgetForm: "https://forms.office.com/r/g66J1nJqvg",
  ebook: "https://pay.hotmart.com/D73688432C",
  mapsUrl:
    "https://www.google.com/maps/place/Mariana+Cabral+Arquitetura+e+Interiores/@-21.7476939,-41.3537486,17z/data=!4m6!3m5!1s0xbdd4717252aedd:0xbad702f2d07982bd!8m2!3d-21.7476939!4d-41.3537486!16s%2Fg%2F11cssn15dy",
  rating: "5,0",
  reviewCount: 10,
};

export const nav = [
  { label: "Projetos", href: "#projetos" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Vídeos", href: "#videos" },
  { label: "Contato", href: "#contato" },
];

export const heroCategories = [
  { label: "Residencial", image: "/img/sjb-sala.webp" },
  { label: "Consultórios", image: "/img/cardio-1.webp" },
  { label: "Escritórios", image: "/img/advocacia-1.webp" },
  { label: "Áreas externas", image: "/img/externa-1.webp" },
];

export const numbers = [
  { value: 10, suffix: "", label: "anos criando ambientes" },
  { value: 1000, suffix: "+", label: "projetos no mundo" },
  { value: 350, suffix: "K+", label: "inscritos no YouTube" },
  { value: 5, suffix: ",0", label: "nota no Google" },
];

// Projetos reais, com o texto que a Mariana escreveu no post
export const projects = [
  {
    name: "Residência em São Joaquim da Barra",
    place: "Residencial · São Joaquim da Barra, SP",
    text: "Mais do que uma reforma, este projeto foi uma busca por se reconectar. A antiga atmosfera já não atendia às expectativas da família.",
    images: ["/img/sjb-sala.webp", "/img/sjb-integrado.webp", "/img/sjb-jantar.webp"],
  },
  {
    name: "Consultório de Cardiologia",
    place: "Comercial · Saúde",
    text: "Pensado nos mínimos detalhes para atender com conforto, sem deixar a beleza de lado. Seu consultório não precisa ser frio e sem graça.",
    images: ["/img/cardio-1.webp", "/img/cardio-3.webp", "/img/cardio-2.webp"],
  },
  {
    name: "Refúgio de uma jovem",
    place: "Residencial · Quarto",
    text: "Ela desejava um ambiente atual, com toque romântico, mais armazenamento, estante de livros e uma mesa de trabalho. O novo layout trouxe novas possibilidades: quase tudo mudou de lugar.",
    images: ["/img/refugio-quarto.webp", "/img/refugio-estudo.webp"],
  },
  {
    name: "Área gourmet",
    place: "Residencial · Área externa",
    text: "Os clientes queriam um espaço moderno porém acolhedor. Unimos elementos rústicos a uma base contemporânea, e o forro do teto traz o acolhimento.",
    images: ["/img/gourmet-2.webp", "/img/gourmet-1.webp"],
  },
  {
    name: "Escritório de advocacia Sgardioli",
    place: "Comercial · Escritório",
    text: "A madeira ebanizada e os tons de cinza comunicam estabilidade e tradição. A freijó equilibra e deixa o ambiente confortável para os clientes.",
    images: ["/img/advocacia-1.webp", "/img/advocacia-2.webp"],
  },
  {
    name: "Home office para ela e para ele",
    place: "Residencial · Home office",
    text: "Um casal, dois estilos. Espaços individualizados, respeitando os gostos e a personalidade de cada um.",
    images: ["/img/homeoffice-ela.webp", "/img/homeoffice-ele.webp"],
  },
  {
    name: "Área externa com horta",
    place: "Residencial · Antes e depois",
    text: "Dando vida a uma área externa: agora é um refúgio cheio de natureza para a família aproveitar, e até plantar e colher.",
    images: ["/img/externa-1.webp", "/img/externa-2.webp"],
  },
];

export const services = [
  {
    title: "Projeto residencial",
    text: "Casas e apartamentos, do quarto à área gourmet. Às vezes a casa só precisa de intervenções pontuais; às vezes, de uma grande reforma.",
    image: "/img/suite-madeira.webp",
  },
  {
    title: "Projeto comercial",
    text: "Consultórios, clínicas, escritórios e lojas. O espaço bem planejado comunica os valores da empresa e transforma a jornada do cliente.",
    image: "/img/advocacia-2.webp",
  },
  {
    title: "Online ou presencial",
    text: "Mais de mil projetos no mundo. Atendemos presencialmente em Campos e online para qualquer cidade.",
    image: "/img/sala-aconchego.webp",
  },
  {
    title: "Acompanhamento",
    text: "O projeto é só o começo: caminhamos ao seu lado nas decisões, em todas as fases, até ver o sonho ganhar forma.",
    image: "/img/sjb-integrado.webp",
  },
];

export const steps = [
  { title: "Orçamento", text: "Você preenche o formulário de orçamento e conta sobre o seu espaço." },
  { title: "Conversa", text: "Entendemos a sua rotina, o seu gosto e o que já existe e pode ser aproveitado." },
  { title: "Projeto", text: "Layout, marcenaria sob medida, mobiliário, texturas e iluminação, com imagens 3D para você ver antes." },
  { title: "Detalhamento", text: "Tudo detalhado para a obra, para que o resultado tenha a fidelidade que planejamos." },
  { title: "Do projeto ao real", text: "Auxílio nas escolhas e nas fases da obra, até a casa estar pronta para ser vivida." },
];

export const principles = [
  { title: "Proporção", text: "O erro mais comum nas casas é a falta de proporcionalidade. Cada espaço pede peças na medida certa." },
  { title: "Equilíbrio", text: "Marcenaria sob medida com mobiliário solto, peças afetivas e texturas, para sair do “padrão de loja”." },
  { title: "Essência", text: "Saber exatamente onde intervir para transformar a atmosfera sem perder a essência da casa." },
  { title: "Acolhimento", text: "Escolher cada tom e textura é escolher as sensações que você quer viver todos os dias ao chegar em casa." },
];

export const videos = [
  { slug: "grande-reforma", title: "A grande reforma, ep. 1", text: "Uma casa de 1960 que eu me apaixonei", views: "1,3 mi de visualizações" },
  { slug: "igreja-vera-cruz", title: "Igreja Batista de Vera Cruz", text: "Transformação conservando a essência", views: "Projeto comercial" },
  { slug: "cozinha-pequena", title: "Cozinha pequena de apartamento", text: "Pode ter charme, com boas escolhas", views: "Antes e depois" },
  { slug: "escritorio-novo", title: "O meu escritório novo", text: "Trabalho perto de casa", views: "Bastidores" },
];

// Avaliações do Google Maps (5 estrelas), texto como a pessoa escreveu (só correções de digitação)
export const testimonials = [
  {
    name: "Cris Matta",
    text: "A arquiteta Mariana é extraordinária. Ela é capaz de saber o que vai na cabeça do cliente. Quando apresenta o projeto é exatamente o que você sonhava. Não impõe a vontade dela, mas faz o que o cliente quer, orientando se é adequado ou não.",
  },
  {
    name: "Joice Gonçalves",
    text: "O trabalho da Mariana e sua equipe é sensacional! Difícil encontrar uma arquiteta com tanta criatividade e bom gosto. Todo ano faço um projetinho novo até minha casa ficar 100%. Recomendo de olhos fechados!",
  },
  {
    name: "Flavia Correa",
    text: "Sou de BH, tive uma experiência horrível com outra arquiteta, porém a Mariana consegue entender o que queremos, por mais que não saibamos explicar direito. Um trabalho extremamente criterioso! Cuidadosa, criativa, impecável, competente!",
  },
  { name: "Mary N", text: "Equipe atenciosa, arquiteta maravilhosa! Super recomendo!" },
];

export const gallery = [
  { src: "/img/sala-transformada.webp", alt: "Sala com sofá de canto e mesa redonda" },
  { src: "/img/lavabo.webp", alt: "Lavabo elegante e acolhedor" },
  { src: "/img/quarto-descanso.webp", alt: "Quarto com cabeceira em madeira e ripado" },
  { src: "/img/camilly.webp", alt: "Quarto preto e branco da jovem Camilly" },
  { src: "/img/infantil-1.webp", alt: "Quarto infantil com estante e cama" },
  { src: "/img/cozinha-ponto-cor.webp", alt: "Sala de jantar com toque de cor verde" },
  { src: "/img/sala-2.webp", alt: "Sala com parede de pedra e madeira" },
  { src: "/img/suite-madeira.webp", alt: "Suíte com madeira e cabeceira verde" },
];

export const faqs = [
  { q: "Vocês atendem fora de Campos?", a: "Sim. São mais de mil projetos no mundo, online e presencial. Em Campos dos Goytacazes o atendimento também pode ser presencial." },
  { q: "Preciso fazer uma obra grande?", a: "Nem sempre. Muitas casas já têm uma ótima estrutura e precisam só de intervenções pontuais e inteligentes." },
  { q: "Vocês fazem projetos comerciais?", a: "Fazemos: consultórios, clínicas, escritórios e lojas, como a primeira loja física da Rarus." },
  { q: "Como peço um orçamento?", a: "Pelo formulário de orçamento ou pelo e-mail projetos@marianacabral.arq.br." },
];
