import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/page/chat/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/ui/breadcrumb/field";
import { Toaster } from "sonner";

type ChatLayoutProps = {
    children: ReactNode;
};

const data = [
    {
        label: "Home",
        url: "/",
    },
    {
        label: "Chat",
        url: "/chat",
    },
];

export default function Chat({ children }: ChatLayoutProps) {
    return (
        <SidebarProvider className="flex">
            <Toaster position="top-right" theme="dark" richColors />
            <AppSidebar />
            <main className="h-screen flex flex-col w-full px-28 py-8">
                <div className="h-fit flex items-center">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mx-3 h-4" />
                    <Breadcrumb data={data} />
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
}
