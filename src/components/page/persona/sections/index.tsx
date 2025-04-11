import { Experience } from "./experience";
import { Projects } from "./projects";
import { Others } from "./compose";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/common/Footer";

export const Sections = () => {
    return (
        <div className="w-full h-full mt-7">
            <main>
                <Projects />
                <Experience />
                <Others />
            </main>
            <Separator className="mt-16" />
            <Footer />
        </div>
    );
};
