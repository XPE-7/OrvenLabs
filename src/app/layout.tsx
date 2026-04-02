import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/nav";
import { SiteFooter } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orven Labs | Custom AI Automation Agency",
  description: "Custom AI systems for revenue, support, and operations. Built after mapping your exact workflow.",
  openGraph: {
    title: "Orven Labs | Custom AI Automation Agency",
    description: "Custom AI agents, booking systems, and CRM automations built for real operations.",
    url: "https://orvenlabs.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050915] text-slate-100">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#2b6cff]/10 blur-3xl sm:-left-32 sm:h-72 sm:w-72" />
            <div className="absolute right-[-80px] top-24 h-56 w-56 rounded-full bg-[#0aa8bf]/12 blur-3xl sm:right-[-140px] sm:h-80 sm:w-80" />
            <div className="absolute left-1/2 top-2/3 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9a96b]/10 blur-3xl md:block" />
            <div className="absolute bottom-0 right-6 h-40 w-40 rounded-full bg-[#0fd4f7]/10 blur-3xl sm:right-1/4 sm:h-64 sm:w-64" />
          </div>
          <SiteNav />
          <main className="flex-1">
            <div className="page-shell relative">{children}</div>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


