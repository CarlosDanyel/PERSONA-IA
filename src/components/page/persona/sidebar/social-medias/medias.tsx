import { Tooltip } from "@/components/ui/tooltip";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

const medias = [
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/carlosdanyelsilvateixeira",
        icon: LinkedinLogo,
    },
    {
        name: "Github",
        link: "https://github.com/CarlosDanyel",
        icon: GithubLogo,
    },
    {
        name: "carlosdanyel@gmail.com",
        icon: Mail,
    },
    {
        name: "55+ (11)985673241",
        icon: PhoneCall,
    },
];

export const Medias = () => (
    <>
        {medias.map(({ name, link, icon: Icon }, index) => {
            const Content = (
                <Icon
                    size={19}
                    className="hover:text-white transition-all duration-500 cursor-pointer"
                />
            );

            return (
                <Tooltip
                    content={name}
                    key={`media-${index}`}
                    className="ml-2 rounded-[.3rem]"
                >
                    {link ? (
                        <Link passHref target="_blank" href={link}>
                            {Content}
                        </Link>
                    ) : (
                        <div>{Content}</div>
                    )}
                </Tooltip>
            );
        })}
    </>
);
