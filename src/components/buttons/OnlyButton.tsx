interface OnlyButtonProps {
  onclick?: () => void;
  children: React.ReactNode;
  className?: string;
  Props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
const OnlyButton: React.FC<OnlyButtonProps> = ({
  onclick,
  children,
  className,
  Props,
}) => {
  return (
    <button
      onClick={onclick}
      className={`${className} transition-all duration-300 ease-in-out text-nowrap flex items-center gap-1`}
      {...Props}
    >
      {children}
    </button>
  );
};

export default OnlyButton;
