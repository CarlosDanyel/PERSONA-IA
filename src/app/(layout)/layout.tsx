"use client";

import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/page/persona/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/ui/breadcrumb/field";
import { Toaster } from "sonner";
import { SidebarLink } from "@/components/page/persona/navbar";
import { ChatProvider } from "@/contexts/chat";

type ChatLayoutProps = {
    children: ReactNode;
};

export default function ChatAI({ children }: ChatLayoutProps) {
    return (
        <ChatProvider>
            <SidebarProvider className="flex">
                <Toaster position="top-right" theme="dark" richColors />
                <AppSidebar />
                <main className="h-screen flex flex-col w-full pr-28 pl-24 pt-8">
                    <div className="h-fit flex items-center">
                        <SidebarTrigger />
                        <Separator
                            orientation="vertical"
                            className="mx-3 h-4"
                        />
                        <Breadcrumb />
                    </div>
                    {children}
                </main>
                <SidebarLink />
            </SidebarProvider>
        </ChatProvider>
    );
}
