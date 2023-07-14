import "@/database/connect"; 
import { UserService } from "@/services"; 

const userService = new UserService();


export async function POST(req:Request) { 
    try{
        const { ...user } = await req.json();
        const newUser = await userService.createUser(user);
        if(!newUser){
            return new Response(JSON.stringify({error:"Error creating user"}),{status:500});
        }
        return new Response(JSON.stringify({newUser}),{status:200});
    }catch(error){
        return new Response(JSON.stringify({error:"Internal Server Error"}),{status:500}); 
    }
}