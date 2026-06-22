/* ==========================================================================
   VGS 3D — BANCO DE PRODUTOS
   ==========================================================================
   Este arquivo é INDEPENDENTE do HTML/CSS/JS principal.
   O index.html carrega este arquivo via <script src="produtos.js"></script>.

   COMO ADICIONAR/EDITAR UM PRODUTO:
   - Basta copiar um objeto do array PRODUTOS abaixo e ajustar os campos.
   - Cada produto é um objeto simples, sem dependências externas.

   ONDE FICAM AS IMAGENS:
   - Crie uma pasta chamada "imagens" no mesmo lugar do index.html.
   - Dentro dela, crie a subpasta "produtos".
   - Caminho final esperado:  imagens/produtos/nome-do-arquivo.jpg
   - Exemplo:                 imagens/produtos/filamento-pla-branco.jpg
   - Se o arquivo de imagem não existir, o site mostra automaticamente
     um placeholder colorido com o ícone da categoria (ver app.js),
     então o site NUNCA quebra por falta de imagem.

   CAMPOS DE CADA PRODUTO:
   id            -> número único (não repita)
   nome          -> nome curto do produto
   descricao     -> 1 linha explicando o produto
   categoria     -> uma das chaves em CATEGORIAS (lá embaixo)
   preco         -> preço atual em número (ex: 89.90)
   precoAntigo   -> preço "de" riscado (use null se não houver desconto)
   imagem        -> caminho do arquivo dentro de imagens/produtos/
   avaliacao     -> nota de 0 a 5 (pode ter casa decimal, ex: 4.7)
   numAvaliacoes -> quantas pessoas avaliaram
   vendidos      -> quantas unidades já foram vendidas (texto tipo "200+")
   freteGratis   -> true ou false
   estoque       -> quantidade disponível
   ========================================================================== */

const CATEGORIAS = {
  todos:        { nome: "Todos",              icone: "🗂️" },
  filamentos:   { nome: "Filamentos",         icone: "🧵" },
  pecas:        { nome: "Peças Impressas",    icone: "🧩" },
  acessorios:   { nome: "Acessórios",         icone: "🔩" },
  ferramentas:  { nome: "Ferramentas",        icone: "🛠️" },
  kits:         { nome: "Kits",               icone: "📦" },
};

const PRODUTOS = [
  {
    id: 1,
    nome: "Filamento PLA Branco 1kg",
    descricao: "Filamento PLA premium 1.75mm, baixo odor e fácil de imprimir",
    categoria: "filamentos",
    preco: 89.90,
    precoAntigo: 109.90,
    imagem: "imagens/produtos/filamento-pla-branco.jpg",
    avaliacao: 4.8,
    numAvaliacoes: 312,
    vendidos: "500+",
    freteGratis: true,
    estoque: 48,
  },
  {
    id: 2,
    nome: "Filamento PETG Preto 1kg",
    descricao: "Maior resistência mecânica e térmica que o PLA comum",
    categoria: "filamentos",
    preco: 99.90,
    precoAntigo: null,
    imagem: "imagens/produtos/filamento-petg-preto.jpg",
    avaliacao: 4.7,
    numAvaliacoes: 198,
    vendidos: "300+",
    freteGratis: true,
    estoque: 35,
  },
  {
    id: 3,
    nome: "Filamento ABS Vermelho 1kg",
    descricao: "Ideal para peças que exigem resistência a impacto e calor",
    categoria: "filamentos",
    preco: 94.90,
    precoAntigo: 119.90,
    imagem: "imagens/produtos/filamento-abs-vermelho.jpg",
    avaliacao: 4.5,
    numAvaliacoes: 87,
    vendidos: "150+",
    freteGratis: false,
    estoque: 20,
  },
  {
    id: 4,
    nome: "Suporte de Celular Articulado",
    descricao: "Peça impressa em PLA, ajustável em vários ângulos",
    categoria: "pecas",
    preco: 34.90,
    precoAntigo: null,
    imagem: "imagens/produtos/suporte-celular-articulado.jpg",
    avaliacao: 4.9,
    numAvaliacoes: 540,
    vendidos: "1000+",
    freteGratis: true,
    estoque: 60,
  },
  {
    id: 5,
    nome: "Organizador de Mesa Modular",
    descricao: "Módulos encaixáveis para canetas, clipes e cabos",
    categoria: "pecas",
    preco: 49.90,
    precoAntigo: 64.90,
    imagem: "imagens/produtos/organizador-mesa-modular.jpg",
    avaliacao: 4.6,
    numAvaliacoes: 76,
    vendidos: "120+",
    freteGratis: false,
    estoque: 18,
  },
  {
    id: 6,
    nome: "Vaso Geométrico Decorativo",
    descricao: "Design low-poly, acabamento fosco, 15cm de altura",
    categoria: "pecas",
    preco: 59.90,
    precoAntigo: null,
    imagem: "imagens/produtos/vaso-geometrico.jpg",
    avaliacao: 4.7,
    numAvaliacoes: 64,
    vendidos: "90+",
    freteGratis: true,
    estoque: 25,
  },
  {
    id: 7,
    nome: "Kit Ferramentas de Acabamento",
    descricao: "Espátula, alicate de corte e pinça para pós-processamento",
    categoria: "ferramentas",
    preco: 69.90,
    precoAntigo: 89.90,
    imagem: "imagens/produtos/kit-ferramentas-acabamento.jpg",
    avaliacao: 4.8,
    numAvaliacoes: 152,
    vendidos: "400+",
    freteGratis: true,
    estoque: 40,
  },
  {
    id: 8,
    nome: "Bicos Extrusora 0.4mm (kit 5un)",
    descricao: "Bicos em latão para hotend MK8, rosca padrão",
    categoria: "acessorios",
    preco: 39.90,
    precoAntigo: null,
    imagem: "imagens/produtos/bicos-extrusora-04mm.jpg",
    avaliacao: 4.6,
    numAvaliacoes: 210,
    vendidos: "600+",
    freteGratis: true,
    estoque: 70,
  },
  {
    id: 9,
    nome: "Adesivo de Mesa Aquecida (Build Surface)",
    descricao: "Superfície texturizada 220x220mm, alta aderência",
    categoria: "acessorios",
    preco: 54.90,
    precoAntigo: 69.90,
    imagem: "imagens/produtos/build-surface-220.jpg",
    avaliacao: 4.4,
    numAvaliacoes: 58,
    vendidos: "100+",
    freteGratis: false,
    estoque: 22,
  },
  {
    id: 10,
    nome: "Kit Iniciante Impressão 3D",
    descricao: "1 filamento PLA + ferramentas de acabamento + guia rápido",
    categoria: "kits",
    preco: 149.90,
    precoAntigo: 189.90,
    imagem: "imagens/produtos/kit-iniciante-3d.jpg",
    avaliacao: 4.9,
    numAvaliacoes: 134,
    vendidos: "250+",
    freteGratis: true,
    estoque: 30,
  },
  {
    id: 11,
    nome: "Suporte Headset Gamer",
    descricao: "Base estável para headset, encaixa sob a mesa",
    categoria: "pecas",
    preco: 44.90,
    precoAntigo: null,
    imagem: "imagens/produtos/suporte-headset-gamer.jpg",
    avaliacao: 4.7,
    numAvaliacoes: 95,
    vendidos: "180+",
    freteGratis: true,
    estoque: 33,
  },
  {
    id: 12,
    nome: "Miniatura RPG Personalizada",
    descricao: "Impressão sob encomenda, escala 28mm, resina",
    categoria: "pecas",
    preco: 24.90,
    precoAntigo: null,
    imagem: "imagens/produtos/miniatura-rpg.jpg",
    avaliacao: 4.8,
    numAvaliacoes: 41,
    vendidos: "70+",
    freteGratis: false,
    estoque: 15,
  },
];

/* Exporta para uso no app.js (funciona tanto direto no navegador
   quanto se um dia você migrar para módulos ES) */
if (typeof module !== "undefined") {
  module.exports = { PRODUTOS, CATEGORIAS };
}
