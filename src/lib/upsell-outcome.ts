export const UPSELL_OUTCOME_COOKIE_NAME = "webinar_upsell_outcome";

export type UpsellOutcome = "vip" | "free";

export function isUpsellOutcome(value: string | undefined): value is UpsellOutcome {
  return value === "vip" || value === "free";
}
