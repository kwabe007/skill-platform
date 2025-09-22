import { cn } from "~/lib/utils";

interface ConnectProps {
  className?: string;
}

export default function Connect({ className }: ConnectProps) {
  return <div className={cn("", className)}></div>;
}
