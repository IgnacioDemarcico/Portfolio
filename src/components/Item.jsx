import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import './styles/Item.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Item({ creacion }, props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card-container'>
      <Card>
        <div className="icon-container">
          <button style={{ border: 'none', color:'HotPink'  }} onClick={toggleFavorite}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
        <Card.Img className='card-image' src='/images/default_image.png' />
        <Card.Body className='card-body'>
          <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{creacion.titulo}</Card.Title>
          <Card.Text>
            {creacion.descripcion}
          </Card.Text>
          <div className='botones'>
            <Button className='card-button' variant="primary" target='blank' href='https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2014957/tp-10-portfolio'>View on GitHub</Button>
            <Button className='card-button' variant="primary" onClick={props.abrirModal}>Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
