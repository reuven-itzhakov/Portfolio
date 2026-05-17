import type { LucideIcon } from "lucide-react";

import { socialLinks } from "@/components/home/content";

type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export function SocialLinks({
  className,
  linkClassName,
  iconClassName,
}: {
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
}) {
  return (
    <div className={className}>
      {socialLinks.map(({ icon: Icon, href, label }: SocialLink) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noreferrer"
          className={linkClassName}
        >
          <Icon className={iconClassName} />
        </a>
      ))}
    </div>
  );
}