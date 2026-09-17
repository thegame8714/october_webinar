import { NextRequest, NextResponse } from "next/server";

type SubscribePayload = {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<SubscribePayload>;
  const { name, email, phone, consent } = body;

  if (!name || !email || !phone || !consent) {
    return NextResponse.json(
      { error: "Missing required fields or consent." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GHL_WEBHOOK_URL is not set — signup was not forwarded.");
    return NextResponse.json(
      { error: "Signup is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const ghlRes = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone, consent }),
  });

  if (!ghlRes.ok) {
    console.error("GHL webhook rejected the signup:", ghlRes.status);
    return NextResponse.json(
      { error: "Could not save your signup. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
