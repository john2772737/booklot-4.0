import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";


function Modal_com({ Title, body, show, onHide, footer }) {
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (name) => {
    setFocusedField(name);
  };

  return (
    <div>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {body &&
            body.map((group, index) => (
              <Form.Group
                className="mb-3"
                key={index}
                controlId={group.controlId}
              >
                <Form.Control
                  type={group.type}
                  placeholder={group.placeholder}
                  onChange={group.onChange}
                  onBlur={() => {
                    setFocusedField(null);
                    if (group.onBlur) group.onBlur();
                  }}
                  onFocus={() => handleFocus(group.name)}
                  name={group.name}
                  isInvalid={group.error && group.name !== focusedField}
                  style={group.required ? { borderColor: "red" } : {}}
                />
  

                {group.errortext &&
                  group.error &&
                  group.name !== focusedField &&
                  !group.required && (
                    <Form.Control.Feedback type="invalid">
                      {group.errortext}
                    </Form.Control.Feedback>
                  )}
              </Form.Group>
            ))}

          <Modal.Footer>{footer}</Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Modal_com;
