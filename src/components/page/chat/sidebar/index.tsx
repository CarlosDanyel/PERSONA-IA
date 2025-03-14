"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { FooterSidebar } from "./footer-sidebar";
import { AddNewChat } from "./add-new-chat";
import { CollectionsChat } from "./collections-chat";
import { SocialMedia } from "./social-medias";
import { data } from "@/constants/chatData";

export const AppSidebar = ({
    ...props
}: React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar
            collapsible="icon"
            {...props}
            className="border-[0.5px] scrollbar-hide"
        >
            <div className=" pb-5 h-full w-full flex flex-col">
                <SidebarContent className="px-4 mt-8">
                    <AddNewChat />
                    <CollectionsChat chat={data.chat} />
                    <SocialMedia />
                </SidebarContent>
                <FooterSidebar mode="desktop" />
            </div>
        </Sidebar>
    );
};
