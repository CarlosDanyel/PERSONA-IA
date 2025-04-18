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
                    "w-full py-12 px-4 border rounded-xl cursor-pointer duration-700 hover:bg-sidebar hover:border-white",
                    "transition-all text-sod text-muted-foreground hover:text-white flex items-center justify-center",
                    "max-xl:py-9"
                );

            const Content = (
                <Icon
                    size={session === "other" ? 26 : 19}
                    className={cn(
                        session === "medias" &&
                            "hover:text-white transition-all duration-500 cursor-pointer"
                    )}
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
