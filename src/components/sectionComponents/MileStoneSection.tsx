import SectionWithContainer from "./SectionWithContainer";
interface MileStoneSectionProps {
  cards: {
    number: string;
    title: string;
    desc: string;
  }[];
}
const MileStoneSection: React.FC<MileStoneSectionProps> = ({ cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary py-10 md:py-16">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-4"
          >
            <div className="text-5xl font-bold text-white">{card.number}</div>
            <h3 className="heading4 text-white">{card.title}</h3>
            <div className="w-full max-w-[6.5rem] h-[1px] bg-secondary"></div>
            <p className="heading5 text-white">{card.desc}</p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default MileStoneSection;
