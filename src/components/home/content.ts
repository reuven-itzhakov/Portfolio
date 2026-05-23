import { Code2, Github, Layout, Linkedin, Server, Sparkles } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import Tx2ClassImg from "@/assets/Tx2Class.png";
import Tx2ClassVid from "@/assets/Tx2Class.mp4";
// import BLibImg from "@/assets/BLib.png";
import BLibVid from "@/assets/BLib.mp4";
import SanoHairCutImg from "@/assets/SanoHairCut.png";
import SanoHairCutVid from "@/assets/SanoHairCut.mp4";
import ControlNetImg from "@/assets/ControlNet.png";
import ControlNetVid from "@/assets/ControlNet.mp4";
import TalkJourneyImg from "@/assets/TalkJourney.png";
// import TalkJourneyVid from "@/assets/TalkJourney.mp4";
import cvFile from "@/assets/Reuven_Itzhakov_CV.pdf";

export const heroAssets = {
  background: heroBg,
  cvFile,
};

export const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/reuven-itzhakov/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/reuven-itzhakov/", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com/u/reuven-itzhakov/", label: "LeetCode" },
];

export const skills = [
  {
    icon: Server,
    title: "Backend & Architecture",
    tag: "backend/",
    items: ["C#", ".NET", "Node.js", "Express.js", "SQL", "NoSQL", "Microservices", "SOLID"],
  },
  {
    icon: Layout,
    title: "Frontend",
    tag: "frontend/",
    items: ["React.js", "Next.js", "Angular", "Flutter", "TypeScript", "Tailwind"],
  },
  {
    icon: Sparkles,
    title: "Specialized",
    tag: "specialized/",
    items: ["Unity", "VR / AR", "AI Integration", "Whisper", "LLM APIs"],
  },
];

export const projects = [
  {
    image: SanoHairCutImg,
    video: SanoHairCutVid,
    title: "SanoHairCut Appointment Booking App",
    description:
      "Built a React + Vite front-end for booking and managing hair appointments with calendar and timeslot selection, user authentication, profiles and admin tools for setting availability and managing users/reservations; backed by Node.js serverless API endpoints and Firebase for persistence/auth, optimized for fast client-side scheduling and admin workflows and deployed to Vercel.",
    stack: ["Node.js", "Express.js", "React", "Vite", "Firebase", "Vercel"],
    github: "https://github.com/reuven-itzhakov/SanoHairCut",
    demo: "https://sanohaircut.vercel.app/",
  },
  {
    image: Tx2ClassImg,
    video: Tx2ClassVid,
    title: "Web Diagram & Project Editor",
    description: "Built a React + Vite front-end for creating/saving class-style diagrams with parsing/tokenization, history, and user auth; backed by a Node.js API and Firebase for persistence/auth, optimized for quick client-side objectification and project workflows and deployed to Vercel.",
    stack: ["Node.js", "Express.js", "React", "Vite", "Firebase", "Vercel"],
    github: "https://github.com/pelegc49/Web",
    demo: "https://web-w9fv.vercel.app/home",
  },
  {
    image: undefined,//BLibImg,
    video: BLibVid,
    title: "BLib - Java Library Management (Client‑Server)",
    description: "Built a Java client–server library management application with JavaFX (FXML + CSS) desktop UIs for subscribers and librarians, server-side networking and scheduled tasks, and JDBC/SQL persistence; includes authentication, search, borrow/extend/return workflows, messaging, subscriber management, and report generation.",
    stack: ["Java", "JavaFX", "JDBC", "SQL", "Socket", "Multithreading"],
    github: "https://github.com/reuven-itzhakov/BLib-Project",
    demo: undefined,
  },
  {
    image: ControlNetImg,
    video: ControlNetVid,
    title: "ControlNet - Device Management & Agent Suite",
    description: "Built a native C++ Windows agent (device tracking, screen capture, telemetry collection, downloads/OTA, hotkeys, keylogging and local logging) that integrates with Firebase for auth/logging and remote commands; a Node.js + Express middleware API for device management, auth, downloads, sequences and stats; and a React + Vite dashboard for realtime monitoring, device administration, file distribution, and sequence control. Includes the Firebase C++ SDK and build support (Visual Studio solution + CMake for SDK), Firestore-backed persistence and Storage for file delivery, and a Vercel-hosted frontend (with Node middleware hosted separately). Optimized for low-latency telemetry, reliable device updates, and admin workflows.",
    stack: ["C++", "Node.js", "Express.js", "React", "Vite", "Firebase", "Vercel"],
    github: "https://github.com/reuven-itzhakov/ControlNet",
    demo: undefined,
  },
    {
    image: TalkJourneyImg,
    video: undefined,
    title: "TalkJourney VR Guided Conversation App",
    description: "Built a Unity-based VR app for guided conversation practice, combining multilingual speech recognition, localized voice instructions, interactive guide triggers, and XR pointer-based bubble interactions; integrated with Firebase for auth/token handling and Unity inference tools for speech processing, designed for immersive headset-first learning and assistance workflows.",
    stack: ["Unity", "C#", "XR Interaction Toolkit", "Firebase", "Node.js", "Express.js", "Whisper STT"],
    github: "https://github.com/pelegc49/TalkJourney",
    demo: undefined,
  },
];