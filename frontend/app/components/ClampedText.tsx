import { cn } from "~/lib/utils";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ClampedTextProps {
  text: string;
  fillOutButtonSpaceWhenHidden?: boolean;
  className?: string;
}

export default function ClampedText({
  text,
  fillOutButtonSpaceWhenHidden = false,
  className,
}: ClampedTextProps) {
  const [expanded, setExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const id = useId();
  const elRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (
      elRef.current &&
      elRef.current.scrollHeight > elRef.current.clientHeight
    ) {
      setShowExpandButton(true);
    }
  }, []);

  return (
    <div>
      <p
        className={cn(!expanded && "line-clamp-2", className)}
        id={id}
        ref={elRef}
      >
        {text}
      </p>
      {showExpandButton && (
        <Button
          className="relative px-0! py-0 h-7 text-muted-foreground hover:bg-transparent"
          variant="ghost"
          onClick={() => setExpanded((expanded) => !expanded)}
          aria-controls={id}
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
          Show {expanded ? "less" : "more"}
        </Button>
      )}
      {!showExpandButton && fillOutButtonSpaceWhenHidden && (
        <div className="h-7" />
      )}
    </div>
  );
}
