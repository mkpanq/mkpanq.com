import {
  BlueskyIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";

const Socials = [
  {
    name: "Github",
    href: "https://github.com/mkpanq",
    icon: GitHubIcon,
    additionalText: "Follow on Github",
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/mkpanq.com",
    icon: BlueskyIcon,
    additionalText: "Follow on Bluesky",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mkpanq/",
    icon: LinkedInIcon,
    additionalText: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:%6d%61%72%65%6b%40%6d%6b%70%61%6e%71%2e%63%6f%6d",
    icon: MailIcon,
    additionalText: "Email me",
  },
];

export default Socials;
