import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps{
    params:{
        invitecode:string;
    };
};

const InviteCodePage =async ({
    params
}:InviteCodePageProps) => {
    const profile= await currentProfile();

    if(!profile){
        return redirectToSignIn();
    }
    if(!params.invitecode){
        return redirect("/");
    }
    const existingServer=await db.server.findFirst({
        where:{
            invitecode:params.invitecode,
            members:{
                some:{
                    profileId:profile.id,
                }
            }
        }
    });
    if(existingServer){
        return redirect(`/server/${existingServer.id}`);
    }
    const s1=await db.server.findFirst({
        where:{invitecode:params.invitecode}
    })
    const server=await db.server.update({
        where:{
            id:s1?.id,
        },
        data:{
            members:{
                create:[
                    {
                        profileId:profile.id,
                    }
                ]
            }
        }
    })

    if(server){
        return redirect(`/server/${server.id}`)
    }
    return null;
}
 
export default InviteCodePage;