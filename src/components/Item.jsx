import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DetailsModal from './DetailsModal';
import './styles/Item.css';
import { setFavoritos } from '../hooks/UseDB';



function Item({ creacion, abrirModal }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    
    await setFavoritos(creacion.id,!isFavorite)
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='card-container'>
      <Card style={{borderColor:'rgb(243, 189, 53)'}}>
        <div className="icon-container" style={{zIndex: '0'}}>
          <button style={{ border: 'none', color: 'HotPink' }} onClick={toggleFavorite}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </button>
        </div>
        <Card.Img className='card-image' src='/images/default_image.png' />
        <Card.Body className='card-body' style={{}}>
          <Card.Title style={{ display: 'flex', justifyContent: 'center' }}>{creacion.titulo}</Card.Title>
          <div className='botones'>
            <Button className='card-button' variant="primary" target='blank' href='https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2014957/tp-10-portfolio'>View on GitHub</Button>
            <Button className='card-button' variant="primary" onClick={openModal}>Details</Button>
          </div>
        </Card.Body>
      </Card>
      <DetailsModal style={{zIndex: '9999'}} isOpen={isModalOpen} closeModal={closeModal} creacion={creacion} />
    </div>
  );
}

export default Item;
