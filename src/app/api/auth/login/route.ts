import '@/database/connect'; 
import { UserService } from '@/services'; 

const userService = new UserService();

export async function POST(req:Request) {
    try{
        const { email, password } = await req.json(); 
        /* const user = await userService.getUserByEmail(email);
        if(!user){
            return new Response(JSON.stringify({error:"User not found"}),{status:404});
        } */
        return new Response(JSON.stringify({email, password}),{status:200});

    }catch(error){
        console.log(error);
        return new Response(JSON.stringify({error:"Internal Server Error"}),{status:500}); 
    }
}