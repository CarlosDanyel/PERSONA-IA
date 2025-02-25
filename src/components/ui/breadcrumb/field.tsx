import {
    Breadcrumb as BreadcrumbContainer,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

type BreadcrumbProps = {
    data: {
        label: string;
        url: string;
    }[];
};

export const Breadcrumb = ({ data }: BreadcrumbProps) => {
    return (
        <BreadcrumbContainer>
            <BreadcrumbList>
                {data.map((item, index) => {
                    const isLast = index === data.length - 1;

                    return (
                        <Fragment key={`bread-${index}`}>
                            <BreadcrumbItem>
                                {isLast ? (
                                    <span className=" text-foreground">
                                        {item.label}
                                    </span>
                                ) : (
                                    <BreadcrumbLink href={item.url}>
                                        {item.label}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {!isLast && <BreadcrumbSeparator />}
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </BreadcrumbContainer>
    );
};
