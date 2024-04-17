import { Example } from "./02.que";

type SearchForId = `${string}${"id" | "Id" | "ID"}${string}`;

type OnlyIdKeys<T extends Record<string, any>> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K];
};

type Result = OnlyIdKeys<Example>;
