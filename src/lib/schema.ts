import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  HOST_NAME,
  BUSINESS_NAME,
  SAME_AS,
} from "./site";
import { WEBINAR_NAME, WEBINAR_DATETIME_ISO } from "./webinar";
import { faqs } from "./faqs";
import { VIDEO_TRANSCRIPT } from "./transcript";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const HOST_ID = `${SITE_URL}/#host`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: BUSINESS_NAME,
  brand: { "@type": "Brand", name: SITE_NAME },
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-light.png` },
  description: SITE_DESCRIPTION,
  ...(SAME_AS.length > 0 && { sameAs: SAME_AS }),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": ORGANIZATION_ID },
};

export const hostSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": HOST_ID,
  name: HOST_NAME,
  jobTitle: "Engineering manager and coach for engineering managers",
  description:
    "Engineering manager for more than 5 years. For the past two years, a coach who helps engineering managers lead in the age of AI.",
  url: SITE_URL,
  worksFor: { "@id": ORGANIZATION_ID },
  sameAs: SAME_AS,
  knowsAbout: [
    "Team communication",
    "Engineering management",
    "Coaching engineering managers",
  ],
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
  performer: { "@id": HOST_ID },
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: `Welcome to ${WEBINAR_NAME}`,
  description:
    "Fabio Salimbeni explains why being clear is not enough, and how the webinar teaches you to adapt your communication to each team member.",
  thumbnailUrl: `${SITE_URL}/video-poster.jpg`,
  uploadDate: "2026-10-02",
  duration: "PT1M25S",
  inLanguage: "en",
  ...(process.env.NEXT_PUBLIC_WEBINAR_VIDEO_URL && {
    contentUrl: process.env.NEXT_PUBLIC_WEBINAR_VIDEO_URL,
  }),
  transcript: VIDEO_TRANSCRIPT.join(" "),
  author: { "@id": HOST_ID },
  publisher: { "@id": ORGANIZATION_ID },
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
