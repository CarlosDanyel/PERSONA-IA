import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";

import { Header } from "@/components/common/Header";
import { AppSidebar } from "@/components/page/persona/sidebar";
import { SidebarLink } from "@/components/page/persona/navbar";

import "swiper/css";
import { ClientProvider } from "@/components/shared/client-provider";

const fontTitle = Inter({
    variable: "--font-title",
    subsets: ["latin"],
});

const fontSans = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfólio | Carlos Danyel",
    description:
        "Portfólio de Carlos Danyel, desenvolvedor de IA e fundador da Modifyca.",
    icons: {
        icon: "/favicon.ico",
    },
    robots: {
        follow: true,
        index: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={cn(
                    "min-h-screen bg-black font-sans antialiased ",
                    fontTitle.variable,
                    fontSans.variable
                )}
            >
                <ClientProvider>
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
                </ClientProvider>
            </body>
        </html>
    );
}
