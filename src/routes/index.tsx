import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Reuven Itzhakov — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer focused on scalable backend architecture, modern web frameworks, and practical AI integration.",
      },
      { property: "og:title", content: "Reuven Itzhakov — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Reuven Itzhakov — backend architecture, modern web, and AI integration.",
      },
    ],
  }),
});

function Home() {
  return <HomePage />;
}
