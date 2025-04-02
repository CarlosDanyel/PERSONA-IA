import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Medias } from "./medias";
import { ShareNetwork } from "phosphor-react";
import { medias } from "@/constants/medias";
import { Fragment } from "react";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

export const SocialMedia = () => {
    const { isMobile } = useSidebar();
    return (
        <>
            <SidebarGroup className="pr-0 group-data-[collapsible=icon]:hidden overflow-hidden">
                <SidebarGroupLabel className="text-sm pl-0 font-normal whitespace-nowrap">
                    Redes Sociais
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <div
                        className={cn(
                            "text-xs w-full text-muted-foreground whitespace-nowrap text-start border overflow-hidden",
                            "transition-all px-2 py-2 ml-[-5px] rounded mt-1 ",
                            "flex justify-between items-center "
                        )}
                    >
                        <Medias />
                    </div>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="w-12 pr-0 pl-0 hidden group-data-[collapsible=icon]:flex">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Tooltip
                                    content={"Redes Sociais"}
                                    className="ml-2 mb-1"
                                >
                                    <button
                                        className={cn(
                                            "w-full rounded-[.3rem] text-sidebar bg-white flex items-center justify-center py-1 px-1 ",
                                            "group-data-[collapsible=icon]:overflow-visible outline-none"
                                        )}
                                    >
                                        <ShareNetwork size={20} />
                                    </button>
                                </Tooltip>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-[.3rem]"
                                side={isMobile ? "bottom" : "right"}
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="p-0 font-normal">
                                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="text-sm font-medium whitespace-nowrap">
                                                Redes Sociais
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    {medias.map(
                                        (item) =>
                                            item.link && (
                                                <Link
                                                    href={item.link}
                                                    key={item.name}
                                                    target="_blank"
                                                >
                                                    <DropdownMenuItem className="cursor-pointer">
                                                        <item.icon />
                                                        {item.name}
                                                    </DropdownMenuItem>
                                                </Link>
                                            )
                                    )}
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </>
    );
};
