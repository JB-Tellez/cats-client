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
    <h3>
      {info.name} 
      ({info.location})
      <span onClick={handleEditClick}>[E]</span> 
      <span onClick={deleteCat}>[X]</span>
      </h3>
      <UpdateCatModal show={showModal} cat={info} onClose={handleClose} onUpdate={handleUpdate}/>
    </>
  );
}



export default Cats;
