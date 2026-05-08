import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md Nahid Hossain | SQA Engineer & AI Developer",
  description:
    "Md Nahid Hossain — AI-Driven Problem Solver specializing in SQA, Data Analysis, and LLM Applications. Expert in manual testing, automation, API testing, and performance testing.",
  keywords: [
    "SQA Engineer",
    "Software Testing",
    "Automation Testing",
    "API Testing",
    "LLM Applications",
    "Data Analysis",
    "Playwright",
    "JMeter",
    "Postman",
  ],
  authors: [{ name: "Md Nahid Hossain" }],
  openGraph: {
    title: "Md Nahid Hossain | SQA Engineer & AI Developer",
    description:
      "AI-Driven Problem Solver — Specializing in SQA, Data Analysis, and LLM Applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
