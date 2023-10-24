import { cn } from "@/lib/utils";
import { Avatar,AvatarImage } from "@radix-ui/react-avatar";

interface UserAvatarProps{
    src?:string;
    className?:string;
};

export const UserAvatar=({src,className}:UserAvatarProps)=>{
    return (
        <Avatar className={cn(
            " h-7 w-7 md:h-10 md:wd-10",
            className
        )}>
            <AvatarImage src={src} className={cn(
            "",
            className
        )}/>
        </Avatar>
    )
}