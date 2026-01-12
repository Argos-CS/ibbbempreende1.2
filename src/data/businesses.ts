import triploFenix from "@/assets/businesses/triplo-fenix.jpeg";
import walDoces from "@/assets/businesses/wal-doces.jpeg";
import naturalAcai from "@/assets/businesses/natural-acai.jpeg";
import valEmCasa from "@/assets/businesses/val-em-casa.jpeg";
import mammothPizza from "@/assets/businesses/mammoth-pizza.jpeg";
import quentinhasMoana from "@/assets/businesses/quentinhas-moana.jpeg";
import deliciasNatalRosi from "@/assets/businesses/delicias-natal-rosi.jpeg";
import deliciasDaPri from "@/assets/businesses/delicias-da-pri.jpeg";
import telmaLima from "@/assets/businesses/telma-lima.jpeg";
import tatianeAguiar from "@/assets/businesses/tatiane-aguiar.jpeg";
import studioMegaHair from "@/assets/businesses/studio-mega-hair.jpeg";
import tiaRosane from "@/assets/businesses/tia-rosane.jpeg";
import doceSom from "@/assets/businesses/doce-som.jpeg";
import liliFestas from "@/assets/businesses/lili-festas.jpeg";
import suzanaMinifesta from "@/assets/businesses/suzana-minifesta.jpeg";
import draGabrielli from "@/assets/businesses/dra-gabrielli.jpeg";
import greyHouse from "@/assets/businesses/grey-house.jpeg";
import carbonelliDriver from "@/assets/businesses/carbonelli-driver.jpeg";
import pabloEstetica from "@/assets/businesses/pablo-estetica.jpeg";
import novoEmpreendimento1 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 18.00.18.jpeg";
import novoEmpreendimento2 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 18.00.19 (1).jpeg";
import novoEmpreendimento3 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 18.00.19 (2).jpeg";
import novoEmpreendimento4 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 18.00.19 (3).jpeg";
import novoEmpreendimento5 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 18.00.19.jpeg";
import novoEmpreendimento6 from "@/assets/businesses/pendentes/WhatsApp Image 2025-12-29 at 19.20.26.jpeg";
import novoEmpreendimento7 from "@/assets/businesses/pendentes/WhatsApp Image 2026-01-11 at 16.12.59.jpeg";

export type Category = 
  | "Todos"
  | "Confeitaria"
  | "Pizzaria"
  | "Açaí"
  | "Marmitas"
  | "Saúde & Bem-estar"
  | "Beleza"
  | "Educação"
  | "Festas"
  | "Serviços";

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
  "Beleza",
  "Educação",
  "Festas",
  "Serviços",
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
  {
    id: "tatiane-aguiar",
    name: "Tatiane Aguiar - Psicanalista",
    category: "Saúde & Bem-estar",
    description: "Pós-graduanda em ACP e Graduanda em Psicologia. Atendimento online para ansiedade, luto, depressão, estresse e traumas.",
    phone: "(21) 98142-9304",
    instagram: "@tatianetito.psicanalista",
    image: tatianeAguiar,
    highlights: ["Ansiedade", "Luto/Perdas", "Depressão", "Terapia Online", "Fobia Social"],
  },
  {
    id: "studio-mega-hair",
    name: "Studio Mega Hair - Adriana Bianco",
    category: "Beleza",
    description: "Escova progressiva sem formol. Cabelos lindos começam com um agendamento!",
    phone: "(21) 99349-5969",
    image: studioMegaHair,
    highlights: ["Escova Progressiva", "Sem Formol", "Mega Hair"],
  },
  {
    id: "tia-rosane",
    name: "Explicadora Tia Rosane",
    category: "Educação",
    description: "Reforço escolar com atenção, paciência e resultados! Auxílio em tarefas e preparação para provas.",
    phone: "21 99354-7271",
    address: "Rua H lote 03, Quadra 35, Jardim Anhangá, Duque de Caxias, RJ",
    image: tiaRosane,
    highlights: ["Reforço Escolar", "Tarefas Escolares", "Preparação para Provas", "Atividades Extras"],
  },
  {
    id: "doce-som",
    name: "Escola de Música Doce Som",
    category: "Educação",
    description: "Transforme sonhos em melodias. Venha estudar música conosco! Um projeto da Igreja Batista no Barro Branco.",
    phone: "(21) 99973-6695",
    image: doceSom,
    highlights: ["Teclado", "Violão", "Violino", "Violoncelo", "Canto"],
  },
  {
    id: "lili-festas",
    name: "Lili Festas - Pegue e Monte",
    category: "Festas",
    description: "A sua festa começa aqui! Aluguel de itens para festas.",
    phone: "(21) 98712-7887",
    instagram: "@lilifestaspegueemonte",
    image: liliFestas,
    highlights: ["Pegue e Monte", "Decoração de Festas", "Aluguel"],
  },
  {
    id: "suzana-minifesta",
    name: "Suzana Minifesta",
    category: "Festas",
    description: "Kit de festa completo! Painel redondo, painel romano, arco de bolas, boleira, jarro e bandejas.",
    phone: "(21) 97922-0868",
    image: suzanaMinifesta,
    highlights: ["Kit 1 R$50", "Kit 2 R$100", "Arco de Bolas", "Painel Redondo"],
  },
  {
    id: "dra-gabrielli",
    name: "Dra. Gabrielli Souza - Dentista",
    category: "Saúde & Bem-estar",
    description: "Cirurgiã-Dentista CRO-RJ 057024. Clareamento dental, prótese, profilaxia e muito mais.",
    phone: "(21) 98435-2777",
    instagram: "@dragabriellis",
    image: draGabrielli,
    highlights: ["Clareamento Dental", "Prótese", "Profilaxia", "Extração", "Tratamento Restaurador"],
  },
  {
    id: "grey-house",
    name: "Espaço Grey House",
    category: "Festas",
    description: "Espaço para eventos e festas. Reserve já o seu evento!",
    phone: "(21) 98533-5192",
    instagram: "@EspacoGreyHouse",
    image: greyHouse,
    highlights: ["Espaço para Festas", "Eventos", "Reservas"],
  },
  {
    id: "carbonelli-driver",
    name: "Carbonelli Driver - Motorista Particular",
    category: "Serviços",
    description: "Motorista particular para suas viagens e compromissos. Segurança e pontualidade.",
    phone: "21 98010-5338",
    image: carbonelliDriver,
    highlights: ["Motorista Particular", "Viagens", "Pontualidade"],
  },
  {
    id: "pablo-estetica",
    name: "Pablo Escobar - Estética Automotiva",
    category: "Serviços",
    description: "Estética automotiva profissional. Deixe seu veículo impecável!",
    phone: "21 98618-8935",
    address: "Rua F 538, Nova Campinas",
    image: pabloEstetica,
    highlights: ["Estética Automotiva", "Lavagem", "Polimento"],
  },
  {
    id: "novo-empreendimento-1",
    name: "Novo Empreendimento 1",
    category: "Serviços",
    description: "Descrição do novo empreendimento 1. Oferecemos serviços de alta qualidade para atender às suas necessidades.",
    phone: "21 99999-9991",
    instagram: "@novoempreendimento1",
    image: novoEmpreendimento1,
    highlights: ["Serviço 1", "Serviço 2", "Serviço 3"],
  },
  {
    id: "novo-empreendimento-2",
    name: "Novo Empreendimento 2",
    category: "Confeitaria",
    description: "Descrição do novo empreendimento 2. Doces e bolos para todas as ocasiões.",
    phone: "21 99999-9992",
    instagram: "@novoempreendimento2",
    image: novoEmpreendimento2,
    highlights: ["Bolos", "Doces", "Salgados"],
  },
  {
    id: "novo-empreendimento-3",
    name: "Novo Empreendimento 3",
    category: "Serviços",
    description: "Descrição do novo empreendimento 3. Soluções inovadoras para o seu dia a dia.",
    phone: "21 99999-9993",
    instagram: "@novoempreendimento3",
    image: novoEmpreendimento3,
    highlights: ["Inovação", "Qualidade", "Confiança"],
  },
  {
    id: "novo-empreendimento-4",
    name: "Novo Empreendimento 4",
    category: "Beleza",
    description: "Descrição do novo empreendimento 4. Cuidando da sua beleza e bem-estar.",
    phone: "21 99999-9994",
    instagram: "@novoempreendimento4",
    image: novoEmpreendimento4,
    highlights: ["Cabelo", "Maquiagem", "Estética"],
  },
  {
    id: "novo-empreendimento-5",
    name: "Novo Empreendimento 5",
    category: "Marmitas",
    description: "Descrição do novo empreendimento 5. Comida caseira com sabor de verdade.",
    phone: "21 99999-9995",
    instagram: "@novoempreendimento5",
    image: novoEmpreendimento5,
    highlights: ["Comida Caseira", "Delivery", "Variedade"],
  },
  {
    id: "novo-empreendimento-6",
    name: "Novo Empreendimento 6",
    category: "Festas",
    description: "Descrição do novo empreendimento 6. Tudo para a sua festa ser inesquecível.",
    phone: "21 99999-9996",
    instagram: "@novoempreendimento6",
    image: novoEmpreendimento6,
    highlights: ["Decoração", "Buffet", "Animação"],
  },
  {
    id: "novo-empreendimento-7",
    name: "Novo Empreendimento 7",
    category: "Educação",
    description: "Descrição do novo empreendimento 7. Aulas e cursos para o seu desenvolvimento.",
    phone: "21 99999-9997",
    instagram: "@novoempreendimento7",
    image: novoEmpreendimento7,
    highlights: ["Aulas Particulares", "Cursos Online", "Reforço Escolar"],
  },
];
