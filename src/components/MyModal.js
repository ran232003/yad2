import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const MyModal = (props) => {
  const { title, body } = props;
  const [show, setShow] = useState(props.showModal);
  console.log(show);
  const handleClose = () => {
    setShow(false);
    props.closeModal();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default MyModal;
