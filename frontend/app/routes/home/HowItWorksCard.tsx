import { cn } from "~/lib/utils";
import { Card, CardContent } from "~/components/ui/card";
import type { ReactElement, ReactNode } from "react";

interface HowItWorksCardProps {
  squareText: string;
  icon: ReactElement;
  heading: string;
  text: string;
  className?: string;
}

export default function HowItWorksCard({
  squareText,
  icon,
  heading,
  text,
  className,
}: HowItWorksCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="size-12 bg-gradient-primary text-white rounded-lg mx-auto mb-4 flex-center">
        <span className="text-2xl font-bold">{squareText}</span>
      </div>
      <div className="flex justify-center items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{heading}</h3>
      </div>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}
