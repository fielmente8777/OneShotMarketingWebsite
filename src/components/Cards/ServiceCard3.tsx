import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
export interface ServiceCardProps {
  title: string;
  desc?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  titlePx?: boolean;
  src?: string;
  href?: string;
}
const ServiceCard3: React.FC<ServiceCardProps> = ({
  title,
  desc,
  level,
  titlePx = false,
  src,
  href,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const CardLink = href ? Link : ("div" as keyof JSX.IntrinsicElements);
  return (
    <CardLink
      href={href || "#"}
      className="w-full bg-white rounded-2xl border border-primary md:hover:box-shadow duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4"
    >
      {src && (
        <div className="relative w-full md:aspect-[4/2.5] aspect-[4/2.5] overflow-hidden rounded-2xl">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className=" flex flex-col items-center justify-center gap-4 px-4 py-4">
        <Tag
          className={`heading text-center text-2xl max-lg:px-14 font-medium text-dark ${titlePx ? "md:px-10" : ""}`}
        >
          {title}
        </Tag>
        <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
        <p className="md:heading4 text-lg max-lg:px-4 text-center text-light">
          {desc}
        </p>
      </div>
    </CardLink>
  );
};

export default ServiceCard3;
