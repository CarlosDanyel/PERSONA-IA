import * as React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/ui/breadcrumb/field";

export const Header = () => {
    return (
        <header className="h-fit flex items-center">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mx-3 h-4" />
            <Breadcrumb />
        </header>
    );
};
