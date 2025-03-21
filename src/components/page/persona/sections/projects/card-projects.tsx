"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonAnimate } from "../../../../ui/button-animate";

type CardProjectsProps = {
    title: string;
    description: string;
    image: string;
    typeProject: string;
    date: string;
    href: string;
};

export const CardProjects = ({
    description,
    image,
    title,
    date,
    href,
    typeProject: type,
}: CardProjectsProps) => {
    return (
        <Link
            href={href}
            className="group flex w-full h-[240px] border rounded-xl overflow-hidden pr-7"
        >
            <div className="h-60 w-full max-w-[554px] flex">
                <Image
                    src={image}
                    alt=""
                    width={604}
                    height={100}
                    quality={100}
                    className="w-full h-full object-cover object-center group-hover:brightness-75 transition-all duration-700"
                />
            </div>
            <div className="flex flex-col justify-between px-7 py-7">
                <div className="w-full h-full flex flex-col gap-4">
                    <span className="text-sm text-muted-foreground font-light flex gap-2">
                        {type} <span className="text-white">✦</span> {date}
                    </span>
                    <b className="text-xl font-semibold">{title}</b>
                    <p className="text-base text-muted-foreground font-light max-w-[550px]">
                        {description}
                    </p>
                </div>
                <ButtonAnimate name="Conheça o Projeto" />
            </div>
        </Link>
    );
};
