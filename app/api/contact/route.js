import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const data = result.data;

    await resend.emails.send({
      from: "SolutionIT <noreply@solutionit.com>",

      to: ["web@solutionit.com"],

      replyTo: data.email,

      subject: `New Contact Form Submission By ${data.fullName}`,

      html: `
        <h2>A new contact form has been submitted on the website. Here are the details:</h2>

        <p><strong>Name:</strong> ${data.fullName}</p>

        <p><strong>Company:</strong> ${data.company}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p><strong>Service:</strong> ${data.serviceArea}</p>

        <p><strong>Message:</strong></p>

        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
