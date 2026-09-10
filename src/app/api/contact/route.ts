import { NextResponse } from "next/server";
import { sendContactEmail } from "../../../../actions/sendEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone = "",
      project = "",
      budget = "",
      message,
    } = body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    await sendContactEmail({ name, email, phone, project, budget, message });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "The request body must be valid JSON." },
        { status: 400 },
      );
    }

    const message =
      error instanceof Error
        ? error.message
        : "Unexpected error while sending the form.";
    return NextResponse.json(
      { error: "Failed to send the email.", details: message },
      { status: 500 },
    );
  }
}
