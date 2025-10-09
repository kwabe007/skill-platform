import { cn } from "~/lib/utils";
import type { ReactElement } from "react";
import UnreadBadge from "~/components/UnreadBadge";

interface UnreadBadgeWrapperProps {
  show: boolean | null | undefined;
  className?: string;
  children: ReactElement;
}

export default function UnreadBadgeWrapper({
  show,
  className,
  children,
}: UnreadBadgeWrapperProps) {
  if (!show) return children;

  return (
    <div className={cn("relative w-fit h-fit")}>
      <UnreadBadge
        show
        className={cn("absolute -top-1.5 -right-1.5", className)}
      />
      {children}
    </div>
  );
}
