import { ImageProps } from "react-native";

export interface Arvores {
  name: string;
  image: ImageProps["source"];
  description: string;
  icon: ImageProps["source"];
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
  },
  {
    name: "Quaresmeira (Tibouchina granulosa)",
    image: arvore2,
    description:"A Quaresmeira é mais um dos tipos de árvores nativas indicadas para a arborização urbana, pois não apresenta raízes agressivas, tem fácil manutenção e crescimento lento. Sua altura fica entre 8 a ",
      icon:icon1,  
    },
  {
    name: "Jacarandá de Minas (Jacaranda Cuspidifolia)",
    image: arvore3,
    description: "O Jacarandá de Minas pode atingir até 10 m de altura. Por não ter raízes agressivas e apresentar boa resistência à poluição, a espécie é bastante utilizada na arborização urbana de grandes cidade",
    icon:icon1,
  },
  {
    name: "Sibipiruna (Caesalpinia Peltophoroides)",
    image: arvore4,
    description: "Esse é um dos tipos de árvores nativas frequentemente confundida com o Pau-Brasil (Ceasalpinia echimata) devido a semelhança de suas folhas. A espécie tem uma altura média de 8 m",
    icon:icon1,
  },
  {
    name: "Manacá da Serra (Tibouchina mutabilis)",
    image: arvore5,
    description: "Devido essa característica tão inusitada, ela é um dos tipos de árvores nativas mais utilizadas em projetos de paisagismo. A espécie também é favorável para a arborização urbana, pois apresenta raízes pouco agressivas. Sua altura pode chegar a 12 m",
    icon:icon1,
  },
  // {
  //   name: "Espresso",
  //   image: espressoImage,
  //   description:
  //     "Who doesn’t love an espresso? This coffee drink is distinguished for its concentrated flavour, syrupy content and layer of foam. The espresso is usually denser in taste than coffee brewed by other methods and has more caffeine than any other coffee on this list. Fun fact: the espresso is the base for many other coffee drinks—such as the caffè latte, cappuccino, macchiato, mocha, flat white, and Americano.",
  // },
  // {
  //   name: "Doppio",
  //   image: doubleEspressoImage,
  //   description:
  //     "Simply known as the double espresso, Doppio means “double” in Italian explains the commonly called a standard double — so double or nothing. The doppio is two espresso shots in one single-serve capsule. It has a stronger aroma and more intense taste and will satisfy a coffee craving of any size. So If you enjoy an intense and robust Italian-style espresso doppio is the coffee drink for you.",
  // },
  // {
  //   name: "Cortado",
  //   image: cortadoImage,
  //   description:
  //     "Like yin and yang, the cortado is the perfect balance of espresso and warm steamed milk. Cortado is a Spanish type of coffee made by a ratio of espresso to milk that yields a unique flavour where the fineness of the coffee triumphs savour, while the finish is ever so delicate from the steamed milk. Cortado is also one of those coffees that are consumed leisurely in coffee shops.",
  // },
  // {
  //   name: "Mocha",
  //   image: mochaImage,
  //   description:
  //     "The mocha is a chocolate espresso drink with steamed milk and foam and is an exquisite mix of coffee and hot chocolate. The chocolate powder gives the drink a potent and creamy flavour and axes the acidity of the espresso. FYI, the mocha is usually considered the status-symbol coffee drink ordered. So if you’re wanting a mix of coffee, hot chocolate and a hint of elegance, choose the mocha.",
  // },
  // {
  //   name: "Red Eye",
  //   image: redEyeImage,
  //   description:
  //     "The red eye is an American type of coffee that combines brewed coffee with an espresso shot. This coffee combination is stronger than regular coffee and is a more potent stimulant that helps improve concentration and keeps you awake during the night when catching up on work & assignments. This coffee drink also has stronger variations such as the black eye, dead eye and green eye.",
  // },
];
