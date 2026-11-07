import type { Metadata } from "next";
import { PageNotFound } from "@/components";

export const metadata: Metadata = {
  title: "404 Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <PageNotFound />
    </main>
  );
}
