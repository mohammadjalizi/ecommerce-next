import { NextResponse } from "next/server"



export async function POST(request) {

    const datafromfrontend = await request.json()
    console.log(datafromfrontend)
    return NextResponse.json({})

}