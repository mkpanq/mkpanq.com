import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import SocialLink from "@/components/SocialLink";
import Socials from "@/config/socials";
import portraitImage from "../../../public/portrait.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
  openGraph: {
    siteName: "Marek Pankowski - About",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=About&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default`,
        width: 1200,
        height: 630,
        alt: `mkpanq.com/about`,
      },
    ],
  },
  twitter: {
    creator: "@mkpanq",
    card: "summary_large_image",
    title: "Marek Pankowski - About",
    description:
      "I'm Marek, a fullstack software engineer based in Warsaw, Poland. I build thoughtful software and help teams focus on what matters — solid engineering and a product-first mindset.",
    images:
      "https://dynamic-og-image-generator.vercel.app/api/generate?title=About&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2F&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=default",
  },
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
            I'm Marek Pankowski. I live in Warsaw, Poland, where I try to build
            digital things
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I'm a fullstack developer with a backend roots, frontend focus and
              a product mindset. I've worked on everything from greenfield apps
              to multi-year legacy systems, often bridging the gap between
              design, tech, and business needs. I care about building things
              that make sense for the user and the team behind it — and I enjoy
              working in collaborative, feedback-driven environments.
            </p>
            <p>
              My strongest experience is with React, TypeScript, and Ruby on
              Rails, but I try to stay tech-agnostic and choose tools that fit
              the problem, not the other way around. I've worked in agile teams,
              led frontend and backend development on larger features, and
              contributed across the stack when needed. I'm also PSPO I
              certified, and I often work closely with designers and product
              folks to turn ideas into something real.
            </p>
            <p>
              Over the years, I've worked across different industries and team
              setups — from fast-moving startups to more structured environments
              — often in remote, international teams. I value clear
              communication, flexibility, and taking ownership — not just of the
              features I build, but of the product as a whole. I approach
              development with a mix of curiosity, pragmatism, and care for both
              the technical and human side of the work.
            </p>
            <p>
              After hours, I enjoy watching F1 and NBA basketball (Miami Heat
              supporter 🔥). Wannabe (sim)racing driver and future F1 team owner
              🙈
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul>
            {Socials.map((social) => (
              <SocialLink
                key={social.name}
                socialLink={social}
                className="mb-6"
              >
                {social.additionalText}
              </SocialLink>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
