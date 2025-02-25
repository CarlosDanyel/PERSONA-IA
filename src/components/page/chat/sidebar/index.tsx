import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";

export const AppSidebar = ({
    ...props
}: React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar collapsible="icon" {...props} className="border-[0.5px]">
            <SidebarHeader>dad</SidebarHeader>
            <SidebarContent></SidebarContent>
            <SidebarFooter>dadada</SidebarFooter>
        </Sidebar>
    );
};
