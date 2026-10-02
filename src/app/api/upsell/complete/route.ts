import { NextRequest, NextResponse } from "next/server";
import { SIGNUP_COOKIE_NAME, SIGNUP_COOKIE_MAX_AGE } from "@/lib/signup-cookie";
import { UPSELL_OUTCOME_COOKIE_NAME, UpsellOutcome } from "@/lib/upsell-outcome";

const RESULT_TO_OUTCOME: Record<string, UpsellOutcome> = {
  paid: "vip",
  declined: "free",
};

export async function GET(req: NextRequest) {
  if (!req.cookies.has(SIGNUP_COOKIE_NAME)) {
    return NextResponse.redirect(new URL("/", req.url), 303);
  }

  const outcome = RESULT_TO_OUTCOME[req.nextUrl.searchParams.get("result") ?? ""];
  if (!outcome) {
    return NextResponse.redirect(new URL("/upsell", req.url), 303);
  }

  const res = NextResponse.redirect(new URL("/thank-you", req.url), 303);
  res.cookies.set(UPSELL_OUTCOME_COOKIE_NAME, outcome, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SIGNUP_COOKIE_MAX_AGE,
  });

  return res;
}
