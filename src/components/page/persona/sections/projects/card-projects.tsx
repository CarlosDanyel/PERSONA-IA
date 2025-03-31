"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonAnimate } from "../../../../ui/button-animate";
import { CirclePulse } from "./circle-pulse";
import { Project as ProjectType } from "@/@types/types";

type LogoType = React.FC<React.SVGProps<SVGSVGElement>>;

type CardProjectsProps = {
    project: ProjectType;
    href: string;
    logo?: LogoType;
};

const Project = ({
    project,
    Logo,
}: {
    project: ProjectType;
    Logo?: LogoType;
}) => {
    return (
        <div className="group flex w-full h-full border rounded-xl overflow-hidden pr-7 relative">
            {project.details.status === "Dev" && (
                <div className="absolute w-full h-full top-0 bg-black/40 z-30 select-none" />
            )}
            {Logo && (
                <Logo className="h-12 w-12 absolute top-4 right-4 rounded-[.3rem]" />
            )}
            <div className="h-64 w-full max-w-[554px] flex overflow-hidden">
                <Image
                    src={project.cardImage}
                    alt={project.subTitle || "Project Image"}
                    width={604}
                    height={100}
                    quality={100}
                    className="w-full h-full object-cover object-center group-hover:brightness-75 transition-all duration-700"
                />
            </div>
            <div className="flex flex-col justify-between px-7 py-7">
                <div className="w-full h-full flex flex-col gap-4">
                    <span className="text-sm text-muted-foreground font-light flex gap-2 items-center">
                        <CirclePulse
                            color={
                                project.details.status === "Dev"
                                    ? "red"
                                    : "green"
                            }
                        />
                        {project.details.type}{" "}
                        <span className="text-white">✦</span>{" "}
                        {project.details.launch}
                    </span>
                    <b className="text-xl font-semibold">{project.subTitle}</b>
                    <p className="text-base text-muted-foreground font-light max-w-[550px]">
                        {project.subDescription}
                    </p>
                </div>
                <ButtonAnimate
                    className="mt-6"
                    name={
                        project.details.status === "Dev"
                            ? "Em Desenvolvimento"
                            : "Conheça o Projeto"
                    }
                />
            </div>
        </div>
    );
};

export const CardProjects = ({
    project,
    logo: Logo,
    href,
}: CardProjectsProps) => {
    return (
        <>
            {project.details.status === "Dev" ? (
                <Project project={project} Logo={Logo} />
            ) : (
                <Link href={href || ""}>
                    <Project project={project} Logo={Logo} />
                </Link>
            )}
        </>
    );
};
