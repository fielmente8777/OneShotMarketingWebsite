import { ArrowUpIcon } from "@/data/icons";
import Link from "next/link";
import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  href?: string;
}
const ServiceCard2: React.FC<ServiceCardProps> = ({
  icon,
  title,
  desc,
  level,
  href,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Link
      href={href ? href : ""}
      className="w-full bg-white rounded-2xl group border border-primary hover:box-shadow shadow-2xl duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4 py-6 px-4"
    >
      <span className="">{icon ? icon : ""}</span>
      <Tag className="heading2 text-center font-medium text-primary px-10">
        {title}
      </Tag>
      <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      <p className="heading4 text-center text-primary">{desc}</p>
      <button className="group-hover:scale-110 group-active:scale-95 group-hover:rotate-[30deg] duration-300 transition-all ease-in-out">
        <ArrowUpIcon />
      </button>
    </Link>
  );
};

export default ServiceCard2;
