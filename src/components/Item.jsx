import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import	'./styles/Footer.css';

function Item({creacion}) {
  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top"/>
      {creacion.img}
      <Card.Body>
        <Card.Title>{creacion.titulo}</Card.Title>
        <Card.Text>
          {creacion.descripcion}
        </Card.Text>
        <Button variant="primary">Ver en GitHub</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;