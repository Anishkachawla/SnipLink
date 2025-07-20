//save messages to DB
import clientPromise from "@/lib/mongodb"; 

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // --- Basic Server-Side Validation ---
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ success: false, message: 'All fields are required.' }), {
                status: 400, // Bad Request
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Basic email format check (more robust validation can be done with libraries)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(JSON.stringify({ success: false, message: 'Please enter a valid email address.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // --- Server-side logic for handling the contact message ---
        console.log('--- New Contact Form Submission ---');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        console.log('Timestamp:', new Date().toISOString());
        console.log('-----------------------------------');

        //Save to MongoDB       

        const client = await clientPromise;
        const db = client.db("SnipLink"); // Or a separate database/collection for contact messages
        const collection = db.collection("contact_messages"); // A new collection for contact messages
        await collection.insertOne({
            name,
            email,
            message,
            timestamp: new Date(),
        });

        return new Response(JSON.stringify({ success: true, message: 'Your message has been sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error handling contact form submission:', error);
        return new Response(JSON.stringify({ success: false, message: 'Internal server error. Please try again later.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}