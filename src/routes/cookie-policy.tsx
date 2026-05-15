import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Marin Apartment" },
      { name: "description", content: "Cookie policy for the Marin Apartment website." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage kind="cookies" />,
});
