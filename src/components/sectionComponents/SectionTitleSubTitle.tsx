interface SectionTitleDescProps {
  title: string;
  subTitle: string;
  textCenter?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
}
const SectionTitleSubTitle: React.FC<SectionTitleDescProps> = ({
  title,
  subTitle,
  textCenter,
  titleClassName = "",
  subTitleClassName = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 w-full`}>
      <h2
        className={`text-xl font-semibold text-secondary uppercase ${titleClassName} ${textCenter ? "text-center" : ""}`}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <h3
        className={`mediumHeading ${textCenter ? "text-center" : ""} ${subTitleClassName} `}
        dangerouslySetInnerHTML={{ __html: subTitle }}
      ></h3>
    </div>
  );
};

export default SectionTitleSubTitle;
