import { cn } from "~/lib/utils";
import { Badge } from "~/components/ui/badge";
import type { ReactElement } from "react";

interface UnreadBadgeProps {
  show: boolean | null | undefined;
  className?: string;
}

export default function UnreadBadge({ show, className }: UnreadBadgeProps) {
  if (!show) return null;

  return (
    <Badge
      variant="default"
      className={cn(" bg-border rounded-full size-3 px-0", className)}
    />
  );
}
