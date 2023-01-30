import React from 'react';

export function CustomTable(props: any) {
  const headers = props.header;

  const tableHeader = () => {
    return headers.map((header: string, index: number) => {
      return <td key={index}>{header}</td>;
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{tableHeader()}</tr>
        </thead>
        <tbody>{props.template}</tbody>
      </table>
    </div>
  );
}
