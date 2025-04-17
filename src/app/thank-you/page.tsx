import { LinkButton, SectionWithContainer } from "@/components";
import Image from "next/image";

const Logo = "/logo-3.png";

const page = () => {
  return (
    <SectionWithContainer sectionClassName="h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative max-w-96 w-full mx-auto md:aspect-[4/2] aspect-[3/1]">
          <Image src={Logo} alt="Logo" fill className="object-contain" />
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-4 flex flex-col items-center">
            <h2 className="text-secondary md:text-lg font-semibold">
              THANK YOU FOR SUBMITTING
            </h2>
            <h3 className="md:text-4xl text-2xl font-bold text-center">
              We will get back to you shortly!
            </h3>
            <p className="text-center max-w-[500px] mx-auto">
              One Shot Marketing delivers results-driven digital marketing
              solutions to elevate your brand.{" "}
            </p>

            <div>
              <LinkButton
                href="/"
                className="px-6 py-2 bg-secondary text-white rounded-md text-sm"
              >
                <button>Go to Home Page</button>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default page;
