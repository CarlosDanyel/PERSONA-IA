import { Tooltip } from "@/components/ui/tooltip";
import { medias } from "@/constants/medias";
import { cn } from "@/lib/utils";
import Link from "next/link";

type MediasSectionProps = {
    session?: "medias" | "other";
};

export const Medias = ({ session = "medias" }: MediasSectionProps) => (
    <>
        {medias.map(({ name, link, icon: Icon }, index) => {
            const classNameMedia =
                session === "other" &&
                cn(
                    "p-12 border rounded-xl cursor-pointer hover:bg-sidebar hover:text-white hover:border-white",
                    "duration-700 transition-all text-sod text-zinc-300"
                );

            const Content = (
                <Icon
                    size={session === "other" ? 26 : 19}
                    className="hover:text-white transition-all duration-500 cursor-pointer"
                />
            );

            return (
                <Tooltip
                    content={name}
                    key={`media-${index}`}
                    className="ml-2 rounded-[.3rem]"
                >
                    {link && (
                        <Link
                            className={classNameMedia as string}
                            passHref
                            target="_blank"
                            href={link}
                        >
                            {Content}
                        </Link>
                    )}
                </Tooltip>
            );
        })}
    </>
);
