import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { eventSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={eventSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <main>
        <Hero />
        <WhatYoullLearn />
        <Testimonials />
        <SignupSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
