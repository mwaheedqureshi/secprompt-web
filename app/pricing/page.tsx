import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing \u2014 SecPrompt",
};

export default function PricingPage() {
  return <PricingClient />;
}
