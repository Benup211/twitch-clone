import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

export const getRecommended=async ()=>{

    let userId;
    try{
        const self=await getSelf();
        userId=self.id;
    }catch(e){
        userId=null;
    }
    let users=[];

    if(userId){
        users=await db.user.findMany({
            where:{
                NOT:{
                    id:userId
                }
            },
            orderBy:{
                createdAt:"desc"
            }
        });
        return users;
    }
    else{
        users=await db.user.findMany({
            orderBy:{
                createdAt:"desc"
            }
        });
        return users;
    }
}