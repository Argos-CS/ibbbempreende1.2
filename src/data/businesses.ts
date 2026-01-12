import triploFenix from "@/assets/businesses/triplo-fenix.jpeg";
import walDoces from "@/assets/businesses/wal-doces.jpeg";
import naturalAcai from "@/assets/businesses/natural-acai.jpeg";
import valEmCasa from "@/assets/businesses/val-em-casa.jpeg";
import mammothPizza from "@/assets/businesses/mammoth-pizza.jpeg";
import quentinhasMoana from "@/assets/businesses/quentinhas-moana.jpeg";
import deliciasNatalRosi from "@/assets/businesses/delicias-natal-rosi.jpeg";
import deliciasDaPri from "@/assets/businesses/delicias-da-pri.jpeg";
import telmaLima from "@/assets/businesses/telma-lima.jpeg";

export type Category = 
  | "Todos"
  | "Confeitaria"
  | "Pizzaria"
  | "Açaí"
  | "Marmitas"
  | "Saúde & Bem-estar";

export interface Business {
  id: string;
  name: string;
  category: Category;
  description: string;
  phone: string;
  instagram?: string;
  address?: string;
  image: string;
  highlights: string[];
}

export const categories: Category[] = [
  "Todos",
  "Confeitaria",
  "Pizzaria",
  "Açaí",
  "Marmitas",
  "Saúde & Bem-estar",
];

export const businesses: Business[] = [
  {
    id: "triplo-fenix",
    name: "Triplo Fênix Gourmet",
    category: "Confeitaria",
    description: "Doces gourmet, naked cakes, chocolates artesanais e brownies feitos com muito amor e qualidade.",
    phone: "21 966031489",
    instagram: "@triplofenix03",
    image: triploFenix,
    highlights: ["Naked Cake", "Bombom Pimenta e Damasco", "Camafeu de Nozes", "Chocolates", "Brownies"],
  },
  {
    id: "wal-doces",
    name: "Wal Doces e Salgados",
    category: "Confeitaria",
    description: "Bolos artesanais, docinhos para festa, empadinhas e muito mais. Faça sua encomenda!",
    phone: "21 96823-1551",
    image: walDoces,
    highlights: ["Bolos Artesanais", "Bolos no Pote", "Docinhos para Festa", "Empadão", "Empadinhas"],
  },
  {
    id: "natural-acai",
    name: "Natural Açaí",
    category: "Açaí",
    description: "Açaí natural e cremoso com diversas opções de complementos. Venha experimentar!",
    phone: "",
    address: "Rua Marquês Lafaiete 01, Pq Equitativa",
    image: naturalAcai,
    highlights: ["Açaí Natural", "Complementos Variados", "Creme de Cupuaçu"],
  },
  {
    id: "val-em-casa",
    name: "Val em Casa",
    category: "Confeitaria",
    description: "Bolos caseiros com diversos tamanhos, sabores e valores. Encomende o seu!",
    phone: "(21) 99494-0261",
    image: valEmCasa,
    highlights: ["Bolo Caseiro", "Diversos Sabores", "Tamanhos Variados"],
  },
  {
    id: "mammoth-pizza",
    name: "Mammoth Pizza",
    category: "Pizzaria",
    description: "A melhor pizza da cidade! Pizzas artesanais feitas com ingredientes selecionados.",
    phone: "(21) 98753-2091",
    instagram: "@mammoth_pizzaria",
    image: mammothPizza,
    highlights: ["Pizzas Artesanais", "Ingredientes Selecionados", "Delivery"],
  },
  {
    id: "quentinhas-moana",
    name: "Quentinhas da Moana",
    category: "Marmitas",
    description: "Quentinhas deliciosas por apenas R$ 9,99! Funcionamento das 11h às 15h.",
    phone: "021966814398",
    address: "Av. Automóvel Clube, 700, Parque Nova Campinas, DC",
    image: quentinhasMoana,
    highlights: ["Quentinha R$ 9,99", "Dinheiro, Cartão e Pix", "11h às 15h"],
  },
  {
    id: "delicias-natal-rosi",
    name: "Delícias da Rosi",
    category: "Confeitaria",
    description: "Sobremesas e salgados especiais feitos com muito carinho. Pudim, mousse, quiches e muito mais!",
    phone: "96630-9707",
    image: deliciasNatalRosi,
    highlights: ["Pudim", "Mousse", "Brigadeirão", "Quiches", "Empadão"],
  },
  {
    id: "delicias-da-pri",
    name: "Delícias da Pri",
    category: "Confeitaria",
    description: "Brownie, empada, pudim, tortinha e bolo por Priscila Escobar. Sabor e cremosidade em cada mordida!",
    phone: "(21) 98066-9180",
    instagram: "@deliciasdaprioriginal",
    address: "Duque de Caxias, RJ",
    image: deliciasDaPri,
    highlights: ["Brownie", "Empada", "Pudim", "Tortinha", "Bolo"],
  },
  {
    id: "telma-lima",
    name: "Telma Lima - Psicanalista",
    category: "Saúde & Bem-estar",
    description: "Sua saúde mental importa! Terapia de casal e familiar. Atendimento presencial e online.",
    phone: "21 980756959",
    image: telmaLima,
    highlights: ["Terapia de Casal", "Terapia Familiar", "Atendimento Online", "Atendimento Presencial"],
  },
];
