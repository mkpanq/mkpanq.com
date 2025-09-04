import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mkpanq.com",
  ),
  applicationName: "mkpanq.com",
  creator: "Marek Pankowski",
  publisher: "Marek Pankowski",
  title: {
    template: "%s - Marek Pankowski",
    default: "Marek Pankowski - Fullstack Software Engineer",
  },
  description:
    "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
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
  openGraph: {
    siteName: "Marek Pankowski - Fullstack Software Engineer",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=Home&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default`,
        width: 1200,
        height: 630,
        alt: `mkpanq.com`,
      },
    ],
  },
  twitter: {
    creator: "@mkpanq",
    card: "summary_large_image",
    title: "Marek Pankowski - Fullstack Software Engineer",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    images:
      "https://dynamic-og-image-generator.vercel.app/api/generate?title=Home&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default",
  },
  appleWebApp: {
    title: "mkpanq.com | Marek Pankowski",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/logo.svg",
        sizes: "any",
        type: "image/svg",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.mkpanq.com/script.js"
          data-website-id="025ba108-fcbc-43cb-8b68-9c4feab5d3e4"
        ></script>
      </head>
      <body className="flex h-full bg-white dark:bg-black bg-[radial-gradient(#CECFD3_1px,transparent_1px)] dark:bg-[radial-gradient(#323333_1px,transparent_1px)] [background-size:20px_20px] -z-10">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
