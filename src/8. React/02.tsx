import React from "react";

type LooseAutoComplete<T> = T | (string & {});

const presetSizes = {
  xs: "0.5rem",
  sm: "1rem",
};

type Size = keyof typeof presetSizes;

// type LooseSize = Size | (string & {});

type LooseSize = LooseAutoComplete<Size>;

export const Icon = (props: { size: LooseSize }) => {
  return (
    <div
      style={{
        width:
          props.size in presetSizes
            ? presetSizes[
                /**
                 * The 'as' is necessary here because TS can't seem to narrow
                 * props.size to Size properly
                 */
                props.size as Size
              ]
            : props.size,
      }}
    ></div>
  );
};

const Example = () => {
  return (
    <div>
      <Icon size="sm" />
      <Icon size="1rem" />
    </div>
  );
};

export default Example;
