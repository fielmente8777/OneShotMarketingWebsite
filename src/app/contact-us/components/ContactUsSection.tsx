import { Form, SectionTitleSubTitle, SectionWithContainer } from "@/components";
import { JSX } from "react";

export interface ContactUsSectionProps {
  title: string;
  subTitle: string;
  desc: string[];
  contactInfo: {
    title: string;
    desc: string[];
    icon: JSX.Element;
  }[];
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  title,
  subTitle,
  desc,
  contactInfo,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative md:!pb-36 md:after:content-[''] md:after:absolute md:after:top-2 after:left-2 after:w-[20rem] after:z-[-1] after:h-full after:bg-contain after:bg-no-repeat after:bg-[url('/Vector.png')] md:before:absolute before:-bottom-12 before:right-1 before:w-[19rem] before:h-[25rem] before:opacity-100 before:z-[-1] before:bg-contain before:bg-no-repeat before:bg-[url('/Vector1.png')]">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4 md:gap-16">
        <div className={`flex flex-col gap-4 col-span-3 w-full md:max-w-xl`}>
          <SectionTitleSubTitle
            title={title}
            subTitle={subTitle}
            subTitleClassName="text-dark md:pe-4"
          />
          {desc.map((item, index) => (
            <p
              key={index}
              className="heading4 text-dark"
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          ))}

          <div className="">
            {contactInfo.map((item, index) => (
              <div
                className="py-8 border-b border-primary md:max-w-md w-full"
                key={index}
              >
                <h2 className="heading4 font-semibold text-dark flex items-center gap-2">
                  <span className="text-dark">{item.icon}</span> {item.title}
                </h2>
                <ul className="list-disc ps-16 flex flex-col gap-2 mt-2">
                  {item.desc.map((descItem, index) => (
                    <li key={index} className="heading4 text-dark">
                      {descItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full col-span-2 h-max">
          <Form />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUsSection;
