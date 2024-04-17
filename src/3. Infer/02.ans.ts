import { getServerSideProps } from "./02.que";

type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P;
}>
  ? P
  : never;

export type GetServerSidePropsData = InferPropsFromServerSideFunction<
  typeof getServerSideProps
>;
