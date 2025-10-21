import { NextRequest } from "next/server";




export function POST(request){
    // Example: Parse JSON body and return a response
    return request.json().then(data => {
        // Do something with data, e.g., log or process
        console.log(data);

        return new Response(JSON.stringify({ message: "Product received", product: data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    });





}