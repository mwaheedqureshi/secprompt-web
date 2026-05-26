"use client";
import { useEffect, useState } from "react";

const DEFAULT_PHRASES = [
  "solving real problems",
  "creating real impact",
  "protecting your business",
  "know your supplier risk",
];

type TypingTextProps = {
  phrases?: string[];
  className?: string;
};

export default function TypingText({ phrases = DEFAULT_PHRASES, className = "" }: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
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
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, phraseIndex, phrases]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-px h-2.5 bg-current ml-0.5 animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}
