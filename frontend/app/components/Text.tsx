import { cn } from "~/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { PolymorphicComponentProps } from "~/components/component-types";
import * as React from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "",
      h1: "text-4xl font-extrabold tracking-tight text-balance",
      h2: "border-b pb-2 text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      h4: "text-xl font-semibold tracking-tight",
      p: "leading-7",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Text<T extends React.ElementType = "p">({
  as,
  variant,
  className,
  ...props
}: PolymorphicComponentProps<T> & VariantProps<typeof textVariants>) {
  const Component = as || "p";
  return (
    <Component
      className={cn(textVariants({ variant, className }))}
      {...props}
    />
  );
}
