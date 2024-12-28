import { connectMongoDB } from "../../DBconfig/mongoDb"
import { NextResponse } from "next/server"



export async function POST(request) {

    const datafromfrontend = await request.json()
    console.log(datafromfrontend)
    return 

    await connectMongoDB()



// 4- Go back to frontend
return   NextResponse.json({ error: 'Registration failed' }, { status: 500 });  

}