import { Attributes } from "./01.que";

export type AttributeGettersWithModification = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};
