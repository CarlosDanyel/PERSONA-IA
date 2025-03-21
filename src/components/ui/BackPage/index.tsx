import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BackPageProps = {
    className?: string;
};

export const BackPage = ({ className }: BackPageProps) => {
    return (
        <Link href={"/persona"} className={cn("flex gap-2", className)}>
            <ArrowLeft />
            Voltar
        </Link>
    );
};
