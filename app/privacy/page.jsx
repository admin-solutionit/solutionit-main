"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Global Components
import Nav from "@/components/global/nav/Nav";
import Footer from "@/components/global/footer/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: (
      <div className="space-y-5">
        <p className="text-base text-grey-1 leading-relaxed">
          We may collect the following types of information:
        </p>
        <div>
          <h3 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-2">
            a. Personal Information
          </h3>
          <ul className="space-y-1.5">
            {[
              "Name",
              "Email address",
              "Phone number",
              "Company name",
              "Job title",
              "Any other information you provide through forms, emails, or inquiries",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-2">
            b. Non-Personal Information
          </h3>
          <ul className="space-y-1.5">
            {[
              "IP address",
              "Browser type and version",
              "Pages visited and time spent on the Website",
              "Device information",
              "Cookies and usage data",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <div>
        <p className="text-base text-grey-1 leading-relaxed mb-4">
          We use the collected information for the following purposes:
        </p>
        <ul className="space-y-1.5">
          {[
            "To respond to inquiries and provide requested services",
            "To improve our Website and services",
            "To send newsletters, updates, and marketing communications (you may opt out at any time)",
            "To comply with legal obligations",
            "To detect and prevent fraud or security issues",
            "To manage SMS communication and provide required disclosures",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "3. How We Share Your Information",
    content: (
      <div className="space-y-5">
        <p className="text-base text-grey-1 leading-relaxed">
          We do not sell or rent your personal information. However, we may
          share information with:
        </p>
        <div className="bg-beige border-l-4 border-navy px-5 py-4 rounded-r-xl">
          <p className="text-[15px] font-semibold text-deep-blue tracking-tight mb-1">
            SMS Privacy Notice
          </p>
          <p className="text-base text-grey-1 leading-relaxed">
            SMS opt-in consent or phone numbers collected for SMS purposes will{" "}
            <span className="font-semibold text-deep-blue">NOT</span> be shared
            with third parties or affiliates for marketing purposes.
          </p>
        </div>
        <ul className="space-y-3">
          {[
            {
              label: "Service Providers",
              body: "Third-party vendors who assist with IT services, analytics, marketing, or payment processing.",
            },
            {
              label: "Legal Compliance",
              body: "If required by law, court orders, or government regulations.",
            },
            {
              label: "Business Transfers",
              body: "In case of mergers, acquisitions, or business restructuring.",
            },
          ].map(({ label, body }) => (
            <li
              key={label}
              className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
              <span>
                <span className="font-semibold text-deep-blue">{label}:</span>{" "}
                {body}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "4. SMS Communication and Consent",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-base text-grey-1 leading-relaxed mb-4">
            If you consent to receive SMS from Solution IT, you agree to receive
            messages related to our services.
          </p>
          <ul className="space-y-1.5">
            {[
              "A phone number field is included in the form collecting SMS consent.",
              "If consent is obtained via other means (paper forms, verbal agreement, email, or first customer-initiated message), appropriate disclosure is provided.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-grey-2 rounded-2xl p-6 bg-beige/40">
          <h3 className="text-[22px] font-semibold text-deep-blue tracking-tight leading-snug mb-4">
            SMS Terms &amp; Conditions
          </h3>
          <p className="text-base text-grey-1 leading-relaxed mb-6">
            As part of the TCR registration process, mobile carriers require
            that you provide SMS Terms &amp; Conditions for your messaging
            campaigns. The Terms of Service related to SMS communication must
            either be included in the privacy policy or be a stand-alone
            document and must include the following:
          </p>
          <div className="space-y-5">
            <div>
              <h4 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-1">
                Consent for SMS Communication
              </h4>
              <p className="text-base text-grey-1 leading-relaxed">
                Information obtained as part of the SMS consent process will not
                be shared with third parties.
              </p>
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-1">
                Types of SMS Communications
              </h4>
              <p className="text-base text-grey-1 leading-relaxed">
                You may receive SMS messages related to: Appointments,
                Reminders, Updates, and Follow-ups.
              </p>
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-1">
                Standard Messaging Disclosures
              </h4>
              <p className="text-base text-grey-1 leading-relaxed">
                Message and data rates may apply. You can opt-out at any time by
                texting "STOP." For assistance, text "HELP" or visit our{" "}
                <Link
                  href="/privacy"
                  className="text-navy hover:text-navy-hover underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <ul className="space-y-1.5">
              {[
                { label: "Opt-Out", body: "Reply STOP at any time." },
                { label: "Help", body: "Reply HELP for support." },
                {
                  label: "Message Frequency",
                  body: "Messaging frequency may vary.",
                },
                {
                  label: "Message & Data Rates",
                  body: "Standard message and data rates may apply.",
                },
              ].map(({ label, body }) => (
                <li
                  key={label}
                  className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-deep-blue">
                      {label}:
                    </span>{" "}
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 bg-white border border-grey-2 rounded-xl p-5">
            <h4 className="text-[15px] font-semibold text-deep-blue tracking-tight mb-2">
              Website Form Consent
            </h4>
            <p className="text-base text-grey-1 leading-relaxed mb-3">
              If SMS consent is obtained via a website form, we ensure:
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                Consent is explicitly collected through an unchecked checkbox
                (not required to submit the form).
              </li>
              <li className="flex items-start gap-2.5 text-base text-grey-1 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-navy mt-[9px] flex-shrink-0" />
                <span>
                  The opt-in statement reads: "I consent to receive SMS from
                  Solution IT. Reply STOP to opt-out; Reply HELP for support;
                  Message &amp; data rates may apply; Messaging frequency may
                  vary. Visit{" "}
                  <Link
                    href="/privacy"
                    className="text-navy hover:text-navy-hover underline underline-offset-2"
                  >
                    solutionit.com/privacy
                  </Link>{" "}
                  to see our Privacy Policy and Terms of Service."
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: (
      <p className="text-base text-grey-1 leading-relaxed">
        We use cookies and similar tracking technologies to enhance your
        browsing experience. You can manage your cookie preferences through your
        browser settings.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p className="text-base text-grey-1 leading-relaxed">
        We implement reasonable security measures to protect your personal data
        from unauthorized access, alteration, disclosure, or destruction.
        However, no internet transmission is 100% secure.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p className="text-base text-grey-1 leading-relaxed">
        Our Website may contain links to third-party websites. We are not
        responsible for their privacy practices and encourage you to review
        their policies before sharing personal data.
      </p>
    ),
  },
  {
    title: "8. Changes to This Privacy Policy",
    content: (
      <p className="text-base text-grey-1 leading-relaxed">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <div className="space-y-1.5">
        <p className="text-base text-grey-1 leading-relaxed mb-4">
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact us at:
        </p>
        <p className="text-[15px] font-semibold text-deep-blue tracking-tight">
          Solution IT
        </p>
        <p className="text-base text-grey-1 leading-relaxed">
          187 Ballardvale Street, Suite A215, Wilmington, MA 01887
        </p>
        <p className="text-base text-grey-1 leading-relaxed">
          Email:{" "}
          <a
            href="mailto:info@solutionit.com"
            className="text-navy hover:text-navy-hover underline underline-offset-2"
          >
            info@solutionit.com
          </a>
        </p>
        <p className="text-base text-grey-1 leading-relaxed">
          Phone:{" "}
          <a
            href="tel:+17815031700"
            className="text-navy hover:text-navy-hover underline underline-offset-2"
          >
            781-503-1700
          </a>
        </p>
      </div>
    ),
  },
];

function AccordionItem({ title, content, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="border-t border-grey-2"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full py-6 flex items-center justify-between gap-4 text-left"
      >
        <span className="text-[18px] font-semibold text-deep-blue tracking-tight leading-snug">
          {title}
        </span>
        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className={`flex-shrink-0 text-grey-1 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PrivacyPage() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-white pt-24 md:pt-32 pb-12">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 text-navy">
                Legal
              </span>
              <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] tracking-tight font-semibold text-deep-blue max-w-2xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-base text-grey-1 leading-relaxed max-w-xl">
                Solution IT is committed to protecting the privacy of our
                website visitors, clients, and users of our services. This
                policy explains how we collect, use, disclose, and safeguard
                your information when you visit{" "}
                <Link
                  href="https://solutionit.com"
                  className="text-navy hover:text-navy-hover underline underline-offset-2"
                >
                  solutionit.com
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* Accordion */}
        <section className="bg-white pb-20">
          <div className="container-site">
            <div className="max-w-3xl">
              {SECTIONS.map((section, i) => (
                <AccordionItem
                  key={i}
                  index={i}
                  title={section.title}
                  content={section.content}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
              <div className="border-t border-grey-2" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
