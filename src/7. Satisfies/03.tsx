import React from "react";
type InputProps = React.ComponentProps<"input">;

const COMPONENTS = {
  text: props => {
    return <input {...props} type="text" />;
  },
  number: props => {
    return <input type="number" {...props} />;
  },
  password: props => {
    return <input type="password" {...props} />;
  },
} satisfies Record<string, React.FC<InputProps>>;

export const Input = (
  props: { type: keyof typeof COMPONENTS } & InputProps
) => {
  const Component = COMPONENTS[props.type];
  return <Component {...props} />;
};

<>
  <Input
    type="number"
    onChange={e => {
      //e should be properly typed
    }}
  />
  <Input type="text" />
  <Input type="password" />

  {/** @ts-expect-error */}
  <Input type="email" />
</>;
