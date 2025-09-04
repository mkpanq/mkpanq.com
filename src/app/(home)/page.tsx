import { Container } from "@/components/Container";
import SocialLink from "@/components/SocialLink";
import Socials from "@/config/socials";

export default async function Home() {
  // TODO: get articles from server
  // const articles = (await getAllArticles()).slice(0, 3);

  return (
    <>
      <Container className="mt-9 sm:mt-15">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi ! I'm Marek 👋🏻 Fullstack product engineer & digital creator
            👨🏻‍💻
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm a fullstack software engineer and product creator based in
            Warsaw, Poland. I build thoughtful software and help teams focus on
            what matters — solid engineering and a product-first mindset.
          </p>
          <div className="mt-6 flex gap-6">
            {Socials.map((social) => (
              <SocialLink socialLink={social} key={social.name} />
            ))}
          </div>
        </div>
      </Container>
      {/* TODO: Here're going to be some articles here. */}
      {/* <Container className="mt-24 md:mt-28"></Container> */}
    </>
  );
}
