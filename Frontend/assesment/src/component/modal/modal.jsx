import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Modals = ({ item, show, handlerClose, isEdit }) => {

  let forSubmit = {
    id: isEdit ? item.foodItemsId : "",
    description: isEdit ? item.description : "",
    price: isEdit ? item.price : "",
    image: isEdit ? item.image : "",
  };
  const close = (e) => {
    e.preventDefault();
    handlerClose();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let method = "POST";
    if (edit === true) {
      method = "PUT";
    }
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/fooditems/${item.foodItemsId}`,
      {
        method: method,
        body: JSON.stringify(forSubmit),
      }
    );
    const data = await response.json();
    close()
  };

  const handleId = (e) => {
    forSubmit.id = e.target.value;
  };

  const handleDescription = (e) => {
    forSubmit.description = e.target.value;
  };

  const handlePrice = (e) => {
    forSubmit.price = e.target.value;
  };

  const handleImage = (e) => {
    forSubmit.image = e.target.value;
  };

  return (
    <Modal show={show} onHide={handlerClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Silahkan isi file</div>
        <div className="row">
          <div className="col-4">
            <h5>ID</h5>
          </div>
          <div className="col-8">
            <input
              type="text"
              defaultValue={forSubmit.id}
              onKeyUp={handleId}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h5>Description</h5>
          </div>
          <div className="col-8">
            <input type="text"  onKeyUp={handleDescription} defaultValue={forSubmit.description} required/>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h5>Price</h5>
          </div>
          <div className="col-8">
            <input type="number" onKeyUp={handlePrice} defaultValue={forSubmit.price} required />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h5>Image</h5>
          </div>
          <div className="col-8">
            <input type="text" onKeyUp={handleImage} defaultValue={forSubmit.image} required/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
