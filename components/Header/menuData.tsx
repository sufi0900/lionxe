import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Framework",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "The LIONXE Framework",
        path: "/framework",
        newTab: false,
      },
      {
        id: 22,
        title: "Review Standards",
        path: "/review-standards",
        newTab: false,
      },
      {
        id: 23,
        title: "Scorecard System",
        path: "/scorecard-system",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Pillars",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Logic & Longevity",
        path: "/logic-longevity",
        newTab: false,
      },
      {
        id: 32,
        title: "Internal Optimization",
        path: "/internal-optimization",
        newTab: false,
      },
      {
        id: 33,
        title: "Non-Negotiable Integrity",
        path: "/non-negotiable-integrity",
        newTab: false,
      },
      {
        id: 34,
        title: "Exceptional Distinction",
        path: "/exceptional-distinction",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Audits",
    path: "/audits",
    newTab: false,
  },
  {
    id: 5,
    title: "Founder",
    path: "/founder",
    newTab: false,
  },
  {
    id: 6,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About LIONXE",
        path: "/about",
        newTab: false,
      },
      {
        id: 62,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
      {
        id: 63,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];

export default menuData;