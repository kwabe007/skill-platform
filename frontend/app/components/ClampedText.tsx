import { cn } from "~/lib/utils";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ClampedTextProps {
  text: string;
  className?: string;
}

export default function ClampedText({ text, className }: ClampedTextProps) {
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
          className="relative px-0! mt-2 text-muted-foreground "
          variant="ghost"
          onClick={() => setExpanded((expanded) => !expanded)}
          aria-controls={id}
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
          Show {expanded ? "less" : "more"}
        </Button>
      )}
    </div>
  );
}
