// this is the getServerSideProps function and we have to extract the returned object's props key's value.
export const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();

  return {
    props: {
      json,
    },
  };
};
