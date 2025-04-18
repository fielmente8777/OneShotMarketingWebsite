import { JSX } from "react";
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  titlePx?: boolean;
  borderTop?: boolean;
}
const ServiceCard4: React.FC<ServiceCardProps> = ({
  icon,
  title,
  desc,
  level,
  titlePx = false,
  borderTop = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="w-full bg-white rounded-2xl border border-primary md:hover:box-shadow duration-300 transition-all ease-in-out flex flex-col items-center justify-center gap-4 py-6 px-4">
      {icon && <span className="">{icon}</span>}
      {borderTop && (
        <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      )}
      <Tag
        className={`md:heading3 text-center max-lg:px-14 font-semibold md:h-[4.3ch] text-primary ${titlePx ? "md:px-10" : ""}`}
      >
        {title}
      </Tag>
      {!borderTop && (
        <div className="w-full h-[1px] bg-secondary max-w-[6.5rem]"></div>
      )}
      {desc && (
        <p className="md:heading4 text-lg text-center text-primary">{desc}</p>
      )}
    </div>
  );
};

export default ServiceCard4;
