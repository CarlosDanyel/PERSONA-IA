"use client";

import { Folder, MoreHorizontal, Trash2 } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Tooltip } from "@/components/ui/tooltip";

export function CollectionsChat({
    chat,
}: {
    chat: {
        name: string;
    }[];
}) {
    const { isMobile } = useSidebar();

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden pr-0">
            <SidebarGroupLabel className="text-sm pl-0 font-normal">
                Acesse o chat
            </SidebarGroupLabel>
            <SidebarMenu className="ml-[-7px]">
                {chat.map((item, index) => (
                    <SidebarMenuItem key={`chat-${index}`}>
                        <SidebarMenuButton asChild className="rounded-[.3rem] ">
                            <Link
                                suppressHydrationWarning={true}
                                href={`/chat/${index}`}
                            >
                                <Tooltip
                                    content={item.name}
                                    className="ml-6 mb-3 text-xs rounded-[.3rem]"
                                >
                                    <span className="text-xs whitespace-nowrap overflow-hidden">
                                        {item.name}
                                    </span>
                                </Tooltip>
                            </Link>
                        </SidebarMenuButton>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuAction
                                    showOnHover
                                    className="rounded-[.3rem]"
                                >
                                    <MoreHorizontal />
                                    <span className="sr-only"></span>
                                </SidebarMenuAction>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-48 rounded-[.3rem]"
                                side={isMobile ? "bottom" : "right"}
                                align={isMobile ? "end" : "start"}
                            >
                                <DropdownMenuItem>
                                    <Folder className="text-muted-foreground" />
                                    <span>Acessar o chat</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Trash2 className="text-muted-foreground" />
                                    <span>Delete Chat</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
