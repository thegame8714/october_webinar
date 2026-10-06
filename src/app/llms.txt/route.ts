import { faqs } from "@/lib/faqs";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  HOST_NAME,
} from "@/lib/site";
import { WEBINAR_DATE_LABEL } from "@/lib/webinar";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is a free live online webinar hosted by ${HOST_NAME}, an engineering manager for more than 5 years who now coaches engineering managers to lead in the age of AI. It teaches how to recognize each type of team member and adapt your communication to them, so you repeat yourself less and coach more.

## Key facts

- Event: ${SITE_NAME}, a free live webinar (online)
- Date: ${WEBINAR_DATE_LABEL}
- Host: ${HOST_NAME}
- Cost: free to attend live. An optional VIP add-on costs $67 and includes the replay, the live Q&A, and the slide deck.
- Audience: works mainly for engineering managers, and is good for all managers.
- Register: ${SITE_URL}

## Pages

- [Home and registration](${SITE_URL}): the webinar details, a short welcome video with transcript, testimonials, the registration form, and the FAQ.

## FAQ

${faqs.map((faq) => `### ${faq.question}\n${faq.answer}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
