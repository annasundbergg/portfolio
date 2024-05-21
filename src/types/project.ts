export type Project = {
    title: string;
    description: string;
    link: string;
    github?: string;
    image: { src: string; alt: string; width: number; height: number };
    skills: string[];
}

export const projectImgs = [
    {
        src: "/movierater.png",
        alt: "img of app movierater on desktop",
        width: 600,
        height: 400
    },
    {
        src: "/weather.png",
        alt: "img of weather app on mobile device",
        width: 100,
        height: 300
    },
    {
        src: "/restcountries.png",
        alt: "img of rest countries on dektop",
        width: 600,
        height: 400
    },
    {
        src: "/Tamagotchi.png",
        alt: "img of Tamagotchi on desktop",
        width: 600,
        height: 400
    },
    {
        src: "/weather2.png",
        alt: "img of weather app on mobile device in darkmode",
        width: 270,
        height: 350
    },

]

export const projectItems = [
    {
        title: "Movierater",
        description: "A web application created with focus on exploring the functionalities of Google Cloud Platform. The project consisted of developing frontend using React and Typescript as well as create and integrate an API using Node.js. It allows fetching and editing data from GCP Firestore through CRUD operations, building a CI/CD pipeline and implementing authentication using Microsoft Entra ID. A logged in user can delete and edit reviews.",
        link: "https://front-end-v2xut6a4jq-lz.a.run.app/",
        github: "",
        image: {
            src: "/movierater.png",
            alt: "image of project Movierater",
            width: 600,
            height: 400
        },
        skills: ["React", "Typescript", "Express.js", "Node.js", "GCP", "CI/CD"]

    },

    {
        title: "Weather App",
        description: "A group project created to practise collaboration and version control. Our weather app shows current and future weather conditions for both the user's location and searched places worldwide. Utilizing the openweathermap API, it features responsive design, a graphical profile, mockup, GitHub documentation, Kanban board, visible code contributions, and a completed collaboration review survey.",
        link: "https://signelindstrom.github.io/vsc-mp1-grupp3/",
        github: "https://github.com/signelindstrom/vsc-mp1-grupp3",
        image: {
            src: "/weather.png",
            alt: "img of weather app on mobile device",
            width: 100,
            height: 300
        },
        skills: ["Version Control", "CSS", "JavaScript", "API Integration"]

    },
    {
        title: "Tamagotchi",
        description: "The project focuses on utilizing classes to create Tamagotchis. Users can customize names and select from two types of Tamagotchis. The hunger and happiness levels decrease over time; hitting zero results in death. The implementation emphasizes the importance of object-oriented programming and clear GUI.",
        link: "https://annasundbergg.github.io/FE22-js2-mp2-anna-sundberg/",
        github: "https://github.com/annasundbergg/FE22-js2-mp2-anna-sundberg",
        image: {
            src: "/Tamagotchi.png",
            alt: "img of Tamagotchi on desktop",
            width: 600,
            height: 400
        },
        skills: ["HTML", "CSS", "JavaScript", "OOP"]

    },
    {
        title: "Countries",
        description: "The project, designed for learning API integration, JSON parsing, and asynchronous JavaScript with fetch and promises, utilizes REST Countries API version 3 (Restcountry v3). Upon user search for a language, it displays official name, capital, population, and flag image for matching countries, highlighting the one with the highest population.",
        link: "https://annasundbergg.github.io/fe22-js1-mp3-anna-sundberg/",
        github: "https://github.com/annasundbergg/fe22-js1-mp3-anna-sundberg",
        image: {
            src: "/restcountries.png",
            alt: "image of project Countries",
            width: 600,
            height: 400
        },
        skills: ["RESTful API", "CSS", "JavaScript"]
    },
    {
        title: "My Portfolio",
        description: "This project is built with Next.js, Typescript and Tailwind. It is hosted on Google Cloud Platform.",
        link: "https://annasundberg.se/",
        github: "https://github.com/annasundbergg/portfolio",
        image: {
            src: "/portfolio.png",
            alt: "image of project Portfolio",
            width: 100,
            height: 300
        },
        skills: ["Next.js", "Tailwind CSS", "Typescript", "Google Cloud Platform"]
    },
];

