import { Button } from "@/components/ui/button";
import { SidebarGroup, useSidebar } from "@/components/ui/sidebar";
import { Tooltip } from "@/components/ui/tooltip";
import { PAGE_CHAT } from "@/constants/page";
import { Plus } from "lucide-react";
import Link from "next/link";

export const AddNewChat = () => {
    const { open } = useSidebar();
    const chatButton = (
        <Link href={`${PAGE_CHAT}/new`} className="w-full">
            <Button
                className="rounded-2xl flex w-full outline-none"
                size="sm"
                variant="outline"
            >
                <Plus size={24} />
                <span className="text-center ml-2 group-data-[collapsible=icon]:hidden">
                    Novo Chat
                </span>
            </Button>
        </Link>
    );

    return (
        <SidebarGroup>
            {open ? (
                chatButton
            ) : (
                <Tooltip content="Novo Chat" side="right">
                    {chatButton}
                </Tooltip>
            )}
        </SidebarGroup>
    );
};
