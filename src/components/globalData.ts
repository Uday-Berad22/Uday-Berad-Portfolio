import { MobileIcon } from "@radix-ui/react-icons";
import {
  Briefcase,
  Github,
  Home,
  Linkedin,
  Package,
  Twitter,
  Users,
} from "lucide-react";

// Sidebar Data
export const routes = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Package,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: MobileIcon,
  },
];

// Home Data

export const achievements = [
  {
    title: "Informatica Infathon 4.0 Winner",
    description:
      "Won first place in the Informatica Infathon 4.0 hackathon for exceptional problem-solving and project development.",
  },
  {
    title: "CodeChef 4-Star Rating",
    description:
      "Achieved a 4-star rating on CodeChef for consistent performance and problem-solving skills in competitive programming.With Rating 1916+",
  },
  {
    title: "LeetCode Knight Badge",
    description:
      "Earned the prestigious Knight badge on LeetCode, being in the top 3% with a rating of 1950+.",
  },
  {
    title: "2000+ DSA Problems Solved",
    description:
      "Solved over 2000 Data Structures and Algorithms problems on various platforms, showcasing strong problem-solving skills.Platforms include Codeforces, CodeChef, LeetCode, and GeeksforGeeks.",
  },
  {
    title: "ICPC Preliminary Contest 2023 - Rank 444",
    description:
      "Ranked 444 out of 2300+ participants in the ICPC Preliminary Contest 2023, showcasing strong competitive programming skills.",
  },

  {
    title: "Google Code Jam 2023 - Farewell Round Rank 2403",
    description:
      "Ranked 2403 out of 12000+ participants in the Google Code Jam Farewell Round 2023, reflecting solid problem-solving abilities.",
  },
  {
    title: "Meta Hacker Cup 2023 - Rank 3618",
    description:
      "Secured a rank of 3618 out of 12000+ participants in the Meta Hacker Cup 2023, demonstrating excellence in algorithmic problem-solving.",
  },
  {
    title: "Hacktoberfest Contributor",
    description:
      "Contributed to various open-source projects during Hacktoberfest and received a special edition T-shirt.",
  },
];

// Projects Data
// Projects Data
export const projects = [
  {
    id: "1",
    title: "Swaad-link",
    description:
      "Developed Swaadlink, a full-stack web app connecting users with chefs for personalized home-cooked meals and events. Implemented a real-time booking system and designed responsive chef profiles to enhance user experience. Integrated secure authentication and role-based access control, ensuring platform security and user trust.",
    technologies: [
      "Real-time Systems",
      "React.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Node.js",
      "Clerk",
      "Vercel",
    ],
    link: "https://swaad-link.vercel.app/",
    github: "https://github.com/Uday-Berad22/SwaadLink",
    icon: Briefcase,
    categories: [
      "Web Development",
      "Security",
      "Real-time Systems",
      "React.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Node.js",
      "Clerk",
      "Vercel",
    ],
  },
  {
    id: "2",
    title: "Office-Space",
    description:
      "Developing Office-Space, an office parking management and workplace issue tracking app, optimizing parking allocation based on employee schedules and commute data. Implementing a carpooling feature, real-time parking notifications.",
    technologies: [
      "Parking Management",
      "Real-time Notifications",
      "Web Development",
      "Real-time Systems",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "cron-job",
      "clerk",
      "vercel",
      "github-actions",
      "Blockchain",
      "Carpooling",
      "Booking-System",
    ],
    link: "https://office-space-sync.vercel.app/",
    github: "https://github.com/Uday-Berad22/Office-Space",
    icon: Briefcase,
    categories: [
      "Real-time Systems",
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "cron-job",
      "clerk",
      "vercel",
      "github-actions",
      "Blockchain",
      "Carpooling",
      "Booking-System",
    ],
  },
  {
    id: "3",
    title: "ShareIt",
    description:
      "Built a Full-Stack Web application to enable users to upload a file up to 500 MB and share it with friends via a unique link or mail it. Implemented a REST API for mailing functionality, and made a Task Scheduler, to remove files from the server and database after 24 hours to prevent overload.",
    technologies: [
      "Backend",
      "File Sharing",
      "HTML",
      "CSS",
      "JS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Nodemailer",
      "Cron-Job",
      "Multer",
      "EJS",
      "Bootstrap",
    ],
    link: "https://share-it-front-end-html.vercel.app/",
    github: "https://github.com/Uday-Berad22/ShareIt_FrontEnd-html",
    icon: Briefcase,
    categories: [
      "Web Development",
      "Backend",
      "File Sharing",
      "HTML",
      "CSS",
      "JS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Nodemailer",
      "Cron-Job",
      "Multer",
      "EJS",
      "Bootstrap",
    ],
  },
  {
    id: "4",
    title: "Agrorent",
    description:
      "Agrorent is an online platform that connects farmers with agricultural equipment owners, allowing them to rent tools and machinery for farming. I contributed to backend development, integrated payment systems, and worked on real-time booking functionalities to improve the user experience and make equipment rentals more accessible to farmers.",
    technologies: [
      "Backend Development",
      "Payment Gateway",
      "Real-time Systems",
      "Node.js",
      "MongoDB",
      "Express.js",
      "React.js",
      "JWT",
    ],
    link: "https://agrorent-example.com/",
    github: "https://github.com/Uday-Berad22/Agrorent",
    icon: Briefcase,
    categories: [
      "Web Development",
      "Backend Development",
      "Real-time Systems",
      "Payment Gateway",
      "Node.js",
      "MongoDB",
      "Express.js",
      "React.js",
    ],
  },
  {
    id: "5",
    title: "HealthVault",
    description:
      "HealthVault is a health management platform that helps users manage medical records, appointments, and prescriptions securely. I worked on building core features like appointment scheduling, medical history management, and user authentication using secure protocols to protect sensitive health data.",
    technologies: [
      "Web Development",
      "Security",
      "MongoDB",
      "JWT",
      "Next.js",
      "Gemini-AI-API",
      "Chatbot",
    ],
    link: "https://medi-assist-eta.vercel.app/",
    github: "https://github.com/Uday-Berad22/MediAssist",
    icon: Briefcase,
    categories: [],
  },
  {
    id: "6",
    title: "Daily Expense Tracker",
    description:
      "The Daily Expense Tracker app helps users track their spending, categorize expenses, and set financial goals. I worked on both frontend and backend development, implementing user-friendly interfaces for expense categorization, reports generation, and financial analytics.",
    technologies: [],
    link: "https://daily-expense-tracker-example.com/",
    github: "https://github.com/Uday-Berad22/Daily-Expense-Tracker",
    icon: Briefcase,
    categories: [],
  },
];

export const skills = [
  "DSA",
  "Algorithms",
  "Competitive Programming",
  "C++",
  "Java",
  "Linux",
  "Computer Networks",
  "DBMS",
  "Web Development",
  "OOPS",
  "Operating Systems",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Git",
  "Github",
  "Flask",
  "JavaScript",
  "Python",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Milvus",
  "LLM",
  "LLAMA",
  "RAG",
  "BERT",
  "Machine Learning",
  "Log Analysis",
];

export const experiences = [
  {
    company: "Commvault",
    role: "Intern",
    period: "April 2024 - Present",
    description:
      "I worked on log analysis for CVFS logs, where I contributed to optimizing the parsing of large exception blocks, reducing log file sizes, and enhancing processing efficiency. This experience exposed me to real-world challenges, honing my problem-solving skills and deepening my understanding of scalable log analysis ,linux systems and distributed systems. I also had the opportunity to learn from industry experts, expand my technical knowledge, and grow as a software engineer, especially in cloud technologies and large-scale system deployment.",
  },
  {
    company: "CSFORALL",
    role: "Teaching Assitant",
    period: "Feb 2024 - April 2024",
    description:
      "As a Teaching Assistant at CS FOR ALL from February to April 2024, I supported a cohort of over 500 students in mastering Data Structures, Algorithms, and programming concepts. I assisted in organizing and conducting contests, providing educational support to more than 200 students by addressing their doubts and helping them navigate challenging topics. This role allowed me to collaborate with a passionate team of educators, enhancing my mentorship and communication skills. Additionally, I contributed to creating learning resources that simplified complex technical concepts, and developed a deeper appreciation for inclusive educational practices in computer science.",
  },
  {
    company: "BNY Mellon",
    role: "Career Catalyst Mentee",
    period: "March 2024 - March 2024",
    description:
      "As a Career Catalyst Mentee at BNY Mellon, I had the opportunity to gain valuable insights into the workings of the IT industry, learning about the latest technologies, project management practices, and corporate culture. During this mentorship, I collaborated with industry professionals, honing my teamwork and communication skills while gaining hands-on experience in the fast-paced environment of a global financial institution. I was exposed to real-world challenges, which helped me better understand work ethics, the importance of innovation, and the role of IT in shaping business strategies. This experience greatly expanded my technical knowledge and provided me with a solid foundation to excel in my career.",
  },
  {
    company: "GirlScript Summer of Code",
    role: "Open Source Contributor ",
    period: "May 2023 - Jul 2023",
    description:
      "As an Open Source Contributor at GirlScript Summer of Code, I had the opportunity to collaborate with a diverse and talented group of developers, contributing to meaningful open-source projects. This experience allowed me to enhance my coding skills, work with various technologies, and learn best practices for contributing to large-scale projects. I actively participated in the development and improvement of codebases, while also gaining a deeper understanding of version control, collaboration tools, and the open-source community. Additionally, it gave me valuable exposure to the intricacies of project management, code reviews, and maintaining high-quality standards, all while contributing to causes that foster diversity and inclusivity in tech.",
  },
  {
    company: "Newton School Coding Club, PCCOE",
    role: "Problem Setter ",
    period: "Jan 2023 - Jun 2023",
    description:
      "As a Problem Setter at the Newton School Coding Club, PCCOE, I was responsible for designing and curating challenging and engaging coding problems for competitive programming contests. This role helped me enhance my problem-solving abilities, sharpen my understanding of algorithms and data structures, and improve my ability to think critically under constraints. I worked closely with other team members to ensure that the problems were of varying difficulty levels, tested key concepts, and were aligned with the goals of the coding club. Additionally, I gained valuable experience in reviewing and optimizing problems, providing feedback, and learning how to create fair and balanced assessments for participants. This role not only strengthened my technical expertise but also improved my communication and collaboration skills in a team environment",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    school: "Pimpri Chinchwad College of Engineering,Pune",
    period: "2021 - 2025",
    description: "",
  },
  {
    degree: "HSC",
    school:
      "Ahmednagar's Education Society's New arts, Commerce and Science College, Ahmednagar",
    period: "2021",
    description: "",
  },
  {
    degree: "SSC",
    school:
      "Ahmednagar's Education Society's New arts, Commerce and Science College, Ahmednagar",
    period: "2019",
    description: "",
  },
];

export const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Uday-Berad22" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/uday-berad-108661238",
  },
  { name: "Twitter", icon: Twitter, url: "https://x.com/uday_berad19036" },
];

// Terminal Data
export const terminalSteps = [
  "git init",
  "git branch -M life",
  "git add .",
  "git commit -m 'All the things'",
  "git remote add intern @<company name>",
  "git push -u intern life",
];
// Profile Photo Data
export const profilePhoto = {
  src: "https://example.com/path-to-your-photo.jpg",
  alt: "Uday Berad",
};
