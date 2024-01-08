import {
  mobile,
  backend,
  web,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  shopify,
  reactstrap,
  mui,
  policypak,
  netwrix,
  whiteMd,
  impex,
  dfysass,
  intactSolutions,
  serviceBuddy

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
    title: "Ui Developer",
    icon: web,
  },
  {
    title: "Wordpress Frontend Developer",
    icon: mobile,
  },
  {
    title: "Slicing with Figma",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "React Bootstrap",
    icon: reactstrap,
  },
  {
    name: "React Material",
    icon: mui,
  },
];

const experiences = [
  {
    title: "Frontend Ui Developer",
    company_name: "Egenie Next web solution",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2018 - Present",
    points: [
      "Maintaining web applications Netwrix.com, policypak.com",
      "Policypak has different products one in wordpress other in Reactjs and Codeigniter",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Ui Developer",
    company_name: "Greyloops",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Design the UI of MurrieWatch in ReactJs with Material Ui",
      "Evntc co. Design for multiple organizations like Google Meet This is also in Reactjs and Material Ui. ",
      "CirclePay its is wide plateform based in Angular js with Bootstrap and Material Ui monitoring and co-browsing respectively.",
      "Keywords is a project is based in Angular and Bootstrap.",
      "WhiteMedia is a project is based in Angular and Bootstrap.",
    ],
  },
  {
    title: "Assistant Software Engineer Ui",
    company_name: "eGenie Next Web Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2018 - May 2018",
    points: [
      "Learning Php, Wordpress And HTML CSS3 Bootstrap 3 and 4",
      "Also learn to Slice the Photoshop and learn PSD to Wordrpress",
      "Working on different test projects and live as well of wordpress make templates",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommended Usama for a Frontend Developer role. He greatly utilize his skills in the work.",
    name: "Mian Haseeb",
    designation: "Senior Full Stack Developer | Laravel | MERN ",
    image: "https://media.licdn.com/dms/image/D4E35AQH73w42Pc6zTg/profile-framedphoto-shrink_800_800/0/1680617432063?e=1703664000&v=beta&t=HLDwd176cofYxknr_rXsXCxbAkty6zjKp_uUNhBatXw",
  },
  {
    testimonial:
      "Muhammad is a great person to work with. Professional and always gets the job done.",
    name: "Sirbu Andrei",
    designation: "Web Team Lead",
    company: "Netwrix Corporation",
    image: "https://media.licdn.com/dms/image/D4E03AQFwFKNBmBE6iw/profile-displayphoto-shrink_200_200/0/1677508123158?e=1708560000&v=beta&t=KdxJeiY2VJC0dEV2eyZCappSCg0cTUMGyUeKb1JEJeo",
  },
  {
    testimonial:
      "I am pleased to recommend Usama for the exceptional work delivered by him on our project. Their technical expertise, results were truly commendable.",
    name: "Naseeb Ahmed Mian",
    designation: "Full Stack Developer",
    company: "GreyLoops",
    image: "https://media.licdn.com/dms/image/D4D03AQG15NNXk4y3Vg/profile-displayphoto-shrink_200_200/0/1697889441690?e=1708560000&v=beta&t=AHeqRE7iHGLqR2rVGfGAj5fZeu5P_UGWLwQaPuc1RKY",
  },
];

const projects = [
  {
    name: "PolicyPak",
    description:
      "Web-based platform that provide a security and manage your system more secure it has different products one in wordpress other in Reactjs and laravel.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: policypak,
    source_code_link: "https://www.policypak.com/",
  },
  {
    name: "Netwrix",
    description:
      "Web-based platform that provide a security and manage your system more secure it has provide different services, Netwrix is based on Yiee and Vue.",
    tags: [
      {
        name: "Vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: netwrix,
    source_code_link: "https://www.netwrix.com/",
  },
  {
    name: "White Media Label",
    description:
      "its provide services to all the medical related terms and contact them finds the arrangments and provide services, it is based in angular ,material and bootstrap as well.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "Materail",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: whiteMd,
    source_code_link: "https://app.whitelabelmd.com/#/",
  },
  {
    name: "impex",
    description:
      "Web application that based on buyer and sellers buyer want aynthing they can contact the sellers, sellers approves and then arrange orders for him. it is based in angular and bootstrap.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "Materail",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: impex,
    source_code_link: "http://3.94.170.67/auth/login",
  },
  {
    name: "DFY Sass",
    description:
      "A web base product that give you services on different platform on softwares to build something.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: dfysass,
    source_code_link: "https://dfysaas.com/",
  },
  {
    name: "Intact Solutions",
    description:
      "A comprehensive platform that allows offers to provide services related softwars builds and others.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "wp Bakery",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: intactSolutions,
    source_code_link: "https://intactwebsolutions.com/",
  },
  {
    name: "Service Buddy",
    description:
      "A comprehensive platform that allows offers to jobs for different occupations.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Beaver Bulider",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: serviceBuddy,
    source_code_link: "https://getservicebuddy.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
