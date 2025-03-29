import { TextTitle } from "../projects/text-title";
import { TechsAndServices } from "./techs-tool";

export const Services = () => {
    return (
        <section className="w-full mt-20 gap-2 flex">
            <div className="w-full flex flex-col gap-6">
                <TextTitle text="Tecnologias e Ferramentas" />
                <TechsAndServices />
            </div>
        </section>
    );
};
