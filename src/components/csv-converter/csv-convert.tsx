import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

export const CsvConverter = ({ data }: any) => {
  const [fileName, setFileName] = useState('file');

  const askForFileName = () => {
    const value = prompt('Name file for csv file', 'file');

    if (value === null) {
      return;
    } else {
      setFileName(value);
    }
  };

  return (
    <button onClick={() => askForFileName()}>
      <CSVLink data={data} filename={fileName}>
        Export
      </CSVLink>
    </button>
  );
};
