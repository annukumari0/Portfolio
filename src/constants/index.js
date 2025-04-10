import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    java,
    git,
    dietician,
    figma,
    multiSoft,
    jobit,
    tripguide,
    threejs,
    ens
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Data Structures & Algorithms",
      icon: creator,
    }
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "MultiSoft Systems",
      icon: multiSoft,
      iconBg: "#E6DEDD",
      date: "June 2024 - Aug 2024",
      points: [
        "Worked with a team of two talented individuals and assumed the role of designer and developer in creating responsive front-end solutions for both client and admin websites from the ground up.",
        "Utilized HTML, CSS, JavaScript, ReactJS for the front-end, showcasing both technical skills and teamwork in delivering the project.",
      ],
    }
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
      name: "PERSONAL FOOD APP",
      description:
        "Built a Swiggy-inspired app with live restaurant and food details using Swiggy’s API. Features include search, item view, and add-to-cart functionality.",
      tags: [
        {
          name: "React.js, HTML, CSS, Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Swiggy's API",
          color: "green-text-gradient",
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/annukumari0/Food-App",
      live_link : "https://food-app-nine-ochre.vercel.app/"
    },

    {
      name: "Art School",
      description:
        "Art School platform featuring a dynamic homepage and real-time product data fetching. Enhanced user engagement by displaying product details.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/annukumari0/ART-SCHOOL",
      live_link : "https://art-school-delta.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  