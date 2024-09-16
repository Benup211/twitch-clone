import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { UserPageProps } from "@/types";
import { notFound } from "next/navigation";
import { Actions } from "./_components/actions";

const UserPage=async({params}:UserPageProps)=>{
    const user=await getUserByUsername(params.username);
    if(!user){
        return notFound();
    }
    const isFollowing=await isFollowingUser(user.id);
    return(
        <div className="flex flex-col gap-y-4 p-5">
            <p>Username: {user.username}</p>
            <p>User ID: {user.id}</p>
            <p>External ID: {user.externalUserId}</p>
            <p>isFollowing: {`${isFollowing}`}</p>
            <Actions userId={user.id} isFollowing={isFollowing}/>
        </div>
    );
}

export default UserPage;