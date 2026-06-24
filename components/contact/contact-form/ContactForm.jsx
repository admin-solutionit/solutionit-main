"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import { contactSchema } from "@/lib/validations/contact";

const SERVICE_OPTIONS = [
  { value: "oracle-staffing", label: "Oracle EBS and Fusion/Cloud Staffing" },
  { value: "remote-oracle", label: "Remote Oracle Staffing" },
  { value: "services", label: "Services" },
  { value: "technology", label: "Technology Talent Solutions" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef(null);

  // Error States
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Final Error / Submit Messages
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const preselectedService = searchParams.get("service") ?? "";

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceArea: preselectedService,
    message: "",
    smsConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setSuccess(false);

    setSubmitMessage("");
    setSubmitError(false);

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);

      return;
    }

    try {
      setSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || {});

        setSubmitError(true);
        setSubmitMessage(
          data.message || "There was an error submitting the form.",
        );

        return;
      }

      setSuccess(true);

      setSubmitError(false);

      setSubmitMessage(
        "Thank you for contacting us. Our team will get back to you shortly.",
      );

      setForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        serviceArea: "",
        message: "",
        smsConsent: false,
      });
    } catch (error) {
      setSubmitError(true);

      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-grey-2 rounded-xl px-4 py-3 text-sm text-deep-blue placeholder:text-grey-1 focus:outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-1 transition-colors duration-200";

  return (
    <section
      id="hiring-form"
      className="pt-4 pb-10 md:pt-6 md:pb-14 bg-white scroll-mt-20 md:scroll-mt-24"
    >
      <div className="container-site">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-deep-blue tracking-tight leading-snug">
            Hiring Oracle ERP or{" "}
            <span className="text-navy">Technology Professionals?</span>
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-3xl">
            Tell us about the role and we'll be in touch.
          </p>
        </motion.div>

        {/* Two-column layout: form + image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Left: form */}
          <div className="flex-1 bg-beige rounded-2xl border border-grey-2 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.fullName[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.company && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.company[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Work email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.email[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.phone[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Service area */}
              <div className="relative" ref={serviceRef}>
                <label htmlFor="serviceArea-btn" className="sr-only">
                  Services
                </label>
                <button
                  id="serviceArea-btn"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={serviceOpen}
                  onClick={() => setServiceOpen((o) => !o)}
                  className={`${inputClass} flex items-center justify-between gap-2 text-left`}
                >
                  <span
                    className={
                      form.serviceArea ? "text-deep-blue" : "text-grey-1"
                    }
                  >
                    {form.serviceArea
                      ? SERVICE_OPTIONS.find(
                          (o) => o.value === form.serviceArea,
                        )?.label
                      : "Services"}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-grey-1 transition-transform duration-200 ${serviceOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {serviceOpen && (
                  <ul
                    role="listbox"
                    aria-label="Services"
                    className="absolute left-0 right-0 top-full mt-1 bg-white border border-grey-2 rounded-xl shadow-lg z-50 overflow-hidden"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <li
                        key={option.value}
                        role="option"
                        aria-selected={form.serviceArea === option.value}
                        onClick={() => {
                          setForm((prev) => ({
                            ...prev,
                            serviceArea: option.value,
                          }));
                          setServiceOpen(false);
                        }}
                        className="px-4 py-3 text-sm text-deep-blue hover:bg-beige cursor-pointer transition-colors duration-150"
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Tell us about your requirement
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirement"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 ml-2 text-xs text-red">
                    {errors.message[0]}
                  </p>
                )}
              </div>

              {/* SMS Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsConsent"
                    checked={form.smsConsent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-grey-2 text-navy focus:ring-navy flex-shrink-0"
                  />

                  <span className="text-xs md:text-sm text-grey-1 leading-relaxed">
                    By checking this box, I consent to receive text messages
                    related to appointments, reminders, updates, and follow-ups
                    from SolutionIT Inc. I understand that message frequency may
                    vary and message and data rates may apply. Reply{" "}
                    <strong className="text-deep-blue">STOP</strong> to opt out
                    at any time or{" "}
                    <strong className="text-deep-blue">HELP</strong> to{" "}
                    <a
                      href="tel:+17815031700"
                      className="text-navy hover:underline"
                    >
                      781-503-1700
                    </a>{" "}
                    for assistance. Please review our{" "}
                    <a href="/privacy" className="text-navy hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-navy hover:underline">
                      SMS Terms & Conditions
                    </a>{" "}
                    for more information.
                  </span>
                </label>

                {errors.smsConsent && (
                  <p className="mt-2 ml-7 text-xs text-red">
                    {errors.smsConsent[0]}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex items-center gap-2.5 bg-navy text-white text-base font-semibold px-8 py-2.5 rounded-full hover:bg-navy-hover transition-colors duration-200"
                >
                  {sending && (
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  )}

                  {sending ? "Sending..." : "Send Enquiry"}

                  {!sending && (
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  )}
                </button>

                {/* {submitMessage && (
                  <p
                    className={`mt-4 ml-2 text-sm ${
                      submitError ? "text-red" : "text-green-600"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )} */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`mt-4 flex items-start gap-3 rounded-2xl border px-4 py-3 ${
                      submitError
                        ? "bg-red-50 border-red-200"
                        : "bg-green-50 border-green-200"
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {submitError ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                    </div>

                    <div>
                      <p
                        className={`text-sm font-semibold ${
                          submitError ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {submitError ? "Submission Failed" : "Thank You!"}
                      </p>

                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          submitError ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {submitMessage}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* Right: image */}
          <div
            className="hidden lg:block relative lg:w-72 xl:w-80 flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ minHeight: "420px" }}
          >
            <Image
              src="/images/contact/tech-professionals.webp"
              alt=""
              fill
              sizes="320px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-8"
        >
          <p className="text-sm font-semibold text-deep-blue mb-2">
            Prefer to reach us directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="tel:+17815031603"
              className="inline-flex items-center gap-2 text-navy text-sm hover:underline transition-colors duration-200"
            >
              <Phone size={14} />
              +1 781-503-1603
            </a>
            <a
              href="mailto:info@solutionit.com"
              className="inline-flex items-center gap-2 text-navy text-sm hover:underline transition-colors duration-200"
            >
              <Mail size={14} />
              info@solutionit.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
