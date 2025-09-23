import { cn } from "~/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Input } from "~/components/ui/input";
import { type ComponentProps, type ComponentType, useId } from "react";
import { User } from "lucide-react";

interface StandardInputWithLabelProps extends ComponentProps<typeof Input> {
  name: string;
  label?: string;
  icon?: ComponentType<{ className?: string }>;
  inputClassName?: string;
  className?: string;
}

export default function StandardInputWithLabel({
  id: _id,
  name,
  icon: Icon,
  label: _label,
  inputClassName,
  className,
  ...inputPropsRest
}: StandardInputWithLabelProps) {
  // If no id is given, use a generated id
  const generatedId = useId();
  const id = _id ?? generatedId;

  // If no label is given, use name with first letter in uppercase as label
  const label = _label ?? name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={cn("space-y-2", className)}>
      <Label className="block text-sm font-medium leading-none" htmlFor="email">
        {label}
      </Label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-[0.6rem] w-4 h-4 text-muted-foreground" />
        )}
        <Input
          {...inputPropsRest}
          className={cn(inputClassName, "pl-10")}
          id={id}
        />
      </div>
    </div>
  );
}
