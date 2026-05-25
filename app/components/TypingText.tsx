"use client";
import { useEffect, useState } from "react";

const PHRASES = [
  "AI-powered TPRM",
  "Human-verified assessments",
  "Audit-ready risk decisions",
  "GDPR · DORA · NIST · ISO",
];

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, phraseIndex]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-px h-3 bg-[#6A6258] ml-0.5 animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}
