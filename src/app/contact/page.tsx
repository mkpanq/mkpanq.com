import type { Metadata } from "next";

import { Container } from "@/components/Container";
import SocialLink from "@/components/SocialLink";
import Socials from "@/config/socials";

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

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:order-first lg:row-span-2 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Let's connect !
          </h1>
          <div className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
            <p>
              Want to share a project idea, ask something, or just say hi? You
              can reach out to me via email or via my social media !
            </p>
          </div>
        </div>
        <div className="lg:pl-20 space-y-6">
          <div className="flex gap-5 items-center border-b border-zinc-300 dark:border-zinc-700 pb-6">
            <span className="relative flex ml-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-800 dark:bg-green-500 opacity-75"></span>
              <span className="relative inline-flex size-5 rounded-full bg-green-600"></span>
            </span>
            <p className="text-sm font-semibold">I'm available for work !</p>
          </div>
          {Socials.map((social) => (
            <SocialLink key={social.name} socialLink={social}>
              {social.additionalText}
            </SocialLink>
          ))}
        </div>
      </div>
    </Container>
  );
}
