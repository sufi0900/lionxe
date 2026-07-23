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
    title: "Pillars",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Logic & Longevity",
        path: "/long-term-logic",
        newTab: false,
      },
      {
        id: 22,
        title: "Internal Optimization",
        path: "/internal-optimization",
        newTab: false,
      },
      {
        id: 23,
        title: "Non-Negotiable Integrity",
        path: "/non-negotiable-integrity",
        newTab: false,
      },
      {
        id: 24,
        title: "Exceptional Distinction",
        path: "/exceptional-distinction",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Rubric",
    path: "/rubric",
    newTab: false,
  },
  {
    id: 4,
    title: "Framework",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "The LIONXE Framework",
        path: "/framework",
        newTab: false,
      },
      {
        id: 42,
        title: "Review Standards",
        path: "/review-standards",
        newTab: false,
      },
      {
        id: 43,
        title: "Scorecard System",
        path: "/scorecard-system",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Audits",
    path: "/audits",
    newTab: false,
  },
  {
    id: 6,
    title: "Founder",
    path: "/founder",
    newTab: false,
  },
  {
    id: 7,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 71,
        title: "About LIONXE",
        path: "/about",
        newTab: false,
      },
      {
        id: 72,
        title: "FAQ",
        path: "/faq",
        newTab: false,
      },
      {
        id: 73,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];

export default menuData;