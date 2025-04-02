import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";
import { CheckCircle2, ChevronsUpDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileSidebarFooter = ({
    isMobile,
    open,
}: {
    isMobile: boolean;
    open: boolean;
}) => {
    return (
        <>
            <SidebarMenu>
                <SidebarMenuItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className={cn(
                                    "w-full rounded-[.3rem] data-[state=open]:bg-sidebar-accent flex items-center justify-between py-1 px-1 hover:bg-sidebar-accent",
                                    "data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:overflow-visible outline-none",
                                    !open && "justify-start "
                                )}
                            >
                                <Avatar className={cn("w-10 h-10 mr-2")}>
                                    <AvatarImage
                                        src={
                                            "https://github.com/CarlosDanyel.png"
                                        }
                                        width={700}
                                    />
                                    <AvatarFallback>CD</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                                    <span className="text-sm font-medium whitespace-nowrap">
                                        Carlos Danyel
                                    </span>
                                    <p className="text-muted-foreground text-xs whitespace-nowrap">
                                        @carlosdanyel
                                    </p>
                                </div>
                                <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-[.3rem]"
                            side={isMobile ? "bottom" : "right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="w-10  block">
                                        <AvatarImage
                                            src={
                                                "https://github.com/CarlosDanyel.png"
                                            }
                                            width={200}
                                        />
                                        <AvatarFallback>CD</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            Carlos Danyel
                                        </span>
                                        <p className="text-muted-foreground text-xs whitespace-nowrap">
                                            @carlosdanyel
                                        </p>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Sparkles color="#CE8807" />
                                    Desenvolvedor Fullstack
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem aria-roledescription="">
                                    <CheckCircle2 color="#2BB559" />
                                    AI Solutions
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CheckCircle2 color="#2BB559" />
                                    Founder Modifyca
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CheckCircle2 color="#2BB559" />
                                    Founder Persona IA
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </>
    );
};

export const FooterSidebar = () => {
    const { isMobile, open } = useSidebar();
    return (
        <SidebarFooter className=" w-full px-4 mt-2">
            <MobileSidebarFooter isMobile={isMobile} open={open} />
        </SidebarFooter>
    );
};
