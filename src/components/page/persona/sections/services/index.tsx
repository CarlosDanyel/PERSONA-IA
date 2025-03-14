import { AppStoreLogo, Robot, RocketLaunch } from "phosphor-react";
import { TextTitle } from "../projects/text-title";
import { ServicesCard } from "./services-card";

export const Services = () => {
    return (
        <section className="w-full h-full max-h-[354px] mt-20 flex flex-col gap-6">
            <TextTitle text="Serviços em Desenvolvimento e IA" />
            <div className="flex justify-between gap-5 h-full">
                <ServicesCard
                    title="Desenvolvimento Fullstack"
                    icon={RocketLaunch}
                />
                <ServicesCard title="Ai Solutions / Agent AI" icon={Robot} />
                <ServicesCard title="Agente AI" icon={AppStoreLogo} />
            </div>
        </section>
    );
};
