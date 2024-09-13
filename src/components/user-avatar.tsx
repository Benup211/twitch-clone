import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import {
    Avatar,AvatarFallback,AvatarImage
} from '@/components/ui/avatar';
import { UserAvatarProps,avatarSizes,UserAvatarSkeletonProps } from "@/types";
import { LiveBadge } from "@/components/live-badge";

export const UserAvatar = ({ imageUrl, username, isLive,showBadge,size }: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;
    return (
        <div className="relative">
            <Avatar
            className={cn(
                isLive && "ring-2 ring-rose-500 border border-background",
                avatarSizes({size})
            )}
            >
                <AvatarImage src={imageUrl} alt={username} className="object-cover" />
                <AvatarFallback>
                    {username[0].toUpperCase()}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <LiveBadge />
                </div>
            )}
        </div>
    );
}

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
    return (
        <Skeleton
            className={cn(
                avatarSizes({ size }),
                "rounded-full"
            )}
        />
    );
}