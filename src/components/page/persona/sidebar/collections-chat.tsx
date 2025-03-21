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
import { useChat } from "@/hook/useChat";
import { PAGE_CHAT } from "@/constants/page";
import { useParams, usePathname, useRouter } from "next/navigation";

export function CollectionsChat() {
    const { isMobile } = useSidebar();
    const { chats } = useChat();
    const router = useRouter();
    const pathname = usePathname();
    const { removeChat } = useChat();
    const paramns = useParams();

    const onDelete = (id: string) => {
        removeChat(id);

        if (pathname.includes(PAGE_CHAT) && id === paramns.id) {
            router.push("/persona");
        }
    };

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden pr-0">
            <SidebarGroupLabel className="text-sm pl-0 font-normal">
                Acesse o chat
            </SidebarGroupLabel>
            <SidebarMenu className="ml-[-7px]">
                {chats.map((item) => {
                    const isActive = pathname.startsWith(
                        `${PAGE_CHAT}/${item.id}`
                    );
                    return (
                        <SidebarMenuItem key={`chat-${item.id}`}>
                            <SidebarMenuButton
                                asChild
                                className="rounded-[.3rem] "
                                isActive={isActive}
                            >
                                <Link href={`${PAGE_CHAT}/${item.id}`}>
                                    <Tooltip
                                        content={
                                            item.messages?.[0]?.content ||
                                            "Sem mensagens disponíveis"
                                        }
                                        className="ml-6 mb-3 text-xs rounded-[.3rem]"
                                    >
                                        <span className="text-xs whitespace-nowrap overflow-hidden">
                                            {item.messages?.[0]?.content ||
                                                "Sem mensagens"}
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
                                    <Link
                                        className="flex gap-2 w-full"
                                        href={`/persona/chat/${item.id}`}
                                    >
                                        <DropdownMenuItem className="w-full">
                                            <Folder className="text-muted-foreground" />
                                            <span>Acessar o chat</span>
                                        </DropdownMenuItem>
                                    </Link>

                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => onDelete(item.id)}
                                    >
                                        <Trash2 className="text-muted-foreground" />
                                        <span>Deletar Chat</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
