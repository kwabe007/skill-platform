import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import type { ComponentProps, ReactNode } from "react";

interface ButtonLabelProps extends ComponentProps<"label"> {
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function ButtonLabel({
  disabled = false,
  className,
  ...rest
}: ButtonLabelProps) {
  return (
    <Button asChild className={cn("bg-gradient-primary", className)}>
      <label
        {...rest}
        className={cn(
          !disabled ? "cursor-pointer" : "pointer-events-none opacity-50",
        )}
        tabIndex={!disabled ? 0 : undefined}
      />
    </Button>
  );
}

/*
{form.formState.isDirty ? (
  <label
    className="cursor-pointer"
    htmlFor="submit-form"
    tabIndex={0}
  >
    {children}
  </label>
) : (
  <label className="pointer-events-none opacity-50">Save</label>
)}*/
