import React from "react";
import Table from "react-bootstrap/Table";

function ResponsiveTable({ heading, dataa, action }) {
  const handleAction = (itemId) => {
    // Perform the action here, based on the itemId or any other data
    console.log("Action clicked for item with ID:", itemId);
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {heading.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
          {action && <th>Action</th>} {/* Add an action column if action is provided */}
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
            {action && ( // Render action buttons if action is provided
              <td>
                <div style={{ display: "flex" }}> {/* Inline display for action buttons */}
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
