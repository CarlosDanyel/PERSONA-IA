import { Skeleton } from "@/components/ui/skeleton";

export default function ChatLoadingPage() {
    return (
        <div className="grid grid-rows-[.3fr,1fr,.2fr] gap-10 h-screen w-full mt-10 mb-7">
            <Skeleton className=" w-full h-full bg-sidebar" />
            <Skeleton className=" w-full h-full bg-sidebar" />
            <Skeleton className=" w-full h-full bg-sidebar" />
        </div>
    );
}
