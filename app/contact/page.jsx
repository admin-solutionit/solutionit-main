import { Suspense } from "react";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

// Page Components
import Hero from "@/components/contact/hero/Hero";
import ContactForm from "@/components/contact/contact-form/ContactForm";
import Consultant from "@/components/contact/consultant/Consultant";
import Locations from "@/components/contact/locations/Locations";

export const metadata = {
  title: "Contact Us — SolutionIT",
  description:
    "Get in touch with SolutionIT. Whether you need Oracle ERP or technology talent, or you are a consultant looking for your next engagement, we are here to help.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
        <Consultant />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
