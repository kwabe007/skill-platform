import { cn } from "~/lib/utils";

/**
 * Props for the {@link ParagraphText} component.
 */
interface ParagraphTextProps {
  /**
   * The text content to be rendered into paragraphs.
   *
   * Double newlines (`\n\n`) are treated as paragraph breaks.
   * Single newlines are ignored, so text flows within paragraphs.
   */
  text: string;
  className?: string;
}

/**
 * Renders a block of text as multiple paragraphs.
 *
 * Each paragraph is created by splitting the input text
 * on double newlines (`\n\n`) including any whitespace between the two newlines.
 *
 * @example
 * ```tsx
 * <ParagraphText
 *   text={`First paragraph.\n\nSecond paragraph.`}
 *   className="mb-4 text-gray-700"
 * />
 * ```
 */
export default function ParagraphText({ text, className }: ParagraphTextProps) {
  const paragraphs = text.split(/\n\s*\n/);

  return (
    <div className={cn("space-y-4", className)}>
      {paragraphs.map((para, i) => (
        <p key={i}>{para.trim()}</p>
      ))}
    </div>
  );
}
