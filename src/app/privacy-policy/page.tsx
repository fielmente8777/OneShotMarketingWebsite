import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { LEGAL_LAST_UPDATED, privacyPolicy } from "@/data/legalData";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(privacyPolicy.intro);

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy", description, url: "/privacy-policy" },
};

const page = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    intro={privacyPolicy.intro}
    lastUpdated={LEGAL_LAST_UPDATED}
    sections={privacyPolicy.sections}
  />
);

export default page;
