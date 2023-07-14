import '@/database/connect'; 


export async function POST(req:Request) {
    try{
        const { email, password } = await req.json(); 

    }catch(error){
        console.log(error);
        return new Response(JSON.stringify({error:"Internal Server Error"}),{status:500}); 
    }
}