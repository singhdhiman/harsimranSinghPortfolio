import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harsimran Singh | Full Stack Developer",
    template: "%s | Harsimran Singh",
  },
  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js, and cloud-native web applications.",
  applicationName: "Harsimran Singh Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Harsimran Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, and cloud-native web applications.",
    images: [{ url: "/Images/spineorLogo2.png", width: 512, height: 512, alt: "Harsimran Singh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsimran Singh | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React.js, Next.js, Node.js, and cloud-native web applications.",
    images: ["/Images/spineorLogo2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

