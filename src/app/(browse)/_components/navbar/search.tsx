"use client";

import qs from "query-string";
import {useState } from "react";
import { SearchIcon,X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export const Search=()=>{
    const router=useRouter();
    const [search,setSearch]=useState('');
    const handleSearchSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!search) return;
        const url=qs.stringifyUrl({
            url:'/search',
            query:{term:search},
        },{skipEmptyString:true});
        router.push(url);
    };
    const clearSearch=()=>{
        setSearch("");
    };
    return(
        <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-[400px] flex items-center">
            <Input placeholder="Seach" className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0" value={search} onChange={(e)=>{
                setSearch(e.target.value)
            }}/>
            {search && (<X onClick={clearSearch} className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"/>)}
            <Button type="submit" size={'sm'} variant={'secondary'} className="rounded-l-none">
                <SearchIcon className="h-5 w-5 text-muted-foreground"/>
            </Button>
        </form>
    );
}