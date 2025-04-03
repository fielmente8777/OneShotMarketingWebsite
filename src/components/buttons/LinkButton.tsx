import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className = "",
  newTab = false,
}) => {
  return (
    <Link
      href={href}
      className={`${className} transition-all duration-300 ease-in-out text-nowrap flex items-center gap-1`}
      target={`${newTab ? "_blank" : "_self"}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
