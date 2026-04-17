import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Javier | Backend Developer",
  description: "Web Developer specializing in server-side logic and database architecture.",

  openGraph: {
    title: "Joshua Javier | Portfolio",
    description: "Architecting high-performance backends and complex inventory systems.",
    url: "https://joshua-portfolio-zeta-six.vercel.app/",
    siteName: "Joshua Javier Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joshua Javier Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Javier | Backend Developer",
    description: "Web Developer specializing in server-side logic and database architecture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}