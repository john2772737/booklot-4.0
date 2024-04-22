import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./table.css";

function ResponsiveTable({ heading, dataa, action }) {
  const handleAction = (itemId) => {
    // Perform the action here, based on the itemId or any other data
    console.log("Action clicked for item with ID:", itemId);
  };

  return (
    <Table responsive>
      <thead>
        <tr
          style={{
            backgroundColor: "black",
            color: "white",
            fontFamily: "League Spartan",
            border: "1px solid black",
          }}
        >
          <th>#</th>
          {heading.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          {action && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {dataa.map((admin, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {admin.map((item, itemIndex) => (
              <td key={itemIndex}>
                {typeof item === "object" ? JSON.stringify(item) : item}
              </td>
            ))}
            {action && (
              <td>
                <div style={{ display: "flex" }}>
                  <button onClick={() => handleAction(admin.id)}>check</button>
                  <button>cross</button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ResponsiveTable;
