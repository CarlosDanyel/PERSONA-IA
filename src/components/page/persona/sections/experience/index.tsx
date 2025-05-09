import Image from "next/image";
import { TextTitle } from "../../../../common/Text-title";
import { ButtonAnimate } from "../../../../ui/button-animate";
import Link from "next/link";
import { SECTION_EXPERIENCE } from "@/constants/sections";
import { cn } from "@/lib/utils";
import { PAGE_NEW_CHAT } from "@/constants/page";

export const Experience = () => {
    return (
        <section id={SECTION_EXPERIENCE} className="mt-20 flex flex-col gap-6">
            <TextTitle text=" Descubra as Experiências do Carlos" />

            <Link
                href={`${PAGE_NEW_CHAT}`}
                className="group border rounded-xl p-5 flex gap-5 w-full cursor-pointer"
            >
                <div className="flex flex-col justify-between w-fit py-[25px]">
                    <div className="flex flex-col gap-4">
                        <b className="text-[22px] font-medium">
                            Descubra as Experiências do Carlos, Pergunte à IA!
                        </b>
                        <p className="text-sm text-muted-foreground font-light">
                            Pergunte à minha IA sobre minha jornada
                            profissional.
                        </p>
                    </div>
                    <ButtonAnimate
                        className="mt-9"
                        name="Pergunte Agora"
                        icon="arrow"
                    />
                </div>
                <div
                    className={cn(
                        "border rounded-[.5rem] w-full h-[260px] overflow-hidden flex items-center justify-center",
                        "max-[908px]:hidden"
                    )}
                >
                    <Image
                        src={"/assets/image-6.png"}
                        alt=""
                        width={904}
                        height={100}
                        quality={100}
                        className="w-full h-full object-cover object-center group-hover:brightness-75 transition-all duration-700"
                    />
                </div>
            </Link>
        </section>
    );
};
