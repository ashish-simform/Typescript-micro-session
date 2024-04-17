import React from "react";

type TableProps<T> = {
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
};

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>{props.renderRow(item, index)}</tr>
        ))}
      </tbody>
    </table>
  );
};

<>
  <Table
    data={[1, 2, 3]}
    renderRow={(row, index) => {
      return <td key={index}>{row}</td>;
    }}
  />
</>;
