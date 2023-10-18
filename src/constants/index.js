import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    javascriptCertification,
    UI,
    responsive,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    computerLOGO,
    bTech,
    higherEducation,
    portfolio,
    miniprojects,
    threejs,
    youtubeClone,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer" ,
      icon: creator,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
      title: "Learner",
      company_name: "Self Learner",
      icon: computerLOGO,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Graduated in Computer Science; skilled in JavaScript and front-end tech including React.js, HTML5, CSS, Bootstrap, and Tailwind CSS.",
        "Contributed to 10+ projects using Git/GitHub; strong in analysis, testing, and documentation.",
        "Showcased problem-solving acumen complemented by a solid foundation in requirements analysis, testing, and documentation.",
        "Completed 4 advanced courses, highlighting a commitment to continuous learning.",
        "Known for communication and teamwork, represented college at Jaipur Tech Fest, and achieved top academic ranks.",
      ],
    },
    {
      title: "Bachelor's of Technology",
      company_name: "Jagannth University",
      icon: bTech,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Underwent comprehensive training in core computer science subjects, including Operating Systems, Database Systems, Distributed Systems, Programming Languages, Software Development Life Cycle, and Computer Systems and Networking.",
        "Developed proficiency in multiple programming languages and technologies.",
        "Participated in team-based projects, fostering skills in collaboration.",
        "Maintained a consistent academic performance, achieving top rank.",
      ],
    },
    {
      title: "School Education",
      company_name: "Maharashtra Board of Higher Education",
      icon: higherEducation,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Completed core curriculum with a strong emphasis on math, science, and languages, laying a solid foundation for future academic pursuits.",
        "Actively participated in extracurricular activities, honing skills in teamwork, leadership, and time management.",
        "Developed strong communication and interpersonal skills through presentations, group projects, and public speaking events.",
        "Benefitted from a diverse learning environment, fostering a culture of respect, understanding, and shared learning.",
      ],
    },
    
  ];
  
  const certifications = [
    {
      certification: "Javascript Algorithms and Data Structure",
      institution: "FreeCodeCamp",
      year: "2023",
      image: javascriptCertification,
      link: "https://www.freecodecamp.org/certification/fcc5dc2e7e1-59d2-4f67-b3db-fd5389ae2c26/javascript-algorithms-and-data-structures",
    },
    {
      certification: "Responsive Web design",
      institution: "FreeCodeCamp",
      year: "2023",
      image: responsive,
      link: "https://www.freecodecamp.org/certification/fcc5dc2e7e1-59d2-4f67-b3db-fd5389ae2c26/responsive-web-design",
    },
    {
      certification: "UI/UX Development",
      institution: "Great Learning",
      year: "2023",
      image: UI,
      link: "https://olympus.mygreatlearning.com/courses/55928/certificate",
    },
    
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "The portfolio integrates advanced software development with modern UI/UX designs, utilizing React.js for interactivity. TailwindCSS and Bootstrap ensure responsiveness, while ThreeJS brings striking 3D visualizations to life. Framer Motion's animations elevate the user experience, creating a vivid and memorable browsing journey.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sammywysor",
    },
    {
      name: "Youtube UI Clone",
      description:
        "This web app, inspired by YouTube, is built with React, using Flexbox for adaptive layouts. The backend is powered by Firebase Realtime Database with strong security. Navigation uses react-router-dom for smooth transitions. Its design mimics YouTube's look with custom CSS and is deployed through Firebase Hosting.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: youtubeClone,
      source_code_link: "https://github.com/sammywysor/Youtube",
    },
    {
      name: "Mini Projects",
      description:
      "Mini-projects showcase diverse features effectively. The 'To-Do-List' efficiently organizes tasks, 'Bubble Game' offers engaging gameplay, and 'Cash Register' meticulously handles transactions. 'Image Search App' enables visual queries, 'Phone Validator' checks contacts, and the 'Analog Clock with Sound' with visual and sound."
      ,
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
          name: "JavaSCript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: miniprojects,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, certifications, projects };