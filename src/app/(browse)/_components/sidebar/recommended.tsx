"use client";

import { useSidebar } from "@/store/sidebarStore";
import { RecommendedProps } from "@/types/recommendedTypes";
import { UserItem, UserItemSkeleton } from "./user-item";

export const Recommended=({data}:RecommendedProps)=>{
    const {collapsed}=useSidebar((state)=>state);
    const showLabel=!collapsed && data.length>0;
    return(
        <div>
            {showLabel && (
            <div className="pl-6 mb-4">
                <p className="text-sm text-muted-foreground">
                    Recommended
                </p>
            </div>
        )}
        <ul className="space-y-2 px-2">
            {data.map((user)=>(
                <UserItem key={user.id} username={user.username} imageUrl={user.imageUrl} isLive={true}/>
            ))}
        </ul>
        </div>
    );
}

export const RecommendedSkeleton=()=>{
    return(
        <ul className="px-2">
            {[1,2,3].map((index)=>(
                <UserItemSkeleton key={index}/>
            ))}
        </ul>
    )
}