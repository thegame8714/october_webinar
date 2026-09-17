export default function Footer() {
  return (
    <footer className="bg-navy-dark px-6 py-10 text-center text-sm text-cream/50">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <p className="mt-2">
        <a href="/privacy-policy" className="underline hover:text-cream/80">
          Privacy Policy
        </a>
      </p>
    </footer>
  );
}
