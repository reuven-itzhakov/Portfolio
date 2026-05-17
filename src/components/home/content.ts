import { Code2, Github, Layout, Linkedin, Server, Sparkles } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
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
    items: ["Unity", "VR / AR", "Cybersecurity", "AI Integration", "Whisper", "LLM APIs"],
  },
];

export const projects = [
  {
    image: proj1,
    video: undefined,
    title: "Distributed Analytics Platform",
    description:
      "Designed an event-driven ingestion pipeline handling millions of records/day. Solved hot-partition bottlenecks with consistent hashing and an async fan-out worker model.",
    stack: [".NET", "Kafka", "PostgreSQL", "Redis", "React"],
    github: "#",
    demo: undefined,
  },
  {
    image: proj2,
    video: undefined,
    title: "Immersive Training Simulator",
    description:
      "Built a VR training environment with realistic physics interactions. Optimized draw calls and shader complexity to hold 90fps on standalone headsets.",
    stack: ["Unity", "C#", "OpenXR", "Shader Graph"],
    github: "#",
    demo: "#",
  },
  {
    image: proj3,
    video: undefined,
    title: "AI Voice Assistant",
    description:
      "Real-time transcription + intent layer using Whisper streaming. Engineered a low-latency WebSocket bridge and chunked VAD to keep first-token under 400ms.",
    stack: ["Node.js", "Whisper", "WebSockets", "Next.js"],
    github: "#",
    demo: "#",
  },
  {
    image: proj4,
    video: undefined,
    title: "Microservices Boilerplate",
    description:
      "Production-ready service template with auth, observability, and contract testing baked in. Cut new-service spin-up time from days to under an hour.",
    stack: [".NET", "Docker", "gRPC", "OpenTelemetry"],
    github: "#",
    demo: "#",
  },
];