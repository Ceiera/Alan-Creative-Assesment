import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Modals = ({ item, show, handlerClose }) => {
  const [edit, setEdit] = useState(false);
  const close = (e) => {
    e.preventDefault();
    handlerClose();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlerClose();
  }
  return (
    <Modal show={show} onHide={handlerClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{item.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={handlerClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
