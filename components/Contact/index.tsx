"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FocusField = "name" | "email" | "subject" | "message";

const BRAND = "#014FFD";
const BRAND_TEXT = "#8EA7FF";

const REVIEW_AREAS = [
  "Website & software quality review",
  "Content / AI SEO & search visibility",
  "UX, trust & architecture evaluation",
  "Strategic decision or product review",
];

const CONTACT_POINTS = [
  {
    label: "Evaluation Scope",
    value: "Websites, Content, Software, Strategy",
  },
  {
    label: "Framework",
    value: "L · IO · N · XE (Universal Standard)",
  },
  {
    label: "Response",
    value: "Usually within 24–48 hours",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedFields, setFocusedFields] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name === "user_name"
        ? "name"
        : name === "user_email"
          ? "email"
          : name]: value,
    }));
  };

  const handleFocus = (fieldName: FocusField) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: true }));
  };

  const handleBlur = (fieldName: FocusField) => {
    setFocusedFields((prev) => ({ ...prev, [fieldName]: false }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_amokb3m",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_tmgxquq",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Yy_k399Ugrb3Blmi4"
      )
      .then(
        () => {
          toast.success(
            "Message received. LIONXE will review your request and respond soon.",
            {
              position: "top-right",
              autoClose: 5000,
              theme: "dark",
              style: {
                background: "#071127",
                border: "1px solid rgba(142,167,255,0.25)",
                borderRadius: "14px",
                color: "#ffffff",
                boxShadow: "0 18px 60px rgba(1,79,253,0.25)",
              },
            }
          );

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        () => {
          toast.error(
            "Something went wrong. Please try again or contact us directly by email.",
            {
              position: "top-right",
              autoClose: 5000,
              theme: "dark",
              style: {
                background: "#190B0B",
                border: "1px solid rgba(248,113,113,0.35)",
                borderRadius: "14px",
                color: "#ffffff",
              },
            }
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const floatingLabelClass = (
    field: FocusField,
    value: string
  ) =>
    focusedFields[field] || value
      ? "-top-2 bg-[#071127] px-2 text-xs font-semibold text-[#8EA7FF]"
      : "top-4 text-sm text-slate-400";

  return (
    <main className="relative overflow-hidden bg-[#050B1F] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#014FFD]/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#5271FF]/10 blur-[110px]" />
        <div className="absolute -right-40 top-80 h-[420px] w-[420px] rounded-full bg-[#8EA7FF]/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        {/* Hero */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#014FFD]/30 bg-[#014FFD]/10 px-4 py-2 text-sm font-semibold text-[#8EA7FF] shadow-[0_0_40px_rgba(1,79,253,0.15)]">
            <span className="h-2 w-2 rounded-full bg-[#014FFD] shadow-[0_0_14px_rgba(1,79,253,0.8)]" />
            Contact LIONXE™
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Request a{" "}
            <span className="bg-gradient-to-r from-[#8EA7FF] via-white to-[#5271FF] bg-clip-text text-transparent">
              Universal Quality Review
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Submit your asset, project, software, content strategy, or complex decision
            for evaluation through the universal LIONXE framework — governed by
            Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and
            Exceptional Distinction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#071127]/92 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5271FF]/80 to-transparent" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#014FFD]/18 blur-3xl" />

            <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#8EA7FF]">
                  Send a request
                </p>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Tell us what you want evaluated
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  Share the URL, architectural scope, strategic goal, or decision
                  parameters you want LIONXE to audit.
                </p>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#014FFD]/30 bg-[#014FFD]/15 shadow-[0_0_35px_rgba(1,79,253,0.22)]">
                <svg
                  className="h-7 w-7 text-[#8EA7FF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a10.3 10.3 0 01-4.255-.949L3 20l1.395-3.72A7.25 7.25 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`pointer-events-none absolute left-4 z-10 transition-all duration-300 ${floatingLabelClass(
                        "name",
                        formData.name
                      )}`}
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={() => handleBlur("name")}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#050B1F] px-5 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#014FFD]/70 focus:shadow-[0_0_0_4px_rgba(1,79,253,0.16)]"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`pointer-events-none absolute left-4 z-10 transition-all duration-300 ${floatingLabelClass(
                        "email",
                        formData.email
                      )}`}
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                      className="w-full rounded-2xl border border-white/10 bg-[#050B1F] px-5 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#014FFD]/70 focus:shadow-[0_0_0_4px_rgba(1,79,253,0.16)]"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className={`pointer-events-none absolute left-4 z-10 transition-all duration-300 ${floatingLabelClass(
                      "subject",
                      formData.subject
                    )}`}
                  >
                    Subject / Review Type *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={() => handleBlur("subject")}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#050B1F] px-5 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#014FFD]/70 focus:shadow-[0_0_0_4px_rgba(1,79,253,0.16)]"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`pointer-events-none absolute left-4 z-10 transition-all duration-300 ${floatingLabelClass(
                      "message",
                      formData.message
                    )}`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                    required
                    className="w-full resize-none rounded-2xl border border-white/10 bg-[#050B1F] px-5 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#014FFD]/70 focus:shadow-[0_0_0_4px_rgba(1,79,253,0.16)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#014FFD] to-[#003BC7] px-8 py-4 text-base font-bold text-white shadow-[0_16px_40px_rgba(1,79,253,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(1,79,253,0.38)] focus:outline-none focus:ring-4 focus:ring-[#014FFD]/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Review Request
                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-8 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  ✓
                </span>
                Private inquiry & evaluation
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#014FFD]/15 text-[#8EA7FF]">
                  ✓
                </span>
                Universal framework response
              </div>
            </div>
          </div>

          {/* Right Side Panel */}
          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#071127]/92 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#8EA7FF]">
                    Review Areas
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    What LIONXE evaluates
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#014FFD]/30 bg-[#014FFD]/15 text-[#8EA7FF]">
                  LX
                </div>
              </div>

              <div className="space-y-3">
                {REVIEW_AREAS.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-[#050B1F]/70 p-4 transition-all duration-300 hover:border-[#014FFD]/35 hover:bg-[#0B1430]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#014FFD]/30 bg-[#014FFD]/10 text-sm font-black text-[#8EA7FF]">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-200 group-hover:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#071127]/92 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-7">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#8EA7FF]">
                Contact Context
              </p>

              <div className="space-y-4">
                {CONTACT_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm text-slate-500">{point.label}</p>
                    <p className="mt-1 font-bold text-slate-100">
                      {point.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#014FFD]/25 bg-gradient-to-br from-[#014FFD]/20 via-[#071127] to-[#050B1F] p-6 shadow-[0_24px_90px_rgba(1,79,253,0.22)] sm:p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#014FFD]/30 blur-3xl" />

              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#B8C7FF]">
                Before sending
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Include relevant context
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                For a precise evaluation, include your URL, project documentation,
                software link, or strategic decision outline with a brief note on what
                you need reviewed.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="mt-16"
      />
    </main>
  );
};



export default Contact;