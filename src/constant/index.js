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
      title: "WEDDING JOSE DANIEL",
      // company_name: "Starbucks",
      icon: weddingJoseDaniel,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        {
          title: 'Calient Collaboration:',
          text: ' Worked closely with Jose Daniel to understand his vision, preferences, and specific requirements, ensuring a personalized and tailored photography experience for his wedding ceremonies.'
        },
        {
          title: 'Project Planning and Coordination:',
          text: ' Developed a detailed project plan, outlining timelines, shot lists, and logistical considerations. Coordinated with the photography team to ensure a smooth workflow on the day of the event.'
        },
        {
          title: 'Creative Direction:',
          text: ' Provided creative direction to the photography team, contributing to the development of a unique visual narrative that captured the emotions and moments of the wedding day.'
        },
        {
          title: 'Brand Representation:',
          text: ' Upheld the professional image of the freelance photography service, contributing to positive word-of-mouth referrals and potential future collaborations.'
        },
      ],
    },
    {
      title: "TALLER JR",
      // company_name: "Tesla",
      icon: taller,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        {
          title: 'Brand Positioning:',
          text: " Conducted a thorough analysis of Taller JRs strengths, unique selling points, and market positioning. Developed and implemented a strategic brand positioning that highlighted the shop's expertise and commitment to customer satisfaction." 
        },
        {
          title: 'Marketing Strategy Development:',
          text: ' Devised a tailored marketing strategy that encompassed both online and offline channels. This included social media campaigns, targeted advertising, and traditional marketing collateral to maximize reach and engagement.'
        },
        {
          title: 'Online Presence Enhancement:',
          text: " Overhauled Taller JR's online presence by optimizing their website, creating engaging social media content, and implementing effective search engine optimization (SEO) techniques. This resulted in increased visibility and online traffic."
        },
        {
          title: 'Collaboration with Stakeholders:',
          text: ' Worked closely with the Taller JR team to understand their goals and gather insights into their customer base. Fostered strong communication channels to ensure alignment with the brand vision throughout the project.'
        },
      ],
    },
    {
      title: "CALENDAR",
      // company_name: "Shopify",
      icon: calendar,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        {
          title: 'Client Collaboration:',
          text: " Collaborated closely with the client to understand their specific requirements, preferences, and vision for the personal calendar application. Conducted regular feedback sessions to ensure alignment with the client's needs throughout the development process." 
        },
        {
          title: 'User-Centric Design:',
          text: ' Implemented a user-centric design approach, ensuring an intuitive and visually appealing interface for seamless user experience. Incorporated customizable features to allow users to tailor the calendar to their unique preferences.'
        },
        {
          title: 'Functionality Development:',
          text: " Engineered a robust set of features, including event creation, reminders, recurring events, and synchronization capabilities. Integrated advanced functionalities such as color-coded categorization, priority settings, and collaborative sharing options."
        },
        {
          title: 'Cross-Platform Compatibility:',
          text: ' Ensured cross-platform compatibility, making the calendar application accessible across various devices and operating systems. Implemented responsive design principles for optimal usability on both desktop and mobile platforms.'
        },
      ],
    },
    {
      title: "TSKS",
      // company_name: "Meta",
      icon: tsks,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        {
          title: 'Feature-rich Task Management:',
          text: ' Engineered a sophisticated task management system that allows users to create, prioritize, and categorize tasks. Implemented features such as due dates, reminders, and task completion tracking to enhance productivity.'
        },
        {
          title: 'Intuitive User Interface: ',
          text: ' Designed an intuitive and visually appealing user interface for a seamless user experience. Prioritized user-centric design principles to ensure ease of navigation and accessibility across various devices.'
        },
        {
          title: 'Real-time Chat Functionality:',
          text: ' Integrated a real-time chat feature, enabling users to communicate and collaborate seamlessly within the app. Utilized WebSocket technology to facilitate instant messaging, ensuring quick and efficient communication.'
        },
        {
          title: 'Collaborative Task Management: ',
          text: ' Enabled collaborative task management by allowing users to share tasks and projects with team members. Integrated features for assigning tasks, commenting on tasks, and tracking updates in real-time.'
        },
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
      name: "Wedding Jose Daniel",
      description:
        "Wedding Jose Daniel is a professionally crafted React-based photography website, elegantly styled with Tailwind CSS. Experience seamless navigation and visually captivating displays, showcasing the timeless artistry of Jose Daniel's wedding photography.",
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
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "webdevelopment",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "green-text-gradient",
          },
        ],
      image: projectWeddingJoseDaniel,
      url: 'https://weddingjosedaniel.vercel.app/',
      source_code_link: "https://github.com/kunul942/jose-daniel-photography",
    },
    {
      name: "Taller JR",
      description:
        "Taller JR is a website developed using React, JavaScript, and styled with Tailwind CSS. Explore a seamless and visually appealing interface and technology to showcase the automotive expertise and services offered by Taller JR.",
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
            name: "tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "webdevelopment",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "green-text-gradient",
          },
        ],
      image: projectTallerJR,
      url: 'https://taller-jr.vercel.app/',
      source_code_link: "https://github.com/kunul942/tallerJr",
    },
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