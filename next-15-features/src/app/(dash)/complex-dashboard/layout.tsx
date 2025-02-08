import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

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
  users,
  analytics,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
}>) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased px-6 py-2`}
    >
      <div className="">{children}</div>

      <div className="flex justify-between items-center gap-12 py-6">
        <div className="w-1/2 h-44 bg-pink-500 rounded-lg flex justify-center items-center">
          {users}
        </div>
        <div className="w-1/2 h-44 bg-blue-500 rounded-lg flex justify-center items-center">
          {notifications}
        </div>
      </div>
      <div className="w-full h-44 bg-green-500 rounded-lg flex justify-center items-center">
        {analytics}
      </div>
    </div>
  );
}
