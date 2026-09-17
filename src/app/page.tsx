import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
