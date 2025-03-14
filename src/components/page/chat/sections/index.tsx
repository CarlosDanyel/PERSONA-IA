import { Experience } from "./experience";
import { Projects } from "./projects";
import { Services } from "./services";

export const Sections = () => {
    return (
        <div className="w-full h-full mt-7">
            <Projects />
            <Experience />
            <Services />
        </div>
    );
};
