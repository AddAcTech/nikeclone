import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#products", label: "Productos" },
  { href: "#about-us", label: "Nosotros" },
  { href: "#contact-us", label: "Contactanos" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Modelos" },
  { value: "500+", label: "Tiendas" },
  { value: "250k+", label: "Clientes" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Envio gratuito",
    subtext:
      "Disfrute de compras sin problemas con nuestro servicio de envío gratuito.",
  },
  {
    imgURL: shieldTick,
    label: "Pagos seguros",
    subtext:
      "Experimente transacciones sin preocupaciones con nuestras opciones de pago seguras.",
  },
  {
    imgURL: support,
    label: "Amamos ayudarte",
    subtext: "Nuestro equipo está aquí para ayudarlo en cada paso del camino.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Elon Musk",
    rating: 4.5,
    feedback:
      "La atención al detalle y la calidad del producto superaron mis expectativas. ¡Muy recomendable!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "El producto no solo cumplió sino que superó mis expectativas. ¡Definitivamente seré un cliente recurrente!",
  },
];

export const footerLinks = [
  {
    title: "Productos",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { name: "Nosotros", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "Politica de privacidad", link: "/" },
      { name: "Pagos", link: "/" },
    ],
  },
  {
    title: "Ponte en contacto",
    links: [
      {
        name: "aguilar.chavez.alexis.daniel@gmail.com",
        link: "aguilar.chavez.alexis.daniel@gmail.com",
      },
      { name: "+525514942604", link: "tel:+525514942604" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
