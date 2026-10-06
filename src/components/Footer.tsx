import { BUSINESS_NAME, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-sand px-6 py-10 text-center text-sm text-navy/60">
      <ul className="mb-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="me noopener noreferrer"
              className="underline hover:text-navy"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p>
        &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights
        reserved.
      </p>
      <p className="mt-2">
        <a href="/privacy-policy" className="underline hover:text-navy">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
}
