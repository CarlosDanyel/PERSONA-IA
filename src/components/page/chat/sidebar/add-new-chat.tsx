import { Button } from "@/components/ui/button";
import { SidebarGroup } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";

export const AddNewChat = () => {
    return (
        <SidebarGroup>
            <Button
                className="rounded-2xl flex gap-2"
                size={"sm"}
                variant={"outline"}
            >
                <Plus size={24} />
                Novo Chat
            </Button>
        </SidebarGroup>
    );
};
