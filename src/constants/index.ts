import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    delay: 0.3,
  },
];

// export const reviews = [
//   {
//     imgURL: reviewer1,
//     customerName: "Morich Brown",
//     rating: 3.8,
//     feedback:
//       "The attention to formula and the quality of the product exceeded my expectations. Highly recommended!",
//   },
//   {
//     imgURL: reviewer2,
//     customerName: "Emily Monges",
//     rating: 4.5,
//     feedback:
//       "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
//   },
// ];

export const footerLinks = [
  {
    title: "Help",
    links: [
      { name: "About us", link: "/aboutus" },
      { name: "FAQs", link: "/faqs" },
      { name: "Policies", link: "/policies" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "trackIt@info.com", link: "mailto:trackIt@info.com" },
      { name: "+92554559994", link: "tel:+92554559994" },
    ],
  },
];

export const socialMedia = [
  { logo: FaSquareFacebook, alt: "facebook logo" },
  { logo: FaXTwitter, alt: "twitter logo" },
  { logo: AiFillInstagram, alt: "instagram logo" },
];
