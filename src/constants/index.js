import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  ostello,
  carrent,
  threejs,
  bag,
  nextjs,
  bootstrap,
  sass,
  styledcomponents,
  jest,
  web2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Translator",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Styled Components",
    icon: styledcomponents,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Ostello",
    company_url:'https://www.ostello.co.in/',
    icon: ostello,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end / React Native Developer",
    company_name: "Beyond Apps Group",
    company_url:'https://www.beyond-apps-group.com/',
    icon: bag,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Creating user interfaces using React.js and React Native frameworks to build web and mobile applications respectively.",
      "Creating modular components that can be easily integrated into different parts of the application.",
      "Minimizing rendering and re-rendering, optimizing component life cycles, and implementing performance best practices to ensure fast and efficient application performance.",
      "Writing unit tests and performing debugging to identify and fix issues within the codebase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Shop",
    description:
      "Web-based platform that allows users to search, car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "rapid_api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "headless_ui",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/amrrashor/car-shop/tree/master",
    url:'https://car-shop-one.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };