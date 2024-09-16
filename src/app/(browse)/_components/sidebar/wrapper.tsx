"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import { WrapperProps } from "@/types";
import { useState,useEffect } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

export const Wrapper = ({ children }: WrapperProps) => {
    const {collapsed}=useSidebar((state)=>state);
    const isClient=useIsClient();
    if(!isClient){
        return (
            <aside className={cn(
                "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35 Z-50",
            )}>
                <ToggleSkeleton />
                <RecommendedSkeleton/>
            </aside>
        );
    }
    return (
        <aside className={cn(
            "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35 Z-50",
            collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    );
};
