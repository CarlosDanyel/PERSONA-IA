"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/page/persona/sidebar";
import { Toaster } from "sonner";
import { SidebarLink } from "@/components/page/persona/navbar";
import { ChatProvider } from "@/contexts/chat";

import "swiper/css";
import { Header } from "@/components/common/Header";
import { cn } from "@/lib/utils";

type ChatLayoutProps = {
    children: ReactNode;
};

export default function ChatAI({ children }: ChatLayoutProps) {
    return (
        <ChatProvider>
            <SidebarProvider className="flex">
                <Toaster position="top-right" theme="dark" richColors />
                <AppSidebar />
                <div
                    className={cn(
                        "h-screen flex flex-col w-full pr-28 pl-24 pt-8 overflow-hidden",
                        "max-xl:pr-10 max-xl:pl-16",
                        "max-lg:pr-8 max-lg:pl-12",
                        "max-sm:pr-5 max-sm:pl-5"
                    )}
                >
                    <Header />
                    {children}
                </div>
                <SidebarLink />
            </SidebarProvider>
        </ChatProvider>
    );
}
