import { cn } from "~/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "~/components/ui/input";
import { type ComponentProps, type ComponentType, useId } from "react";
import { keyToLabel } from "~/utils";

interface StandardInputWithLabelProps extends ComponentProps<typeof Input> {
  label?: string;
  icon?: ComponentType<{ className?: string }>;
  info?: string;
  errorMessage?: string;
  inputClassName?: string;
  className?: string;
}

export default function StandardInputWithLabel({
  id: _id,
  name,
  icon: Icon,
  info,
  label: _label,
  errorMessage,
  inputClassName,
  className,
  ...inputPropsRest
}: StandardInputWithLabelProps) {
  // If no id is given, use a generated id
  const generatedId = useId();
  const id = _id ?? generatedId;

  const errorId = useId();
  const infoId = useId();

  // If no label is given, use `name` formatted with `keyToLabel` function.
  // If no name is given either, we leave label undefined. It won't be rendered.
  const label = _label ?? (name ? keyToLabel(name) : undefined);

  const describedByIds: string[] = [];
  if (info) describedByIds.push(infoId);
  if (errorMessage) describedByIds.push(errorId);

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label
          className="block text-sm font-medium leading-none"
          htmlFor="email"
        >
          {label}
        </Label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-[0.6rem] w-4 h-4 text-muted-foreground" />
        )}
        <Input
          {...inputPropsRest}
          className={cn(inputClassName, Icon && "pl-10")}
          id={id}
          name={name}
          aria-describedby={
            describedByIds.length > 0 ? describedByIds.join(" ") : undefined
          }
          aria-invalid={!!errorMessage}
        />
      </div>
      {info && (
        <div className="text-sm text-muted-foreground" id={infoId}>
          {info}
        </div>
      )}
      {errorMessage && (
        <div className="text-sm text-destructive" id={errorId}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
