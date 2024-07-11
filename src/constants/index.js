import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    vuejs,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    electronics,
    mysql,
    roadsmart,
    saferider,
    water,
    certificate
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: vuejs,
        name: "Vue.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },   
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: electronics,
        name: "Electronics",
        type: "Electronics",
    }
];

export const experiences = [
    {
        title: "Head of Information Technology",
        company_name: "Saferider Management Systems Limited",
        icon: saferider,
        iconBg: "#7393B3",
        date: "December 2021 - June 2024",
        points: [
            "Developed an Android mobile application tailored to work with the speed governors allowing users to track and monitor the status of speed governors fitted on their vehicles.",
            "Maintainance of vehicle tracking portal. Helped to maintain it ensuring it is working as expected and made changes upon the request of customers or staff, working on additional features to enhance user experience.",
            "Actively monitored and maintained servers and databases. Promptly addressing any server alerts or performance bottlenecks through collaboration with cross-functional teams to optimize server configurations and scaling resources as needed to accommodate increasing demands and workload",
            "Consistent collaboration with a team involved in the development of vehicle speed limiters to ensure the devices aligned with industry standards. Assessed performance of speed limiters and promptly resolved encountered issues during the installation phase. Conducted simulations on a workshop bench evaluating the devices’ functionality and optimizing their performance.",
            "Trained and supervised staff, ensuring they were well-equipped to perform their duties effectively and efficiently."
        ],
    },
    {
        title: "IT Technical Support",
        company_name: "Saferider Management Systems Limited",
        icon: saferider,
        iconBg: "#7393B3",
        date: "February 2020 - December 2021",
        points: [
            "Repair of vehicle speed governors. This involved testing and diagnosing faulty speed governors, circuit analysis, soldering and desoldering and component replacement",
            "Providing expert troubleshooting support for speed limiter issues both in-person and over the phone, assisting both technicians and customers to ensure efficient and effective solutions",
            "Collaborated closely with customers and staff to gather user requirements and provide guidance on effectively navigating the company’s systems.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Tingle Software",
        icon: typescript,
        iconBg: "#3178c6",
        date: "July 2017 - August 2018",
        points: [
            "Implemented software solutions in collaboration with a distributed agile team, utilizing technologies such as ASP.NET, Azure SQL Database, HTML, CSS, JavaScript, AJAX, and jQuery, to deliver high-quality end-user applications.",
            "Collaborated with Senior Software Developers to design and implement a responsive front-end application that interfaced with Web APIs on the Azure platform, resulting in improved application performance and a seamless user experience",
            "Honed my skills in software engineering processes and best practices.",
            "Contributed to deployments by testing, debugging and resolving issues for optimal results.",
        ],
    },
    {
        title: "Electronics Intern",
        company_name: "Mobi-Water",
        icon: water,
        iconBg: "#a2d2ff",
        date: "July 2019 - November 2019",
        points: [
            "Diagnosing and repairing printed circuit boards by troubleshooting components, identifying faulty connections, and testing to ensure proper functionality.",
            "Contributed towards the front-end development of the company’s portal that was used to monitor data sent by sensors installed to help clients track their water consumption. Allowing for easier analysis of data and a more user-friendly interface.",
            "Played a key role in updating the company website, enhancing its functionality and user experience. Utilized web development skills to add new features, improve page layouts and incorporate relevant details, resulting in an enhanced online presence and improved customer engagement.",
        ],
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
        link: 'https://github.com/nigelbomett',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nigel-bomett-3339279a/',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Tracking App',
        description: 'Designed and built a mobile app for tracking vehicles using real-time data transmitted by a tracker fitted on the vehicle also showing history reports and owner information.Developed using Java and XML',
        link: 'https://play.google.com/store/apps/details?id=com.roadsmartspeedtracker.android',
    },
    {
        iconUrl: certificate,
        theme: 'btn-back-green',
        name: 'Certificate Verification Application',
        description: 'The application was to be used to verify certificates issued by either comparing a unique identifier provided with records in a database or scanning a QR code.Developed using Flutter, the system also included a Node JS based API and Mongo DB Database.',
        link: 'https://github.com/nigelbomett/certificate_verification_flutter',
    },
];