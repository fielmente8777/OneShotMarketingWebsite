import { SectionWithContainer } from "./sectionComponents";
import { LinkButton } from "./buttons";

const PageNotFound: React.FC = () => {
    return (
        <SectionWithContainer containerClassName="h-[50vh] flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mt-20">404 Page Not Found</h1>
            <p className="text-xl text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <div className="flex justify-center mt-8">
                <LinkButton href="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 hover:box-shadow ">Go to Home</LinkButton>
            </div>
        </SectionWithContainer>
    );
}

export default PageNotFound;