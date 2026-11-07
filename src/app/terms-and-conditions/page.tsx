import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { LEGAL_LAST_UPDATED, termsAndConditions } from "@/data/legalData";
import { toMetaDescription } from "@/data/site";

const description = toMetaDescription(termsAndConditions.intro);

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description,
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { title: "Terms & Conditions", description, url: "/terms-and-conditions" },
};

const page = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    intro={termsAndConditions.intro}
    lastUpdated={LEGAL_LAST_UPDATED}
    sections={termsAndConditions.sections}
  />
);

export default page;
