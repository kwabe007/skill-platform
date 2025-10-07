import { Text } from "@react-email/components";

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
 * Renders a block of text as multiple paragraphs for use with react-email components.
 */
export default function ParagraphText({ text, className }: ParagraphTextProps) {
  const paragraphs = text.split(/\n\s*\n/);

  return (
    <>
      {paragraphs.map((para, i) => (
        <Text className={className} key={i}>
          {para.trim()}
        </Text>
      ))}
    </>
  );
}
