import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    go,
    c,
    cpp,
    flask,
    sqlite,
    aws,
    docker,
    firebase,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sqlite,
        name: "SQLite",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend/Hosting",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
];

export const experiences = [
    {
        title: "Software Engineering Fellow",
        company_name: "Headstarter Fellowship",
        icon: "placeholder",  // Placeholder for now
        iconBg: "#a2d2ff",  // Adjust as needed for visual preference
        date: "July 2024 - September 2024",
        points: [
            "Led the development of 5 AI-driven projects using React, Next.js, Firebase, and Vercel.",
            "Engineered a custom customer support agent with a RAG pipeline using OpenAI and Pinecone.",
            "Developed a dynamic flashcard SaaS product utilizing Llama 3.1 and Stripe for future payment processing.",
            "Designed a web scraper using a custom API and AI combination with Llama 3.1 for data extraction on Rate My Professor.",
            "Currently scaling applications with AI integrations and a Plaid-based expense tracker.",
        ],
    },
    {
        title: "Lead Developer",
        company_name: "CheckoutBot Framework",
        icon: "placeholder",  // Placeholder for now
        iconBg: "#fbc3bc",
        date: "May 2024 - June 2024",
        points: [
            "Developed an AI-enhanced checkout bot framework that reduced bot development time by 50%.",
            "Created a responsive interface using Flask and Jinja2 with Git-based version control.",
            "Contributed to the open-source community by sharing code and gathering feedback.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Freelance",
        icon: "placeholder",  // Placeholder for now
        iconBg: "#b7e4c7",
        date: "December 2023 - February 2024",
        points: [
            "Built a full-stack web application using Flask, React, and SQLite with RESTful APIs.",
            "Deployed a web scraper using Docker and Nginx to improve scalability and security.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Costivity",
        icon: "placeholder",  // Placeholder for now
        iconBg: "#accbe1",
        date: "Ongoing",
        points: [
            "Developed an expense management web app using TypeScript and Next.js.",
            "Integrated the Plaid API for real-time financial tracking and user analytics.",
            "Working on enhancing the app with AI-driven insights and analytics for improved user experience.",
        ],
    }
];

export const projects = [
    {
        iconUrl: "https://costivity.com/favicon.ico",
        theme: 'btn-back-blue',
        name: 'Costivity',
        description: 'Developed an expense management web app using TypeScript and Next.js, integrating Plaid API for real-time financial tracking and user analytics.',
        link: 'https://costivity.com',
    },
    {
        iconUrl: "path-to-icon",
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Created a web app that tracks and alerts users on price changes for products on Amazon using Node.js and React.',
        link: 'https://github.com/YourGitHubUsername/pricewise',
    },
    {
        iconUrl: "path-to-icon",
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Built a full-stack clone of the discussion platform Threads, allowing users to engage in threaded conversations using Go and React.',
        link: 'https://github.com/YourGitHubUsername/threads',
    },
    {
        iconUrl: "path-to-icon",
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Developed a social media platform like Instagram using Go and React, enabling photo sharing and social interactions.',
        link: 'https://github.com/YourGitHubUsername/social_media_app',
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Farzin312',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/farzin-shifat-5b7b43207',
    }
];
