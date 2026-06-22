"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:8000";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  jobTitle: string;
  inquiryType: string;
  assessmentVolume: string;
  areaOfInterest: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  jobTitle: "",
  inquiryType: "",
  assessmentVolume: "",
  areaOfInterest: "",
  message: "",
};

const inquiryTypes = [
  "Book a Demo",
  "Product Information",
  "Pricing",
  "Security Inquiry",
  "Privacy Inquiry",
  "Partnership",
  "Other",
];

const assessmentVolumes = [
  "1-25 suppliers",
  "26-100 suppliers",
  "101-500 suppliers",
  "500+ suppliers",
  "Not sure yet",
];

const areasOfInterest = [
  "Evidence validation",
  "Supplier claim review",
  "Audit-ready reporting",
  "Framework alignment",
  "Pilot / early access",
  "Other",
];

export default function DemoForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(event: { preventDefault(): void }) {
    event.preventDefault();
    setStatus("sending");

    const message = [
      form.message,
      "",
      `Inquiry type: ${form.inquiryType}`,
      form.jobTitle ? `Job title: ${form.jobTitle}` : null,
      form.assessmentVolume ? `Assessment volume: ${form.assessmentVolume}` : null,
      form.areaOfInterest ? `Area of interest: ${form.areaOfInterest}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch(`${API_URL}/api/v1/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          company: form.company,
          message,
        }),
      });

      if (response.ok) {
        router.push("/demo/thank-you");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 md:p-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="fullName">
            Full name
          </label>
          <input
            id="fullName"
            required
            value={form.fullName}
            onChange={(event) => setForm((value) => ({ ...value, fullName: event.target.value }))}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
            placeholder="Your work email"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              required
              value={form.company}
              onChange={(event) => setForm((value) => ({ ...value, company: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
              placeholder="Company name"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="jobTitle">
              Job title <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <input
              id="jobTitle"
              value={form.jobTitle}
              onChange={(event) => setForm((value) => ({ ...value, jobTitle: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
              placeholder="Your role"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="inquiryType">
            Inquiry type
          </label>
          <select
            id="inquiryType"
            required
            value={form.inquiryType}
            onChange={(event) => setForm((value) => ({ ...value, inquiryType: event.target.value }))}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
          >
            <option value="">Select inquiry type</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="assessmentVolume">
              Assessment volume <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <select
              id="assessmentVolume"
              value={form.assessmentVolume}
              onChange={(event) => setForm((value) => ({ ...value, assessmentVolume: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
            >
              <option value="">Select volume</option>
              {assessmentVolumes.map((volume) => (
                <option key={volume} value={volume}>
                  {volume}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="areaOfInterest">
              Area of interest <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <select
              id="areaOfInterest"
              value={form.areaOfInterest}
              onChange={(event) => setForm((value) => ({ ...value, areaOfInterest: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
            >
              <option value="">Select area</option>
              {areasOfInterest.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            value={form.message}
            onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
            rows={4}
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500"
            placeholder="Tell us about your supplier risk programme, security question, privacy request, or pilot interest"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Submitting..." : "Submit Contact Request"}
          {status === "sending" ? null : <ArrowRight className="h-4 w-4" />}
        </button>

        {status === "error" ? (
          <p className="text-center text-sm font-medium text-red-600">
            Something went wrong. Please try again in a moment.
          </p>
        ) : null}
      </form>
    </div>
  );
}
