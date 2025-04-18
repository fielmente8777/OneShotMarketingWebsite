import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
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
    <div className="w-full bg-white rounded-2xl border border-primary md:hover:box-shadow duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4 py-6 px-4">
      {icon && <span className="">{icon}</span>}
      <Tag
        className={`md:heading2 text-2xl max-lg:px-14 text-center font-semibold md:h-[4.3ch] text-primary ${titlePx ? "md:px-10" : ""}`}
      >
        {title}
      </Tag>
      <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      <p className="md:heading4 text-lg text-center max-lg:px-4 text-primary">{desc}</p>
    </div>
  );
};

export default ServiceCard;
