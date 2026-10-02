import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  HOST_NAME,
  SAME_AS,
} from "./site";
import { WEBINAR_NAME, WEBINAR_DATETIME_ISO } from "./webinar";
import { faqs } from "./faqs";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-light.png` },
  description: SITE_DESCRIPTION,
  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
};

export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${WEBINAR_NAME}: free live webinar`,
  description: SITE_DESCRIPTION,
  startDate: WEBINAR_DATETIME_ISO,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: { "@type": "VirtualLocation", url: SITE_URL },
  image: [`${SITE_URL}/opengraph-image.png`],
  inLanguage: "en",
  isAccessibleForFree: true,
  organizer: { "@id": ORGANIZATION_ID },
  performer: { "@type": "Person", name: HOST_NAME },
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
