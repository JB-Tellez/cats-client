/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import UpdateCat from './UpdateCat';

function Cats({ cats, onDelete, onUpdate }) {
  return (
    <ListGroup>
      {cats.map(cat => (
        <ListGroup.Item key={cat._id} >
          <Cat info={cat} onDelete={onDelete} onUpdate={onUpdate} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

function Cat({ info, onDelete, onUpdate }) {

  const [show, setShow] = useState(false);

  function deleteCat() {
    onDelete(info);
  }

  function updateCat(updatedCat) {

    onUpdate(updatedCat);
    setShow(false);
  }

  function showUpdate() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <>
    <h3>{info.name} ({info.location})<span onClick={showUpdate}>[E]</span> <span onClick={deleteCat}>[X]</span></h3>
    <UpdateCatModal onUpdate={updateCat} cat={info} show={show} onClose={handleClose} />
    </>
  );
}

function UpdateCatModal({ onUpdate, cat, onClose, show }) {
  return (
    <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {cat.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateCat onUpdate={onUpdate} cat={cat} />
        </Modal.Body>
      </Modal>
  );
}

export default Cats;
