import React, { ElementType, ComponentPropsWithoutRef } from "react";

/**
 * React Polymorphic components are a powerful pattern in React development, enabling us to create flexible and reusable components.
 * These components can adapt to different HTML elements while retaining their own functionalities and props.
 */

export const Link = <T extends ElementType>(
  props: {
    as?: T;
  } & ComponentPropsWithoutRef<
    //If T is the default, pass it 'a' instead
    ElementType extends T ? "a" : T
    //but if T has a value that ins't the default, pass it that
  >
) => {
  const { as: Comp = "a", ...rest } = props;
  return <Comp {...rest}></Comp>;
};

/**
 * Should work without specifying 'as'
 */
export const Example1 = () => {
  return (
    <>
      {/** @ts-expect-error */}
      <Link doesNotExist></Link>
      <Link onClick={e => console.log(e)}></Link>
    </>
  );
};

<>
  <Link as="div" onClick={e => console.log(e)}></Link>
</>;
