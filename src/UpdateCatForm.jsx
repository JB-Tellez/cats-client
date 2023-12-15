/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function UpdateCatForm({ onUpdate, cat }) {

  const [name, setName] = useState(cat.name);
  const [color, setColor] = useState(cat.color);
  const [location, setLocation] = useState(cat.location);
  const [hasClaws, setHasClaws] = useState(cat.hasClaws);
  
  const _id = cat._id;


  async function handleSubmit(event) {
    event.preventDefault();
    await onUpdate({
      name,
      color,
      location,
      hasClaws,
      _id,
    });
  }

  function handleChange(event) {
    switch (event.target.id) {
      case 'formName':
        setName(event.target.value);
        break;
      case 'formColor':
        setColor(event.target.value);
        break;
      case 'formLocation':
        setLocation(event.target.value);
        break;
      case 'formHasClaws':
        setHasClaws(event.target.checked);
        break;
      default:
        break;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter cat name" value={name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formColor">
        <Form.Label>Color</Form.Label>
        <Form.Control type="name" placeholder="Enter cat color" value={color} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="name" placeholder="Enter cat location" value={location} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formHasClaws">
        <Form.Check type="checkbox" label="Has claws" checked={hasClaws} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  )
}
