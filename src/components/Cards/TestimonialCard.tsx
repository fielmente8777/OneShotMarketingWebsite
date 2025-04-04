import { StarIcon } from "@/data/icons";

interface TestimonialCardProps {
  name: string;
  desc: string;
  rating: number;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  desc,
  rating,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 rounded-2xl bg-white py-6 px-8 border border-primary box-shadow2">
      {rating > 0 && (
        <div className="flex gap-1">
          {[...Array(rating)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
      )}
      <p className="heading4 text-light">{desc}</p>
      <h3 className="heading2 text-normal">{name}</h3>
    </div>
  );
};

export default TestimonialCard;
