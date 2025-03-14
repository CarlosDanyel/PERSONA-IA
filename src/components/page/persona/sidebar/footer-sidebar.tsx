import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarFooter } from "@/components/ui/sidebar";
import * as React from "react";
type FooterSidebarProps = {
    mode: "mobile" | "desktop";
};

const DesktopSidebarFooter = () => {
    return (
        <div className="w-full h-full flex flex-col items-center gap-4">
            <div className="w-full flex gap-2">
                <Avatar className="w-10  block">
                    <AvatarImage
                        src={"https://github.com/CarlosDanyel.png"}
                        width={200}
                    />
                    <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <div>
                    <span className="text-sm font-medium">Carlos Danyel</span>
                    <p className="text-muted-foreground text-xs">
                        @carlosdanyel
                    </p>
                </div>
            </div>
        </div>
    );
};

const MobileSidebarFooter = () => {
    return <></>;
};

export const FooterSidebar = ({ mode }: FooterSidebarProps) => {
    return (
        <SidebarFooter className="overflow-auto px-4 mt-2">
            {mode === "desktop" ? (
                <DesktopSidebarFooter />
            ) : (
                <MobileSidebarFooter />
            )}
        </SidebarFooter>
    );
};
