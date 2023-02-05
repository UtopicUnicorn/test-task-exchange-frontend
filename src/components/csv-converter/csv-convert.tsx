import React, { BaseSyntheticEvent, useState } from 'react';
import { CSVLink } from 'react-csv';

export const CsvConverter = ({ data }: any) => {
  const [fileName, setFileName] = useState('file');

  const askForFileName = (ev: BaseSyntheticEvent) => {
    const value = prompt('Name file for csv', 'file');

    if (value === null || value === fileName) {
      ev.preventDefault();
    } else {
      setFileName(value);
    }
  };

  return (
    <CSVLink data={data} filename={fileName}>
      <button onClick={askForFileName}>Export</button>
    </CSVLink>
  );
};
