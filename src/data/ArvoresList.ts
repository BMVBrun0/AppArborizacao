import { ImageProps } from "react-native";

export interface Arvores {
  id: Number;
  name: string;
  image: ImageProps["source"];
  description: string;
  icon: ImageProps["source"];
  localizacao: string;
}

const arvore1 = require("../../assets/arvores/Screenshot_1.png");
const arvore2 = require("../../assets/arvores/Screenshot_2.png");
const arvore3 = require("../../assets/arvores/Screenshot_3.png");
const arvore4 = require("../../assets/arvores/Screenshot_4.png");
const arvore5 = require("../../assets/arvores/Screenshot_5.png");
const icon1 = require("../../assets/imagens/icon.png");

export const arvores: Arvores[] = [
  {
    name: "Pata de Vaca (Bauhinia variegata)",
    image: arvore1,
    description: "Essa é uma das árvores nativas indicadas para arborização urbana, já que seu porte pode chegar apenas a 9 m. Mas caso ela seja plantada em calçadas com fiação, é necessário podá-la regularmente.",
    icon:icon1,
    id:1,
    localizacao:'',
  },
  {
    name: "Quaresmeira (Tibouchina granulosa)",
    image: arvore2,
    description:"A Quaresmeira é mais um dos tipos de árvores nativas indicadas para a arborização urbana, pois não apresenta raízes agressivas, tem fácil manutenção e crescimento lento. Sua altura fica entre 8 a ",
    icon:icon1,  
    id:2,
    localizacao:'',
    },
  {
    name: "Jacarandá de Minas (Jacaranda Cuspidifolia)",
    image: arvore3,
    description: "O Jacarandá de Minas pode atingir até 10 m de altura. Por não ter raízes agressivas e apresentar boa resistência à poluição, a espécie é bastante utilizada na arborização urbana de grandes cidade",
    icon:icon1,
    id:3,
    localizacao:'',
  },
  {
    name: "Sibipiruna (Caesalpinia Peltophoroides)",
    image: arvore4,
    description: "Esse é um dos tipos de árvores nativas frequentemente confundida com o Pau-Brasil (Ceasalpinia echimata) devido a semelhança de suas folhas. A espécie tem uma altura média de 8 m",
    icon:icon1,
    id:4,
    localizacao:'',
  },
  {
    name: "Manacá da Serra (Tibouchina mutabilis)",
    image: arvore5,
    description: "Devido essa característica tão inusitada, ela é um dos tipos de árvores nativas mais utilizadas em projetos de paisagismo. A espécie também é favorável para a arborização urbana, pois apresenta raízes pouco agressivas. Sua altura pode chegar a 12 m",
    icon:icon1,
    id:5,
    localizacao:'',
  },
  {
    name: "Pata de Vaca (Bauhinia variegata)",
    image: arvore1,
    description: "Essa é uma das árvores nativas indicadas para arborização urbana, já que seu porte pode chegar apenas a 9 m. Mas caso ela seja plantada em calçadas com fiação, é necessário podá-la regularmente.",
    icon:icon1,
    id:6,
    localizacao:'',
  },
  {
    name: "Quaresmeira (Tibouchina granulosa)",
    image: arvore2,
    description:"A Quaresmeira é mais um dos tipos de árvores nativas indicadas para a arborização urbana, pois não apresenta raízes agressivas, tem fácil manutenção e crescimento lento. Sua altura fica entre 8 a ",
    icon:icon1,  
    id:7,
    localizacao:'',
    },
  {
    name: "Jacarandá de Minas (Jacaranda Cuspidifolia)",
    image: arvore3,
    description: "O Jacarandá de Minas pode atingir até 10 m de altura. Por não ter raízes agressivas e apresentar boa resistência à poluição, a espécie é bastante utilizada na arborização urbana de grandes cidade",
    icon:icon1,
    id:8,
    localizacao:'',
  },
  {
    name: "Sibipiruna (Caesalpinia Peltophoroides)",
    image: arvore4,
    description: "Esse é um dos tipos de árvores nativas frequentemente confundida com o Pau-Brasil (Ceasalpinia echimata) devido a semelhança de suas folhas. A espécie tem uma altura média de 8 m",
    icon:icon1,
    id:9,
    localizacao:'',
  },
  {
    name: "Manacá da Serra (Tibouchina mutabilis)",
    image: arvore5,
    description: "Devido essa característica tão inusitada, ela é um dos tipos de árvores nativas mais utilizadas em projetos de paisagismo. A espécie também é favorável para a arborização urbana, pois apresenta raízes pouco agressivas. Sua altura pode chegar a 12 m",
    icon:icon1,
    id:10,
    localizacao:'',
  },
];
