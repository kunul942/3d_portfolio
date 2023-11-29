import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    nextjs,

    docker,
    carrent,
    jobit,
    tripguide,
    weddingJoseDaniel,
    tsks,
    calendar,
    taller,
    projectWeddingJoseDaniel,
    projectCalendar,
    projectTallerJR,
    projectJournal,
    projectTsks
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Freelancer Developer",
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },  
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "FULL STACK ENGINEER",
      company_name: "Tsks Chat Real Time",
      icon: tsks,
      iconBg: "#E6DEDD",
      date: "August 2023 - November 2023",
      points: [{text:'I conceptualized, designed, and implemented Tsks, a dynamic application that seamlessly integrates task management and real-time communication. This multifaceted platform offers users a comprehensive solution for organizing their tasks efficiently while facilitating instant collaboration through a robust real-time chat feature.'}],
    },
    {
      title: "FRONTEND ENGINEER",
      company_name: "Wedding Jose Daniel",
      icon: weddingJoseDaniel,
       iconBg: "#383E56",
      date: "January 2023 - June 2023",
      points: [{ text:`Collaborated closely with Jose Daniel to understand his brand identity, style, and specific requirements for the website. Conducted in-depth consultations to align the design with the photographer's artistic vision and business goals. Implemented an intuitive navigation structure, making it easy for visitors to explore different sections of the website, view portfolios, and access essential information such as contact details and service offerings.` }]
      ,
    },
    {
      title: "FULL STACK ENGINEER",
      company_name: "Calendar",
      icon: calendar,
      iconBg: "#383E56",
      date: "November 2022 - February 2023",
      points: [{ text: 'Implemented a user-centric design approach, ensuring an intuitive and visually appealing interface for a seamless user experience. Incorporated customizable features to allow users to tailor the calendar to their unique preferences. Engineered a robust set of features, including event creation, reminders, recurring events, and synchronization capabilities. Integrated advanced functionalities such as color-coded categorization, priority settings, and collaborative sharing options.' }],
    },
    {
      title: "FRONTEND ENGINEER",
      company_name: "Taller JR",
      icon: taller,
      iconBg: "#E6DEDD",
      date: "Jule 2021 - November 2022",
        points: [{text: `Creating an online platform that not only showcased the shop's services but also enhanced its digital presence, I successfully delivered a visually appealing, user-friendly, and feature-rich website. Ensured seamless user experiences, whether visitors accessed the website on desktops, tablets, or smartphones`}],
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
    // {
    //   name: "Wedding Jose Daniel",
    //   description:
    //     "Wedding Jose Daniel is a professionally crafted React-based photography website, elegantly styled with Tailwind CSS. Experience seamless navigation and visually captivating displays, showcasing the timeless artistry of Jose Daniel's wedding photography.",
    //     tags: [
    //       {
    //         name: "react",
    //         color: "blue-text-gradient",
    //       },
    //       {
    //         name: "javascript",
    //         color: "green-text-gradient",
    //       },
    //       {
    //         name: "tailwind",
    //         color: "pink-text-gradient",
    //       },
    //       {
    //         name: "webdevelopment",
    //         color: "blue-text-gradient",
    //       },
    //       {
    //         name: "tailwind",
    //         color: "green-text-gradient",
    //       },
    //     ],
    //   image: projectWeddingJoseDaniel,
    //   url: 'https://weddingjosedaniel.vercel.app/',
    //   source_code_link: "https://github.com/kunul942/jose-daniel-photography",
    // },
    // {
    //   name: "Taller JR",
    //   description:
    //     "Taller JR is a website developed using React, JavaScript, and styled with Tailwind CSS. Explore a seamless and visually appealing interface and technology to showcase the automotive expertise and services offered by Taller JR.",
    //     tags: [
    //       {
    //         name: "react",
    //         color: "blue-text-gradient",
    //       },
    //       {
    //         name: "javascript",
    //         color: "green-text-gradient",
    //       },
    //       {
    //         name: "tailwind",
    //         color: "pink-text-gradient",
    //       },
    //       {
    //         name: "webdevelopment",
    //         color: "blue-text-gradient",
    //       },
    //       {
    //         name: "tailwind",
    //         color: "green-text-gradient",
    //       },
    //     ],
    //   image: projectTallerJR,
    //   url: 'https://taller-jr.vercel.app/',
    //   source_code_link: "https://github.com/kunul942/tallerJr",
    // },
    {
      name: "Calendar",
      description:
        "An advanced calendar application engineered with React and TypeScript on the frontend, coupled with a robust backend in Node and Express. Experience seamless scheduling and organization through an intuitive interface.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "javascript",
            color: "green-text-gradient",
          },
          {
            name: "redux",
            color: "pink-text-gradient",
          },
          {
            name: "nodeJS",
            color: "blue-text-gradient",
          },
          {
            name: "mongoDB",
            color: "green-text-gradient",
          },
          {
            name: "restapis",
            color: "pink-text-gradient",
          },
          {
            name: "express",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
      image: projectCalendar,
      url: 'https://calendar-app-taupe.vercel.app/',
      source_code_link: "https://github.com/kunul942/calendar-app",
    },
    {
      name: "Journal",
      description:
        "Your personal sanctuary for daily reflections. Crafted with React and JavaScript, adorned with the sleek aesthetics of Material UI, and backed by the reliability of Firebase. Immerse yourself in a seamless and secure journaling experience, seamlessly capturing and organizing your daily thoughts.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "javascript",
            color: "green-text-gradient",
          },
          {
            name: "redux",
            color: "pink-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "express",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
      image: projectJournal,
      url: 'https://journal-app-alpha-gules.vercel.app/',
      source_code_link: "https://github.com/kunul942/Journal-App",
    },
    {
      name: "Tsks",
      description:
        "Elevate your productivity with this dynamic Todo App featuring real-time chat functionality. built with React and TypeScript on the frontend, and powered by Node, Express, and sockets on the backend. Experience seamless task management and instant collaboration in one intuitive platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "nodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "socket",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: projectTsks,
      url: 'https://todo-app-phi-ashen.vercel.app/',
      source_code_link: "https://github.com/kunul942/Todo-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };