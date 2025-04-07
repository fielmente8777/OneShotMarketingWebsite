import { Form1 } from "../forms";
import SectionWithContainer from "./SectionWithContainer";

interface FormSectionProps {
    desc: string,
}
const FormSection: React.FC<FormSectionProps> = ({desc}) => {
    return (
        <SectionWithContainer sectionClassName="max-lg:block hidden">
            <div className="mb-4">
                <Form1/>
            </div>
            <p className="heading3 text-light text-center">{desc}</p>
        </SectionWithContainer>
    );
}

export default FormSection;