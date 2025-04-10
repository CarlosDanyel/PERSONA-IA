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
import { useChat } from "@/hooks/useChat";
import { PAGE_CHAT, PAGE_PERSONA } from "@/constants/page";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChatCenteredText } from "phosphor-react";
import { cn } from "@/lib/utils";

export function CollectionsChat() {
  const { open, isMobile } = useSidebar();
  const { chats } = useChat();
  const router = useRouter();
  const pathname = usePathname();
  const { removeChat } = useChat();
  const paramns = useParams();

  const onDelete = (id: string) => {
    removeChat(id);

    if (pathname.includes(PAGE_CHAT) && id === paramns.id) {
      router.push(PAGE_PERSONA);
    }
  };

  return (
    <SidebarGroup className="pr-0 pl-0">
      <SidebarGroupLabel className="text-sm pl-0 font-normal whitespace-nowrap">
        Acesse o chat
      </SidebarGroupLabel>
      <SidebarMenu className={cn("ml-[-0px]", !open && "ml-[-0px]")}>
        {chats.map((item) => {
          const chat = item.messages?.[0]?.content?.slice(0, 30) ?? "";

          const isActive = pathname.startsWith(`${PAGE_CHAT}/${item.id}`);

          return (
            <SidebarMenuItem
              key={`chat-${item.id}`}
              className="w-full flex items-center justify-center"
            >
              <SidebarMenuButton
                asChild
                className="rounded-[.3rem] "
                isActive={isActive}
                tooltip={`${chat}`}
              >
                <Link href={`${PAGE_CHAT}/${item.id}`} className="w-full">
                  <span
                    className={cn(
                      "text-xs whitespace-nowrap",
                      !open && "text-center w-full"
                    )}
                  >
                    {!open ? (
                      <ChatCenteredText size={18} />
                    ) : (
                      `${chat}` || "Sem mensagens"
                    )}
                  </span>
                </Link>
              </SidebarMenuButton>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover className="rounded-[.3rem]">
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
                  <DropdownMenuItem onClick={() => onDelete(item.id)}>
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
