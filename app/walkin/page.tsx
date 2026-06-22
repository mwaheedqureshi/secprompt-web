import type { Metadata } from "next";
import WalkinClient from "./WalkinClient";

export const metadata: Metadata = {
  title: "Walk-In Assessment — SecPrompt",
  description:
    "Upload supplier security documents and receive an executive risk decision, control gap analysis, and PDF reports. One-time £49 assessment. No account required.",
};

export default function WalkinPage() {
  return <WalkinClient />;
}
