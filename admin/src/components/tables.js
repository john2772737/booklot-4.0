import React from "react";

function ResponsiveTable({ heading, dataa }) {
  return (
    <table className="table table-responsive">
      <thead>
        <tr>
          <th>#</th>
          {heading.map(
            (
              item,
              index // Error likely originates here
            ) => (
              <th key={index}>{item}</th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {dataa.map((admin , index) => (
            <tr key={index}>
    <td>{index + 1}</td>
        {Object.keys(admin).map((key, idx) => (
        <td key={idx}>
            {typeof admin[key] === 'object' ? JSON.stringify(admin[key]) : admin[key]}
        </td>
        ))}
  </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResponsiveTable;
