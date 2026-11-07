import Link from "next/link";
import Container from "@/components/sectionComponents/Container";
import Section from "@/components/sectionComponents/Section";

export interface LegalSection {
  id: string;
  heading: string;
  /** Paragraphs; may contain simple inline HTML (links, <b>). */
  body?: string[];
  list?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalPage: React.FC<LegalPageProps> = ({
  eyebrow,
  title,
  intro,
  lastUpdated,
  sections,
}) => {
  return (
    <main>
      <Section className="bg-primary text-white !py-12 md:!py-20">
        <Container className="flex flex-col gap-4 items-center text-center">
          <nav aria-label="Breadcrumb" className="description1 text-white/80">
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <p className="text-secondary font-semibold uppercase md:text-xl text-lg">
            {eyebrow}
          </p>
          <h1 className="largeHeading font-bold">{title}</h1>
          <p className="heading4 max-w-3xl text-white/90">{intro}</p>
          <p className="description1 text-white/70">Last updated: {lastUpdated}</p>
        </Container>
      </Section>

      <Section>
        <Container className="grid lg:grid-cols-[16rem_1fr] gap-8 lg:gap-14">
          <aside className="lg:sticky lg:top-6 h-max">
            <div className="rounded-2xl border border-primary p-5 bg-white">
              <h2 className="heading4 font-semibold text-primary mb-3">On this page</h2>
              <ol className="flex flex-col gap-2 list-decimal ps-5 description1 text-dark">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-primary hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="flex flex-col gap-10 max-w-3xl">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-6 flex flex-col gap-3">
                <h2 className="heading2 font-semibold text-dark">
                  <span className="text-secondary me-2">{String(i + 1).padStart(2, "0")}.</span>
                  {s.heading}
                </h2>
                {s.body?.map((p, j) => (
                  <p
                    key={j}
                    className="heading4 text-light [&_a]:text-primary [&_a]:underline [&_b]:text-dark"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
                {s.list && (
                  <ul className="list-disc ps-6 flex flex-col gap-2">
                    {s.list.map((item, j) => (
                      <li
                        key={j}
                        className="heading4 text-light [&_b]:text-dark"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}
                {s.after?.map((p, j) => (
                  <p
                    key={j}
                    className="heading4 text-dark font-medium"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}
              </section>
            ))}

            <div className="rounded-2xl bg-bg2 p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <p className="heading4 text-dark">
                Questions about this page? We&apos;re happy to help.
              </p>
              <Link
                href="/contact-us"
                className="raleway bg-primary text-white rounded-lg py-3 px-6 font-semibold text-center hover:box-shadow transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </article>
        </Container>
      </Section>
    </main>
  );
};

export default LegalPage;
