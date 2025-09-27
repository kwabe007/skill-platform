// TODO: Fix `as` being typed as any
export type PolymorphicComponentProps<T extends React.ElementType = "div"> = {
  as?: T;
} & React.ComponentProps<T>;
