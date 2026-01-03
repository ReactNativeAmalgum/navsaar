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
  from: `"Website Contact" <${process.env.EMAIL_USER}>`,
  to: process.env.OWNER_EMAIL,
  replyTo: email, // replies go to user
  subject: `New Contact Form Message from ${name}`,
  html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color:#f4f6f8; padding:20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; overflow:hidden;">
        
        <!-- Header -->
        <tr>
          <td style="background:#0d6efd; padding:20px; text-align:center;">
            <img 
              src="https://yourwebsite.com/logo.png" 
              alt="Company Logo" 
              style="max-height:50px; margin-bottom:10px;"
            />
            <h2 style="color:#ffffff; margin:0;">New Contact Message</h2>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:20px; color:#333;">
            <p style="font-size:15px; margin-bottom:10px;">
              You’ve received a new message from your website contact form.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:15px;">
              <tr>
                <td style="padding:8px 0;"><strong>Name:</strong></td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>Email:</strong></td>
                <td style="padding:8px 0;">
                  <a href="mailto:${email}" style="color:#0d6efd; text-decoration:none;">
                    ${email}
                  </a>
                </td>
              </tr>
            </table>

            <div style="margin-top:20px;">
              <strong>Message:</strong>
              <div style="margin-top:10px; padding:15px; background:#f1f3f5; border-radius:6px; line-height:1.6;">
                ${message.replace(/\n/g, "<br />")}
              </div>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#777;">
            This email was sent from your website contact form.<br />
            © ${new Date().getFullYear()} Navsaar Studio. All rights reserved.
          </td>
        </tr>

      </table>
    </div>
  `,
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
