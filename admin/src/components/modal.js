import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Modal_com({ Title, body, show, onHide,footer }) {
    return (
        <div>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{Title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                {body && body.map((group, index) => (
                        <Form.Group key={index} controlId={group.controlId}>
                            <Form.Control type={group.type} placeholder={group.placeholder} />
                        </Form.Group>
                    ))}
                </Form>

                <Modal.Footer>
                    {footer}
                </Modal.Footer>
                </Modal.Body>


            </Modal>
        </div>
    );
}

export default Modal_com;
