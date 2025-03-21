import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const BackPage = () => {
    return (
        <Link href={"/persona"} className="flex gap-2">
            <ArrowLeft />
            Voltar
        </Link>
    );
};
