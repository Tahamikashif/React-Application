import { NextRequest } from "next/server";




export function POST(request){
    // Parse the request body as JSON
    return request.json().then(data => {
        // Here you can handle the data, e.g., save to database or process
        // For demonstration, just return the received data as JSON response
        return new Response(JSON.stringify({ received: data }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    });





}