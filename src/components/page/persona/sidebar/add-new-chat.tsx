import { Button } from "@/components/ui/button";
import { SidebarGroup } from "@/components/ui/sidebar";
import { PAGE_CHAT } from "@/constants/page";
import { Plus } from "lucide-react";
import Link from "next/link";

export const AddNewChat = () => {
    return (
        <SidebarGroup>
            <Link href={`${PAGE_CHAT}/new`} className="w-full">
                <Button
                    className="rounded-2xl flex gap-2 w-full outline-none"
                    size={"sm"}
                    variant={"outline"}
                >
                    <Plus size={24} />
                    Novo Chat
                </Button>
            </Link>
        </SidebarGroup>
    );
};
