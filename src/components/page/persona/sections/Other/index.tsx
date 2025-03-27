import { TextTitle } from "../projects/text-title";
import { TechsAndServices } from "./techs-tool";

export const Services = () => {
    return (
        <section className="w-full h-full max-h-[354px] mt-20 flex flex-col gap-6">
            <TextTitle text="Tecnologias, Serviços e Ferramentas" />
            <div className="flex justify-between gap-5 h-full">
                <TechsAndServices />
            </div>
        </section>
    );
};
