import type { Metadata } from "next";

import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
  openGraph: {
    siteName: "Marek Pankowski - Contact",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=Contact&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default`,
        width: 1200,
        height: 630,
        alt: `mkpanq.com/contact`,
      },
    ],
  },
  twitter: {
    creator: "@mkpanq",
    card: "summary_large_image",
    title: "Marek Pankowski - Contact",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    images:
      "https://dynamic-og-image-generator.vercel.app/api/generate?title=Contact&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default",
  },
};

export default function Garden() {
  return <Container className="mt-16 sm:mt-32">Garden</Container>;
}
