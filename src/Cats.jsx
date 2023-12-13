/* eslint-disable react/prop-types */
import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react';
import UpdateCatModal from './UpdateCatModal';

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



export default Cats;
