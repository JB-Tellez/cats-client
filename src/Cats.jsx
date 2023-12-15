/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react';
import UpdateCatModal from './UpdateCatModal';
import Accordion from 'react-bootstrap/Accordion';


function Cats({ cats, onDelete, onUpdate }) {
  return (
    <Accordion>
      {cats.map((cat, index) => (
        <Accordion.Item key={cat._id} eventKey={index} >
          <Cat info={cat} onDelete={onDelete} onUpdate={onUpdate} />
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

function Cat({ info, onDelete, onUpdate }) {

  const [showModal, setShowModal] = useState(false);

  function deleteCat() {
    onDelete(info);
  }

  function handleEditClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleUpdate(catToUpdate) {
    setShowModal(false);
    onUpdate(catToUpdate);
  }

  return (
    <>
      <Accordion.Header>
        {info.name}
      </Accordion.Header>
      <Accordion.Body>
        {info.location}
        <span onClick={handleEditClick}>[E]</span>
        <span onClick={deleteCat}>[X]</span>
        <UpdateCatModal show={showModal} cat={info} onClose={handleClose} onUpdate={handleUpdate} />
      </Accordion.Body>
    </>
  );
}



export default Cats;
