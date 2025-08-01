import clsx from "clsx";
import Link from "next/link";

function SocialLink({
  className,
  socialLink,
  children,
}: {
  className?: string;
  socialLink: {
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    additionalText: string;
  };
  children?: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        key={socialLink.name}
        href={socialLink.href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-600 dark:text-zinc-200 dark:hover:text-amber-600"
      >
        <socialLink.icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default SocialLink;
