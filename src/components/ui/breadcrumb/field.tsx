"use client";

import {
    Breadcrumb as BreadcrumbContainer,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbs } from "@/constants/breadcrumb";
import { PAGE_CHAT } from "@/constants/page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export const Breadcrumb = () => {
    const pathname = usePathname();

    const isChatPage = pathname.startsWith(`${PAGE_CHAT}/`);

    const data = breadcrumbs.find((item) => {
        if (isChatPage) {
            return item.page === PAGE_CHAT;
        } else {
            return item.page === pathname;
        }
    });

    if (!data) {
        return null;
    }

    return (
        <BreadcrumbContainer>
            <BreadcrumbList>
                {data.breadcrumb.map((item, index) => {
                    const isLast = index === data.breadcrumb.length - 1;

                    return (
                        <Fragment key={`bread-${index}`}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <span className="text-foreground">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link href={item.url as string}>
                                        {item.label}
                                    </Link>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}{" "}
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </BreadcrumbContainer>
    );
};
