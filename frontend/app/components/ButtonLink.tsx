import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Link, type LinkProps } from "react-router";
import type { ComponentProps, ReactNode } from "react";

interface ButtonLinkProps {
  to: LinkProps["to"];
  variant?: ComponentProps<typeof Button>["variant"];
  className?: string;
  children?: ReactNode;
}

export default function ButtonLink({
  to,
  variant = "link",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Button asChild className={cn(className)} variant={variant}>
      <Link to={to}>{children}</Link>
    </Button>
  );
}
