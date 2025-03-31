"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { PAGE_PERSONA } from "@/constants/page";
import { linksPageDirectTo } from "@/constants/sections";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as NavLink } from "react-scroll";

type DisplayMode = {
    displayMode?: "hidden" | "visible";
};

const ContainerSidebarLink = ({ displayMode = "visible" }: DisplayMode) => (
    <div className="h-screen w-fit bg-sidebar border flex flex-col items-center justify-between px-3">
        <div />
        <div className="flex flex-col gap-6 text-muted-foreground">
            {linksPageDirectTo.map((item, index) => (
                <div
                    key={`${item.label}-${index}`}
                    className="hover:text-white transition-all cursor-pointer"
                >
                    {displayMode === "visible" ? (
                        <NavLink
                            to={item.to as string}
                            smooth={true}
                            duration={500}
                            containerId="scroll-container"
                        >
                            <Tooltip
                                key={`${item.label}-${index}`}
                                content={item.label}
                                className="mr-5 rounded-xl"
                            >
                                <item.icon size={18} />
                            </Tooltip>
                        </NavLink>
                    ) : (
                        <Link href={"/persona"}>
                            <Tooltip
                                key={`${item.label}-${index}`}
                                content={item.label}
                                className="mr-5 rounded-xl"
                            >
                                <item.icon size={18} />
                            </Tooltip>
                        </Link>
                    )}
                </div>
            ))}
        </div>
        <div />
    </div>
);

export const SidebarLink = () => {
    const pathname = usePathname();

    return (
        <ContainerSidebarLink
            displayMode={pathname.includes(PAGE_PERSONA) ? "visible" : "hidden"}
        />
    );
};
