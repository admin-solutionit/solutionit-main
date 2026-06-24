"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  UploadCloud,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

import { talentSchema } from "@/lib/validations/talent";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const POSITIONS = [
  "Oracle Functional Consultant",
  "Oracle Technical Consultant",
  "Oracle DBA",
  "Oracle Project Manager",
  "ERP Business Analyst",
  "Cloud & Data Engineer",
  "Application Developer",
  "DevOps Engineer",
  "Technology Specialist",
  "Other",
];

function CustomSelect({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
  required,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const inputClass =
    "w-full bg-white border border-grey-2 rounded-xl px-4 py-3 text-sm text-deep-blue placeholder:text-grey-1 focus:outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-1 transition-colors duration-200";

  return (
    <div className="relative" ref={ref}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {/* Visually hidden input so native form validation catches empty required selects */}
      {required && (
        <input
          tabIndex={-1}
          aria-hidden="true"
          required
          value={value}
          onChange={() => {}}
          className="absolute inset-0 opacity-0 pointer-events-none w-full h-full"
        />
      )}
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} flex items-center justify-between gap-2 text-left relative`}
      >
        <span className={value ? "text-deep-blue" : "text-grey-1"}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 text-grey-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 top-full mt-1 bg-white border border-grey-2 rounded-xl shadow-lg z-50 overflow-y-auto max-h-52"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-3 text-sm text-deep-blue hover:bg-beige cursor-pointer transition-colors duration-150"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TalentForm() {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref");
  const jobTitle = searchParams.get("job");
  const manager = searchParams.get("manager") || "HR Manager";

  // Error States
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Error / Success Messages
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    authStatus: "",
    positionSeeking: "",
    message: "",
    resume: null,
    smsConsent: false,
  });

  useEffect(() => {
    if (refCode) {
      setForm((prev) => ({
        ...prev,
        message: `Dear ${manager},\n\nI am writing to express my interest in the ${jobTitle} position (Reference Code: ${refCode}).\n\nPlease find my resume attached for your consideration. I look forward to the opportunity to discuss how my experience aligns with your requirements.\n\nBest regards,`,
      }));
    }
  }, [refCode, jobTitle, manager]);

  // Re-scroll after CEIPAL widget loads and shifts layout
  useEffect(() => {
    if (window.location.hash !== "#talent-form") return;
    const widgetEl = document.getElementById("example-widget-container");
    if (!widgetEl) return;
    let done = false;
    const observer = new ResizeObserver(() => {
      if (done || widgetEl.offsetHeight === 0) return;
      done = true;
      observer.disconnect();
      document
        .getElementById("talent-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    observer.observe(widgetEl);
    const fallback = setTimeout(() => {
      if (!done)
        document
          .getElementById("talent-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSelect = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Validate Resume File
  const validateResume = (file) => {
    if (!file) {
      return "Please upload your resume";
    }

    const allowed = [
      "application/pdf",

      "application/msword",

      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      return "Only PDF, DOC and DOCX files are allowed";
    }

    if (file.size > 5 * 1024 * 1024) {
      return "Maximum file size is 5 MB";
    }

    return null;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    setSuccess(false);

    // For Error / Success Messages
    setSubmitMessage("");
    setSubmitError(false);

    const result = talentSchema.safeParse({
      fullName: form.fullName,

      phone: form.phone,

      email: form.email,

      city: form.city,

      state: form.state,

      zip: form.zip,

      authStatus: form.authStatus,

      positionSeeking: form.positionSeeking,

      message: form.message,

      smsConsent: form.smsConsent,
    });

    let newErrors = {};

    if (!result.success) {
      newErrors = result.error.flatten().fieldErrors;
    }

    const resumeError = validateResume(form.resume);

    if (resumeError) {
      newErrors.resume = [resumeError];
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    try {
      setSending(true);

      const fd = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        fd.append(key, value);
      });

      const response = await fetch("/api/talent", {
        method: "POST",

        body: fd,
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors(data.errors || {});

        setSubmitError(true);

        setSubmitMessage(
          data.message || "There was an error submitting your application.",
        );

        return;
      }

      setSuccess(true);

      setSubmitError(false);

      setSubmitMessage(
        "Thank you for submitting your profile. Our recruiting team will review your details and contact you if there is a suitable opportunity.",
      );

      setForm({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        zip: "",
        authStatus: "",
        positionSeeking: "",
        message: "",
        resume: null,
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
      id="talent-form"
      className="py-10 md:py-14 bg-white scroll-mt-16 md:scroll-mt-[72px]"
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
            Don&apos;t See <span className="text-navy">the Right Role?</span>
          </h2>
          <p className="mt-3 text-grey-1 text-base leading-relaxed max-w-3xl">
            We&apos;re always expanding our network. If you have Oracle ERP or
            enterprise technology experience and you&apos;re open to hearing
            about opportunities (contract, long-term, or permanent), send us
            your details and we&apos;ll be in touch when something fits.
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
              {/* Row 1: Full name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="talent-fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="talent-fullName"
                    type="text"
                    name="fullName"
                    placeholder="Full name *"
                    value={form.fullName}
                    onChange={handleChange}
                    // required
                    className={inputClass}
                  />
                  {errors.fullName && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.fullName[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="talent-phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="talent-phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000 *"
                    value={form.phone}
                    onChange={handleChange}
                    // required
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.phone[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="talent-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="talent-email"
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    value={form.email}
                    onChange={handleChange}
                    // required
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.email[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="talent-city" className="sr-only">
                    City
                  </label>
                  <input
                    id="talent-city"
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={form.city}
                    onChange={handleChange}
                    // required
                    className={inputClass}
                  />
                  {errors.city && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.city[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: State + Zip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <CustomSelect
                    id="talent-state"
                    label="State"
                    placeholder="State *"
                    options={US_STATES}
                    value={form.state}
                    onChange={handleSelect("state")}
                    // required
                  />
                  {errors.state && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.state[0]}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="talent-zip" className="sr-only">
                    Zip code
                  </label>
                  <input
                    id="talent-zip"
                    type="text"
                    name="zip"
                    placeholder="Zip code *"
                    value={form.zip}
                    onChange={handleChange}
                    // required
                    className={inputClass}
                  />
                  {errors.zip && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.zip[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Auth status + Position seeking */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <CustomSelect
                    id="talent-authStatus"
                    label="Employment authorization status"
                    placeholder="Employment authorization status *"
                    options={[
                      "I am authorized to work in the U.S. without sponsorship",
                      "I am authorized to work in the U.S. for my present employer",
                      "I require sponsorship to work in the U.S.",
                    ]}
                    value={form.authStatus}
                    onChange={handleSelect("authStatus")}
                    // required
                  />
                  {errors.authStatus && (
                    <p className="mt-2 ml-2 text-xs text-red">
                      {errors.authStatus[0]}
                    </p>
                  )}
                </div>
                <CustomSelect
                  id="talent-positionSeeking"
                  label="Position seeking"
                  placeholder="Position seeking"
                  options={POSITIONS}
                  value={form.positionSeeking}
                  onChange={handleSelect("positionSeeking")}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="talent-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="talent-message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Resume upload */}
              <div>
                <label htmlFor="talent-resume" className="sr-only">
                  Upload resume
                </label>
                <label
                  htmlFor="talent-resume"
                  className={`flex flex-col items-center justify-center gap-2 w-full rounded-xl border-2 border-dashed px-4 py-6 cursor-pointer transition-colors duration-200 ${
                    form.resume
                      ? "border-navy bg-navy/5"
                      : "border-grey-2 bg-white hover:border-navy hover:bg-navy/5"
                  }`}
                >
                  {form.resume ? (
                    <div className="flex items-center gap-3">
                      <UploadCloud
                        size={18}
                        className="text-navy flex-shrink-0"
                      />
                      <span className="text-sm text-navy font-medium truncate max-w-[220px]">
                        {form.resume.name}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setForm((prev) => ({ ...prev, resume: null }));
                        }}
                        className="text-grey-1 hover:text-deep-blue transition-colors duration-150"
                        aria-label="Remove file"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <UploadCloud size={22} className="text-grey-1" />
                      <span className="text-sm text-grey-1">
                        <span className="font-semibold text-navy">
                          Click to upload
                        </span>{" "}
                        your resume *
                      </span>
                      <span className="text-xs text-grey-1">
                        PDF, DOC or DOCX
                      </span>
                    </>
                  )}
                  <input
                    id="talent-resume"
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    // required
                    className="hidden"
                  />
                </label>
              </div>
              {errors.resume && (
                <p className="ml-2 text-xs text-red">{errors.resume[0]}</p>
              )}

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
                  className="group inline-flex items-center gap-2.5 bg-navy text-white text-base font-semibold px-8 py-2.5 rounded-full hover:bg-navy-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {sending && (
                    <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  )}

                  {sending ? "Submitting..." : "Submit"}

                  {!sending && (
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  )}
                </button>

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
                          submitError ? "text-red" : "text-green-700"
                        }`}
                      >
                        {submitError
                          ? "Submission Failed"
                          : "Application Submitted"}
                      </p>

                      <p
                        className={`mt-1 text-sm leading-relaxed ${
                          submitError ? "text-red" : "text-green-600"
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
              src="/images/careers/role.webp"
              alt=""
              fill
              sizes="320px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
