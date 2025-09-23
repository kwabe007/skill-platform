import { cn } from "~/lib/utils";
import type { ReactNode } from "react";

interface MainProps {
  className?: string;
  children?: ReactNode;
}

export default function Main({ className, children }: MainProps) {
  return <main className={cn("", className)}>{children}</main>;
}
