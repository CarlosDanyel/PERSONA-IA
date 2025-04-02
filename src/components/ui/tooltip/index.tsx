"use client";

import { cn } from "@/lib/utils";
import {
    Tooltip as TooltipRoot,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./primitive";
import { ReactNode } from "react";
import { TooltipContentProps } from "@radix-ui/react-tooltip";

type TooltipProps = {
    children: ReactNode;
    content: string | number | ReactNode;
    className?: string;
    side?: TooltipContentProps["side"];
};

export const Tooltip = ({
    children,
    content,
    className,
    side,
    ...props
}: TooltipProps) => {
    return (
        <TooltipProvider>
            <TooltipRoot delayDuration={300}>
                <TooltipTrigger asChild {...props}>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className={cn(
                        "bg-background text-sm border border-muted text-foreground rounded-[.3rem]",
                        className
                    )}
                    side={side}
                >
                    <p>{content}</p>
                </TooltipContent>
            </TooltipRoot>
        </TooltipProvider>
    );
};
