"use client";

import { BackPage } from "@/components/ui/BackPage";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { TextTitle } from "../../common/Text-title";

export const Projects = () => {
    const params = useParams();

    const data = projects.find((item) => item.id === Number(params.id));

    return (
        <section className="flex flex-col mt-14 overflow-y-auto scrollbar-hide mb-10">
            <BackPage />
            <div>
                <h1 className="mt-6 font-title text-[35px] font-medium normal-case leading-[36px] tracking-[-1px] text-start text-glow">
                    {data?.subTitle}
                </h1>
                <p className="font-title mt-5 text-base text-[#7E7E7E] font-medium text-start">
                    {data?.description}
                </p>
            </div>
            <div className="flex flex-wrap mt-10 gap-4 justify-between">
                {data?.images?.map((item) => {
                    return (
                        <Link
                            href={data?.details.href || data.details.repository}
                            key={item}
                            className={cn(
                                "group relative h-[400px] overflow-hidden flex-1 basis-[32%] grow rounded border",
                                "hover:brightness-75 duration-150"
                            )}
                        >
                            <Image
                                alt=""
                                src={item}
                                width={800}
                                height={100}
                                quality={100}
                                className="transition-all object-cover object-top h-full group-hover:object-bottom  duration-500"
                            />
                            <div className="absolute h-48 w-full bg-gradient-to-t from-black/80 bottom-0 "></div>
                        </Link>
                    );
                })}
            </div>
            <div className="mt-10">
                <TextTitle text="Descrição do Projeto:" />
                <p className="font-title mt-5 text-base text-[#7E7E7E] font-medium text-start"></p>
                <div className="mt-5">
                    <span>
                        Tipo de Projeto:{" "}
                        <span className="text-[#7E7E7E]">
                            {data?.details.type}
                        </span>
                    </span>
                </div>
                <div className="mt-5">
                    <span>
                        Data de Lançamento:{" "}
                        <span className="text-[#7E7E7E]">
                            {data?.details.launch}
                        </span>
                    </span>
                </div>
                {data?.details.targets && (
                    <div className="mt-5">
                        <span>
                            Metas Alcançadas:{" "}
                            <span className="text-[#7E7E7E]">
                                {data?.details.targets}
                            </span>
                        </span>
                    </div>
                )}
                {data?.details.href && (
                    <div className="mt-5">
                        <span>
                            Acesse a {data?.title}:{" "}
                            <span className="text-[#7E7E7E]">
                                <Link
                                    className="hover:text-blue-400 transition-all duration-200"
                                    href={data?.details.href as string}
                                >
                                    {data?.details.href}
                                </Link>
                            </span>
                        </span>
                    </div>
                )}
                <div className="mt-5">
                    <span>
                        Link do Repositório:{" "}
                        <span className="text-[#7E7E7E]">
                            <Link
                                className="hover:text-blue-400 transition-all duration-200"
                                href={data?.details.repository as string}
                            >
                                {data?.details.repository}
                            </Link>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    );
};
