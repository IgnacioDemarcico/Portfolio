import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import	'./styles/Item.css';

function Item({creacion}) {
  return (
      <div className='card-container'>
    <Card className='card'>
      <Card.Img className='card-image'src='/images/default_image.png'/>
        {/*</Card.Img>{creacion.img}*/}
      <Card.Body>
        <Card.Title>{creacion.titulo}</Card.Title>
        <Card.Text>
          {creacion.descripcion}
        </Card.Text>
        <Button variant="primary">Ver en GitHub</Button>
      </Card.Body>
    </Card>
      </div>
  );
}

export default Item;