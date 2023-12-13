/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import UpdateCat from './UpdateCat';

export default function UpdateCatModal({ onUpdate, cat, onClose, show }) {
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