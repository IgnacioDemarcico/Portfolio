import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/Item.css';

function Item({ creacion }) {
  return (
    <div className='card-container'>
      <Card>
        <Card.Img className='card-image' src='/images/default_image.png' />
        {/*</Card.Img>{creacion.img}*/}
        <Card.Body className='card-body'>
          <Card.Title style={{display:'flex',justifyContent:'center'}}>{creacion.titulo}</Card.Title>
          <Card.Text>
            {creacion.descripcion}
          </Card.Text>
          <Button className='card-button' variant="primary" target='blank' href='https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2014957/tp-10-portfolio'>View on GitHub</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;