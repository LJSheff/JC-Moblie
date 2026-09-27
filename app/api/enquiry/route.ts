import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, phone, registration, message } = await request.json();
  if (![name, phone, message].every((value) => typeof value === "string" && value.trim())) return NextResponse.json({ error: "Missing required details" }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.BOOKING_NOTIFICATION_EMAIL;
  if (!apiKey || !notifyEmail) return NextResponse.json({ error: "Notifications are not configured" }, { status: 503 });
  const safe = (value: unknown) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]!);
  const email = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL || "JC Mobile Mechanic <onboarding@resend.dev>", to: [notifyEmail], reply_to: process.env.RESEND_REPLY_TO || undefined, subject: `New website enquiry from ${name.trim()}`, html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safe(name)}</p><p><strong>Phone:</strong> ${safe(phone)}</p><p><strong>Registration:</strong> ${safe(registration) || "Not supplied"}</p><p><strong>Job needed:</strong><br/>${safe(message).replace(/\n/g, "<br/>")}</p>` }) });
  if (!email.ok) return NextResponse.json({ error: "Could not send notification" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
