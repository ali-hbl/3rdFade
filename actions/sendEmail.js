const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends the contact email through the Brevo API.
 * @param {{ name: string; email: string; phone?: string; project?: string; budget?: string; message: string; }} formData
 */
export async function sendContactEmail(formData) {
  if (!process.env.BREVO_API_KEY) {
    throw new Error(
      "The Brevo API key is missing. Define BREVO_API_KEY in your environment.",
    );
  }

  const {
    name,
    email,
    phone = "",
    project = "",
    budget = "",
    message,
  } = formData;

  const missingField = ["name", "email", "message"].find(
    (field) => !formData[field]?.trim(),
  );
  if (missingField) {
    throw new Error(`The ${missingField} field is required.`);
  }

  const recipientEmail =
    process.env.BREVO_RECIPIENT_EMAIL || "thirdfade@gmail.com";
  const senderName = process.env.BREVO_SENDER_NAME || "3rdfade";
  const senderEmail = process.env.BREVO_SENDER_EMAIL || recipientEmail;

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = escapeHtml(phone);
  const safeProject = escapeHtml(project);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  const emailPayload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: recipientEmail,
      },
    ],
    replyTo: {
      email,
      name,
    },
    subject: `New message from ${name.trim()}`,
    htmlContent: `
            <h1>New message from the contact form</h1>
            <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email :</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone || "Not provided"}</p>
            <p><strong>Project type:</strong> ${safeProject || "Not provided"}</p>
            <p><strong>Estimated budget:</strong> ${safeBudget || "Not provided"}</p>
            <p><strong>Message:</strong><br/>${safeMessage}</p>
    `,
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  let response;
  try {
    response = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(emailPayload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo returned status ${response.status}: ${errorText}`);
  }

  return response.json();
}
