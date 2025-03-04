import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Parallel Routes in Next 15",
    template: "%s | Learning Parallel Routes in Next 15",
  },
  description: "This is a learning project, using Next JS 15 New Features",
};

export default function ComplexDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <header className="py-5 px-8 bg-yellow-600">
          <h1>Parallel Routes in Next 15</h1>
        </header>
        <div className="px-20 py-8">{children}</div>
      </body>
    </html>
  );
}
