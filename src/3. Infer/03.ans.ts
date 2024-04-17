import { parser1 } from "./03.que";

type GetParserResult1<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;

export type ParseReturnType = GetParserResult1<typeof parser1>;
