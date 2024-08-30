import {create} from 'zustand';
import { SidebarStoreProps } from '@/types/sidebarTypes'; 

export const useSidebar=create<SidebarStoreProps>((set)=>({
    collapsed:false,
    onExpand:()=>set(()=>({collapsed:false})),
    onCollapse:()=>set(()=>({collapsed:true}))
}));