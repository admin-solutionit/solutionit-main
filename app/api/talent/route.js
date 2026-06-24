// app/api/talent/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { talentSchema } from "@/lib/validations/talent";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_TYPES = [
  "application/pdf",

  "application/msword",

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

export async function POST(req) {
  try {
    const formData = await req.formData();

    const data = {
      fullName: formData.get("fullName"),

      phone: formData.get("phone"),

      email: formData.get("email"),

      city: formData.get("city"),

      state: formData.get("state"),

      zip: formData.get("zip"),

      authStatus: formData.get("authStatus"),

      positionSeeking: formData.get("positionSeeking"),

      message: formData.get("message"),
    };

    const resume = formData.get("resume");

    // Zod validation
    const result = talentSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,

          errors: result.error.flatten().fieldErrors,
        },

        {
          status: 400,
        },
      );
    }

    // Resume validation
    if (!resume || !(resume instanceof File)) {
      return NextResponse.json(
        {
          success: false,

          errors: {
            resume: ["Please upload your resume"],
          },
        },

        {
          status: 400,
        },
      );
    }

    if (!ALLOWED_TYPES.includes(resume.type)) {
      return NextResponse.json(
        {
          success: false,

          errors: {
            resume: ["Only PDF, DOC and DOCX files are allowed"],
          },
        },

        {
          status: 400,
        },
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,

          errors: {
            resume: ["Maximum file size is 5 MB"],
          },
        },

        {
          status: 400,
        },
      );
    }

    const bytes = await resume.arrayBuffer();

    await resend.emails.send({
      from: "SolutionIT <noreply@solutionit.com>",

      to: ["web@solutionit.com"],

      replyTo: data.email,

      subject: `New Talent Form Submission By ${data.fullName}`,

      html: `
        <h2>New Talent Submission</h2>

        <p>
          <strong>Name:</strong>
          ${data.fullName}
        </p>

        <p>
          <strong>Email:</strong>
          ${data.email}
        </p>

        <p>
          <strong>Phone:</strong>
          ${data.phone}
        </p>

        <p>
          <strong>City:</strong>
          ${data.city}
        </p>

        <p>
          <strong>State:</strong>
          ${data.state}
        </p>

        <p>
          <strong>Zip:</strong>
          ${data.zip}
        </p>

        <p>
          <strong>Employment Authorization:</strong>
          ${data.authStatus}
        </p>

        <p>
          <strong>Position Seeking:</strong>
          ${data.positionSeeking || "Not specified"}
        </p>

        <p>
          <strong>Message:</strong>
        </p>

        <p style="white-space: pre-line;">
          ${data.message || "-"}
        </p>
      `,

      attachments: [
        {
          filename: resume.name,

          content: Buffer.from(bytes),
        },
      ],
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Talent Form Error:", error);

    return NextResponse.json(
      {
        success: false,

        message: "Something went wrong. Please try again later.",
      },

      {
        status: 500,
      },
    );
  }
}
