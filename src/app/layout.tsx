import "@/styles/globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/connections/auth";
import Providers from "@/providers/providers";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL as string;

export const metadata: Metadata = {
  title: "ShortWeb | Short copy text for your website.",
  description:
    "Search shortweb texts: slogans, headlines, notifications, CTA, error messages, email, account preferences, and much more. Generated by @mosespace",
  keywords: [
    "Short Words For The Websites",
    "microcopy.me",
    "quotes for websites",
    "text snippets for websites",
    "text",
    "short words for",
    "words for developers",
    "all texts free",
  ],
  authors: [
    {
      name: "mosespace | Kisakye Moses",
      url: "https://mosespace.com",
    },
  ],
  creator: "mosespace | Kisakye Moses",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "ShortWeb | Short copy text for your website.",
    description:
      "A collection of short text all websites to simplify developer and creators life and all this at free. Find the best short words, texts, and quotes to build your next project 10X faster. 🚀",
    siteName: "ShortWeb | Short copy text for your website.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Resources | crafted by @mosespace - Open Graph Image",
      },
    ],
  },
  alternates: {
    canonical: `${baseUrl}`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${baseUrl}/site.webmanifest`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
