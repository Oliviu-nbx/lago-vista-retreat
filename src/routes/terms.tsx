import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Marin Apartment" },
      {
        name: "description",
        content: "Terms and conditions for booking Marin Apartment in Peschiera del Garda.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <LegalPage kind="terms" />,
});
