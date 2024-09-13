import {cva,type VariantProps} from "class-variance-authority";
import { CssVariable } from "next/dist/compiled/@next/font";

export const avatarSizes=cva(
    "",
    {
        variants:{
            size:{
                default:"h-8 w-8",
                lg:"h-14 w-14",
            }
        },
        defaultVariants:{
            size:"default"
        }
    }
)

export interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
    imageUrl: string;
    isLive?: boolean;
    username: string;
    showBadge?: boolean;
}

export interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes> {}''