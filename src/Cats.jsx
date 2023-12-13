import ListGroup from 'react-bootstrap/ListGroup'

function Cats({ cats, onDelete }) {
  return (
    <ListGroup>
      {cats.length && cats.map(cat => (
        <ListGroup.Item key={cat._id} >
          <Cat info={cat} onDelete={onDelete} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

function Cat({ info, onDelete }) {

  function deleteCat() {
    onDelete(info);
  }

  return (
    <h3>{info.name} ({info.location}) <span onClick={deleteCat}>[X]</span></h3>
  );
}

export default Cats;
