import { ArrowUpIcon } from "@/data/icons";
import Link from "next/link";
import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  arrayDesc?: string[];
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  href?: string;
}
const ServiceCard5: React.FC<ServiceCardProps> = ({
  icon,
  title,
  arrayDesc,
  level,
  href,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Link
      href={href ? href : ""}
      className="w-full bg-white rounded-2xl group border border-primary md:hover:box-shadow md:shadow-2xl duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4 py-6 px-4 min-h-[490px] h-full"
    >
      <span className="">{icon ? icon : ""}</span>
      <Tag className="md:text-xl max-lg:px-14 text-lg text-center font-semibold text-primary px-6">
        {title}
      </Tag>
      <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      <div className="flex flex-col items-center justify-center gap-2">
        {arrayDesc?.map((desc, index) => (
          <p
            className="text-lg max-lg:px-4  text-center text-light"
            key={index}
          >
            {desc}
          </p>
        ))}
      </div>
      <button className="group-hover:scale-110 mt-auto group-active:scale-95 group-hover:rotate-[30deg] duration-300 transition-all ease-in-out">
        <ArrowUpIcon />
      </button>
    </Link>
  );
};

export default ServiceCard5;
