"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/sidebarStore";
import { WrapperProps } from "@/types";

export const Wrapper = ({ children }: WrapperProps) => {
    const {collapsed}=useSidebar();
    return (
        <aside className={cn(
            "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35 Z-50",
            collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    );
};
