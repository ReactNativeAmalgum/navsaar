import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer"; // ✅ Must import this

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1️⃣ Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // 2️⃣ Save to MongoDB
    await connectDB();
    await Contact.create({ name, email, message });

    // 3️⃣ Send email to owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail account
        pass: process.env.EMAIL_PASS, // 16-char App Password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email, // reply goes to user
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // 4️⃣ Return success
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 201 }
    );

  } catch (error) {
    console.error("CONTACT API ERROR:", error); // ✅ Always log the error
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}
