import React, { ChangeEventHandler } from "react";

type ToUndefinedObject<T> = Partial<Record<keyof T, undefined>>;
type AllOrNothing<T> = T | ToUndefinedObject<T>;

type Result = AllOrNothing<{
  value: string;
  onChange: ChangeEventHandler;
}>;

/**
    export type InputProps = (
      | {
          value: string;
          onChange: ChangeEventHandler;
        }
      | {
          value?: undefined;
          onChange?: undefined;
        }
    ) & {
      label: string;
    };
 */

export type InputProps = Result & { label: string };

//simple input component
export const Input: React.FC<InputProps> = () => {
  return <input />;
};

<>
  <Input label="FirstName" />
  <Input label="LastName" />
</>;
