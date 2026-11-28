import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HealthGuide AI",
  description: "Understand Your Health. Make Informed Decisions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
