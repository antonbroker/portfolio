export const STACK = [
  { name: "Node.js",    cat: "Backend"  },
  { name: "Express",    cat: "Backend"  },
  { name: "PHP",        cat: "Backend"  },
  { name: "Laravel",    cat: "Backend"  },
  { name: "React",      cat: "Frontend" },
  { name: "TypeScript", cat: "Frontend" },
  { name: "Redux",      cat: "Frontend" },
  { name: "MongoDB",    cat: "Data"     },
  { name: "MySQL",      cat: "Data"     },
  { name: "Docker",     cat: "DevOps"   },
  { name: "Git",        cat: "DevOps"   },
  { name: "OpenAI API", cat: "AI"       },
];

export const PROJECTS = [
  {
    index: "01",
    title: "E-Commerce Platform",
    year: "2025",
    stack: ["Node.js", "Express", "React", "Redux", "MongoDB", "OpenAI API", "Docker"],
    bullets: [
      "Role-based access control (Admin / Customer) with JWT authentication.",
      "Layered REST API architecture: routes → controllers → services → repository.",
      "MongoDB aggregation pipelines powering real-time admin analytics dashboard.",
      "OpenAI API integration for personalised product recommendations.",
      "Deployed on Render (backend) and Vercel (frontend).",
    ],
    live: "https://e-commerce-ski.vercel.app/",
    github: "https://github.com/antonbroker",
  },
  {
    index: "02",
    title: "Factory Management System",
    year: "2024",
    stack: ["Node.js", "Express", "React", "TypeScript", "MongoDB", "OpenAI API", "Docker"],
    bullets: [
      "Internal employee management and shift-scheduling system.",
      "Clean layered architecture with async service layer and Mongoose ODM.",
      "OpenAI LLM integration for automatic shift generation.",
      "Excel export, JWT auth, containerised with Docker.",
      "React + TypeScript frontend consuming backend via Axios.",
    ],
    live: "https://factory-management-system-eight.vercel.app/",
    github: "https://github.com/antonbroker",
  },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Platforma365",
    type: "Startup · Tel Aviv",
    period: "Dec 2024 – Apr 2025",
    bullets: [
      "Built internal tools and customer onboarding forms in PHP (Laravel Blade) + JavaScript.",
      "Developed backend features and contributed to existing REST APIs: validation, routes, controllers.",
      "Implemented data extraction and cleaning pipelines using cURL, Regex and JSON — transforming unstructured legal data into clean datasets.",
      "Worked in Agile team using Git and Jira.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "B.Sc. Computer Science",
    school: "Holon Institute of Technology (HIT)",
    period: "2021 – 2024",
    note: "GPA 88",
  },
  {
    degree: "Full-Stack AI Development Program",
    school: "Yaniv Arad",
    period: "2025",
    note: "Node.js · React · REST APIs · AI integration",
  },
];
