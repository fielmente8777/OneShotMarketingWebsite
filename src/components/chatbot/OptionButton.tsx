import React from "react";

interface OptionButtonProps {
  option: {
    text: string;
  },
  onClick: () => void;
  accentColor: string;
  disabled?: boolean;
}


const OptionButton = ({ option, onClick, accentColor, disabled }: OptionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-left px-4 py-2 rounded-lg border text-sm transition-colors 
        ${disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-opacity-10 active:bg-opacity-20"
        }`}
      style={{
        borderColor: accentColor,
        color: accentColor,
        backgroundColor: "transparent",
      }}
    >
      {option.text}
    </button>
  );
};

export default OptionButton;
