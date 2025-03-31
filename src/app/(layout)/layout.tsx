"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/page/persona/sidebar";
import { Toaster } from "sonner";
import { SidebarLink } from "@/components/page/persona/navbar";
import { ChatProvider } from "@/contexts/chat";

import "swiper/css";
import { Header } from "@/components/common/Header";

type ChatLayoutProps = {
    children: ReactNode;
};

export default function ChatAI({ children }: ChatLayoutProps) {
    return (
        <ChatProvider>
            <SidebarProvider className="flex">
                <Toaster position="top-right" theme="dark" richColors />
                <AppSidebar />
                <div className="h-screen flex flex-col w-full pr-28 pl-24 pt-8 overflow-hidden">
                    <Header />
                    {children}
                </div>
                <SidebarLink />
            </SidebarProvider>
        </ChatProvider>
    );
}
