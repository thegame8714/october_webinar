export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-sand px-6 py-10 text-center text-sm text-navy/60">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <p className="mt-2">
        <a href="/privacy-policy" className="underline hover:text-navy">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
}
