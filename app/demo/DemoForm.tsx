"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  currentProcess: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  company: "",
  companySize: "",
  currentProcess: "",
  message: "",
};

export default function DemoForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submittedName, setSubmittedName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmittedName(form.fullName.trim().split(/\s+/)[0] || form.fullName);
      setStatus("success");
      setForm(initialForm);
      return;
    }

    setStatus("error");
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 md:p-8">
      {status === "success" ? (
        <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-dark-900">
            Thanks {submittedName}! We&apos;ll be in touch within 24 hours.
          </h2>
        </div>
      ) : (
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
              placeholder="Jane Smith"
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
              placeholder="jane@company.com"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="company">
              Company name
            </label>
            <input
              id="company"
              required
              value={form.company}
              onChange={(event) => setForm((value) => ({ ...value, company: event.target.value }))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
              placeholder="Acme Financial"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="companySize">
                Company size
              </label>
              <select
                id="companySize"
                required
                value={form.companySize}
                onChange={(event) => setForm((value) => ({ ...value, companySize: event.target.value }))}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
              >
                <option value="">Select size</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="currentProcess">
                Current TPRM process
              </label>
              <select
                id="currentProcess"
                required
                value={form.currentProcess}
                onChange={(event) => setForm((value) => ({ ...value, currentProcess: event.target.value }))}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary-500"
              >
                <option value="">Select process</option>
                <option value="Manual spreadsheets">Manual spreadsheets</option>
                <option value="Existing GRC tool">Existing GRC tool</option>
                <option value="No formal process">No formal process</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark-900" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500"
              placeholder="Tell us about your current TPRM process"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending..." : "Book My Demo"}
            {status === "sending" ? null : <ArrowRight className="h-4 w-4" />}
          </button>

          {status === "error" ? (
            <p className="text-center text-sm font-medium text-red-600">
              Something went wrong. Please try again.
            </p>
          ) : null}
        </form>
      )}
    </div>
  );
}
