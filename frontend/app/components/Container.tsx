import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8")}>
      {children}
    </div>
  );
}
