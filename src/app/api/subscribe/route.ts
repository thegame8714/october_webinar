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

  // -----------------------------------------------------------------------
  // TODO: send this lead to GoHighLevel once you've decided how to connect.
  //
  // Option A — GHL Private Integration / Contacts API:
  //   const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${process.env.GHL_API_TOKEN}`,
  //       Version: "2021-07-28",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       locationId: process.env.GHL_LOCATION_ID,
  //       name,
  //       email,
  //       phone,
  //     }),
  //   });
  //
  // Option B — GHL Inbound Webhook (Workflow trigger):
  //   await fetch(process.env.GHL_WEBHOOK_URL!, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, email, phone, consent }),
  //   });
  //
  // Add the relevant env vars in Vercel Project Settings -> Environment
  // Variables, then uncomment one of the options above.
  // -----------------------------------------------------------------------

  console.log("New webinar signup:", { name, email, phone, consent });

  return NextResponse.json({ ok: true });
}
