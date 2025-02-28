import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: NextRequest) {
  try {
    const { name, username, email, message } = await req.json();


    const response = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ["mamadkarmalaie@gmail.com"],
      subject: `Message from ${name} (${username})`,
      react: EmailTemplate({
        name,
        email,
        msg: message,
      }),
    });

    console.log("Response from Resend:", response);

   
    if (response?.data?.id) {
      return NextResponse.json({ id: response.data.id }, { status: 200 });
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
