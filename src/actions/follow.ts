"use server";

export const onFollow=async(id:string)=>{
    try{
        console.log(`Following user with ID: ${id}`);
    }catch(err){
        throw new Error("Internal Error");
    }
}