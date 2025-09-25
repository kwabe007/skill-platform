import { cn } from "~/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "~/components/ui/input";
import { type ComponentProps, type ComponentType, useId } from "react";

interface StandardInputWithLabelProps extends ComponentProps<typeof Input> {
  label?: string;
  icon?: ComponentType<{ className?: string }>;
  errorMessage?: string;
  inputClassName?: string;
  className?: string;
}

export default function StandardInputWithLabel({
  id: _id,
  name,
  icon: Icon,
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

  // If no label is given, use name with first letter in uppercase as label.
  // If no name is given either, we leave label undefined. It won't be rendered.
  const label =
    _label ?? (name ? name.charAt(0).toUpperCase() + name.slice(1) : undefined);

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
          className={cn(inputClassName, "pl-10")}
          id={id}
          name={name}
          aria-describedby={errorMessage ? errorId : undefined}
        />
      </div>
      {errorMessage && (
        <div className="text-sm text-destructive" id={errorId}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
