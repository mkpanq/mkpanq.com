import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Marek Pankowski",
    default: "Marek Pankowski - Fullstack Software Engineer",
  },
  description:
    "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
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
