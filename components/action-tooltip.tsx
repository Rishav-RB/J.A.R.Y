"use client";

import{
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

interface AcrionTooltipProps{
    label:string;
    children:React.ReactNode;
    side?: "right"|"bottom"|"top"|"left";
    align?: "start"|"center"|"end";
}

export const ActionTooltip=({
        label,
        children,
        side,
        align
    }:AcrionTooltipProps
)=>{
    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    <p className="font-semibold text-sm capitalize">
                        {label.toLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}