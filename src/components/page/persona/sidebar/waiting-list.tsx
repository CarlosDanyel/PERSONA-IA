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
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { UserList } from "phosphor-react";
import { PAGE_WAITING_LIST } from "@/constants/page";
import { Tooltip } from "@/components/ui/tooltip";

export const WaitingList = () => {
    const { isMobile } = useSidebar();
    return (
        <>
            <SidebarGroup className="pr-0 mt-auto group-data-[collapsible=icon]:hidden">
                <SidebarGroupLabel className="text-sm pl-0 font-normal whitespace-nowrap">
                    Lista de Espera
                </SidebarGroupLabel>
                <SidebarGroupContent>
                    <Link
                        href={PAGE_WAITING_LIST}
                        className={cn(
                            "text-sm w-full text-muted-foreground whitespace-nowrap text-start border overflow-hidden",
                            "transition-all px-2 py-2 ml-[-5px] rounded mt-1 ",
                            "flex justify-between items-center hover:bg-muted hover:text-white"
                        )}
                    >
                        <span className="flex gap-2 items-center ">
                            Acesso a Persona AI <ArrowRight size={18} />
                        </span>
                    </Link>
                </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup className="w-12 pr-0 pl-0 mt-auto hidden group-data-[collapsible=icon]:flex">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Tooltip
                                    content={"Lista de Espera Persona AI"}
                                    className="ml-2 mb-1"
                                >
                                    <button
                                        className={cn(
                                            "w-full rounded-[.3rem] text-sidebar bg-white flex items-center justify-center py-1 px-1 ",
                                            "group-data-[collapsible=icon]:overflow-visible outline-none"
                                        )}
                                    >
                                        <UserList size={20} />
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
                                                Lista de Espera Persona AI
                                            </span>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link
                                            href={PAGE_WAITING_LIST}
                                            className="flex gap-2 items-center"
                                        >
                                            <Sparkles />
                                            Acessar lista
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </>
    );
};
