"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SectionTitleSubTitle from "@/components/sectionComponents/SectionTitleSubTitle";
import SectionWithContainer from "@/components/sectionComponents/SectionWithContainer";

export interface WorkItem {
  industry: string;
  service: string;
  title: string;
  desc: string;
  src: string;
  href: string;
}

interface WorkGalleryProps {
  title: string;
  subTitle: string;
  items: WorkItem[];
}

const ALL = "All Work";

const WorkGallery: React.FC<WorkGalleryProps> = ({ title, subTitle, items }) => {
  const industries = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((i) => i.industry)))],
    [items]
  );
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? items : items.filter((i) => i.industry === active);

  return (
    <SectionWithContainer sectionId="work">
      <div className="flex flex-col gap-8 md:gap-12 w-full">
        <SectionTitleSubTitle title={title} subTitle={subTitle} textCenter />

        <div
          className="flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
          role="tablist"
          aria-label="Filter work by industry"
        >
          {industries.map((industry) => (
            <button
              key={industry}
              type="button"
              role="tab"
              aria-selected={active === industry}
              onClick={() => setActive(industry)}
              className={`shrink-0 rounded-full border px-4 py-2 description1 font-semibold capitalize transition-all duration-300 ${
                active === industry
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {visible.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-primary bg-white md:hover:box-shadow transition-all duration-300"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg2">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 410px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase text-primary">
                    {item.industry}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-light">
                    {item.service}
                  </span>
                  <h3 className="heading3 font-semibold text-primary">{item.title}</h3>
                  <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
                  <p className="heading4 text-light line-clamp-3">{item.desc}</p>
                  <span className="mt-auto pt-2 font-semibold text-primary underline underline-offset-4 group-hover:text-dark">
                    View service
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default WorkGallery;
