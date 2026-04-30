"use client";

import { useEffect, useState } from "react";

const messages = [
  "Mapping evidence to controls",
  "Reviewing vendor assurance",
  "Identifying control gaps",
  "Generating audit-ready insights",
];

export default function TypingText() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = messages[messageIndex];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 55);

        return () => clearTimeout(timer);
      }

      const pauseTimer = setTimeout(() => {
        setPhase("deleting");
      }, 1500);

      return () => clearTimeout(pauseTimer);
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const timer = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 35);

        return () => clearTimeout(timer);
      }

      setMessageIndex((prev) => (prev + 1) % messages.length);
      setPhase("typing");
    }
  }, [displayed, phase, messageIndex]);

  return (
    <span className="inline-flex items-center">
      {displayed}
      <span className="ml-1 h-3 w-[1px] animate-pulse bg-[#6A6258]" />
    </span>
  );
}