import AlgoDraw from "../assets/AlgoDraw.jpg";
import soduku from "../assets/ai-soduku-solver.png";
import desktop from "../assets/desktop.jpg";
import imageGenerator from "../assets/imageGenerator.jpg";
import cvBuilder from "../assets/cvBuilder.jpg";
import portfolio from "../assets/portfolio.jpg";
import typescriptImg from "../assets/typescript.svg";
import tailwindImg from "../assets/tailwind.svg";
import reactImg from "../assets/react.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/javascript.svg";
import aceternityImg from "../assets/aceternity.png";
import toast from "../assets/toast.png";
import b1 from "../assets/b1.svg";
import b4 from "../assets/b4.svg";
import b5 from "../assets/b5.svg";
import girl from "../assets/Thinking face-bro.jpg";
// import ahmed from "../assets/AhmedKhaled.png";
import ouda from "../assets/ouda.jpg";
import gomaa from "../assets/gomaa.jpeg";
import ramadan from "../assets/ramadan.jpg";

export const navItems = [
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Testimonials", link: "#Testimonials" },
    { name: "Contact", link: "#Contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: b1,
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: b4,
    },

    {
        id: 5,
        title: "Currently developing an advanced anti-cheating detection system for online assessments.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: b5,
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Personal Portfolio",
        des: "A modern personal Portfolio",
        img: portfolio,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
            {
                id: 4,
                name: "Aceternity",
                image: aceternityImg,
            },
            {
                id: 5,
                name: "React Hot Toast",
                image: toast,
            },
        ],
        link: "/",
    },
    {
        id: 2,
        title: "CV Builder",
        des: "A React-based frontend web application for building and customizing CVs. This project allows users to create, edit, and download their CVs easily, featuring various templates and styling options.",
        img: cvBuilder,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
        ],
        link: "https://github.com/AhmedKhaledNasr74/cvbuilder",
    },
    {
        id: 3,
        title: "AlgoDraw",
        des: "Algo Draw is an Interactive algorithm visualizer to make it easy for anyone who needs to learn any algorithm,currently it contains sorting and searching algorithms, more algorithms will be coming soon.",
        img: AlgoDraw,
        iconLists: [
            {
                id: 1,
                name: "HTML",
                image: html,
            },

            {
                id: 2,
                name: "CSS",
                image: css,
            },
            {
                id: 3,
                name: "Javascript",
                image: js,
            },
        ],
        link: "https://ahmedkhalednasr74.github.io/Algo-Draw/index.html",
    },
    {
        id: 4,
        title: "Portfolio Desktop",
        des: "personal portfolio but in a more creative way that takes you to 2007",
        img: desktop,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
        ],
        link: "https://ahmedkhaled-portfolio-3k9k.vercel.app/",
    },
    {
        id: 5,
        title: "Ai Sudoku Solver",
        des: "The AI Sudoku Solver is a website that solves Sudoku puzzles using artificial intelligence. It provides quick and accurate solutions for the puzzle.",
        img: soduku,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
        ],
        link: "https://ai-sudoku-solver.vercel.app/",
    },

    {
        id: 6,
        title: "AI Image Generator",
        des: "a portal website that takes your prompt and generates a photo from it with pollinations.ai",
        img: imageGenerator,
        iconLists: [
            {
                id: 1,
                name: "React",
                image: reactImg,
            },

            {
                id: 2,
                name: "Tailwind",
                image: tailwindImg,
            },
            {
                id: 3,
                name: "TypeScript",
                image: typescriptImg,
            },
        ],
        link: "https://ai-image-generator-green-chi.vercel.app/",
    },
];

export const testimonials = [
    {
        quote: "I've had the pleasure of working with Ahmed Khaled, and I can't recommend him enough. He has a remarkable level of skill and creativity with his work, and always produces clean, efficient, and high-quality products.Besides his technical expertise, he's hardworking, reliable, incredibly smart and creative. He has a natural ability to solve complex problems and work under pressure while maintaining a positive and approachable attitude. He is the exact definition of the team player. Working with him is always an enjoyable experience.",
        name: "Ahmed Ouda",
        title: "Software Engineer Intern @ Ejada",
        image: ouda,
    },
    {
        quote: "Thank u for your honesty u’re the most talented one i’ve ever met, thanks for perfect timing of the process i hope it’s not the last time to work together 🥰🥰",
        name: "Menna Khaled",
        title: "",
        image: girl,
    },
    {
        quote: "Ahmed Khaled is an exceptional programmer with an impressive skill set, especially in front-end development. His ability to create clean, efficient, and visually appealing designs reflects his deep understanding of coding principles and user experience. I genuinely admire his dedication to mastering his craft and staying updated with the latest technologies. His work consistently stands out for its creativity, precision, and professionalism.",
        name: "Ahmed Ramadan",
        title: "Ex software engineer @ scale.ai",
        image: ramadan,
    },
    {
        quote: "I’ve had the pleasure of working closely with Ahmed Khaled Nasr on several college projects, and I can confidently say he’s one of the most skilled programmers I know. His problem-solving abilities are exceptional, and he never leaves anything incomplete in our projects. He’s dedicated, hardworking, and always collaborates well with the team. I also admire his web designs; they’re always clean and creative. On top of that, he somehow always manages to hit me with headshots in Valorant! I truly hope we can continue working together in the future, as it’s always a great experience teaming up with him.",
        name: "Ahmed khaled",
        title: "vice head @ helwan icpc community",
        image: gomaa,
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];
