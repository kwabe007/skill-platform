import * as React from "react";

import { cn } from "~/lib/utils";

// TODO: Fix `as` being typed as any
type PolymorphicComponentProps<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentProps<T>;

function Card<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: PolymorphicComponentProps<T>) {
  const Component = as || "div";

  return (
    <Component
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
