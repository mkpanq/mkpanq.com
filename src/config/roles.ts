import type { ImageProps } from "next/image";
import logoAirbnb from "@/images/logos/airbnb.svg";
import logoFacebook from "@/images/logos/facebook.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";
import logoStarbucks from "@/images/logos/starbucks.svg";

export interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

export const ResumeRoles: Array<Role> = [
  {
    company: "Planetaria",
    title: "CEO",
    logo: logoPlanetaria,
    start: "2019",
    end: {
      label: "Present",
      dateTime: new Date().getFullYear().toString(),
    },
  },
  {
    company: "Airbnb",
    title: "Product Designer",
    logo: logoAirbnb,
    start: "2014",
    end: "2019",
  },
  {
    company: "Facebook",
    title: "iOS Software Engineer",
    logo: logoFacebook,
    start: "2011",
    end: "2014",
  },
  {
    company: "Starbucks",
    title: "Shift Supervisor",
    logo: logoStarbucks,
    start: "2008",
    end: "2011",
  },
];
