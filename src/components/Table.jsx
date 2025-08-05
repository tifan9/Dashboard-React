import React from "react";

const Table = ({ columns, data, renderRow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={col.className || "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => renderRow(row, idx))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;