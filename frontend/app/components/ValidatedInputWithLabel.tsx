import type { ComponentProps } from "react";
import StandardInputWithLabel from "~/components/StandardInputWithLabel";
import { type FormScope, useField } from "@rvf/react-router";

interface ValidatedInputWithLabelProps
  extends ComponentProps<typeof StandardInputWithLabel> {
  scope: FormScope<string>;
}

export default function ValidatedInputWithLabel({
  scope,
  ...rest
}: ValidatedInputWithLabelProps) {
  const field = useField(scope);
  return (
    <StandardInputWithLabel
      {...field.getInputProps(rest)}
      errorMessage={field.error() ?? undefined}
    />
  );
}
