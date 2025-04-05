import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  titlePx?: boolean;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  desc,
  level,
  titlePx = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="w-full bg-white rounded-2xl border border-primary hover:box-shadow duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4 py-6 px-4">
      <span className="">{icon ? icon : ""}</span>
      <Tag className={`heading2 text-center font-medium text-primary ${titlePx ? "md:px-10" : ""}`}>
        {title}
      </Tag>
      <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      <p className="heading4 text-center text-primary">{desc}</p>
    </div>
  );
};

export default ServiceCard;
