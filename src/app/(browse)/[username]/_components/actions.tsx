"use client";

import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";
import { useTransition } from "react";
import { toast } from "sonner";
import { ActionsProps } from "@/types";

export const Actions=({isFollowing,userId}:ActionsProps)=>{
    const [isPending,startTransition]=useTransition();
    const onClick=async()=>{
        startTransition(
            async()=>{
                onFollow("123")
                .then(()=>{
                    toast.success("Followed user");
                })
                .catch(()=>{
                    toast.error("Failed to follow user");
                });
            }
        );
    }
    return(
        <Button disabled={isFollowing||isPending} variant={"primary"} onClick={onClick}>Follow</Button>
    );
};