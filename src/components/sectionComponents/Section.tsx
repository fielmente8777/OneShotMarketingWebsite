interface SectionProps {
  className?: string;
  lgpy?: number;
  py?: number;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  className = "",
  lgpy,
  py,
  id,
  children,
}) => {
  return (
    <section
      className={`max_screen w-full ${lgpy ? `lg:py-${lgpy}` : "lg:py-16"} ${py ? `py-${py}` : "py-7"} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
