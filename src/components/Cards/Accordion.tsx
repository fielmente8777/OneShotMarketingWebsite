"use client";
import { JSX, useEffect, useState } from "react";

interface AccordionProps {
  question: string;
  answer: string[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
  icon?: JSX.Element;
  typeList?: boolean;
  index?: number;
}
const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  className,
  questionClassName,
  answerClassName,
  icon,
  typeList = false,
  index,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    setIsAccordionOpen(index === 0);
  }, [index]);

  return (
    <>
      <div
        className={`flex flex-col w-full ${className} group cursor-pointer`}
        onMouseEnter={() => setIsAccordionOpen(true)}
        onMouseLeave={() => setIsAccordionOpen(false)}
      >
        <div className="flex items-center gap-4 justify-between">
          <h3 className={`heading2 font-medium text-dark ${questionClassName}`}>
            {question}
          </h3>
          {icon && (
            <span
              aria-label="accordion icon"
              role="svg"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              className={`text-dark ${isAccordionOpen ? "-rotate-180" : ""} duration-300 transition-all ease-in-out`}
            >
              {icon}
            </span>
          )}
        </div>
        <div
          className={`flex flex-col gap-4 w-full ${answerClassName} transition-all max-h-0 overflow-hidden group-hover:max-h-[20rem] ${isAccordionOpen ? "max-h-[20rem] mt-4 md:mt-6" : ""}`}
          onClick={() => setIsAccordionOpen(!isAccordionOpen)}
        >
          {typeList ? (
            <ul className="list-disc pl-4 flex flex-col gap-2">
              {answer.map((item, index) => (
                <li
                  key={index}
                  className={`heading4 text-light font-normal`}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
          ) : (
            answer.map((item, index) => (
              <p
                key={index}
                className={`heading4 text-light font-normal`}
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
