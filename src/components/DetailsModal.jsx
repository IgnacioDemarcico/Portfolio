// Modal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '60%',
    margin: 'auto',
  },
};

function DetailsModal({ isOpen, closeModal, creacion }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Detalles del Elemento"
    >
      <h2>Detalles del Elemento</h2>
      <p>{creacion.descripcion}</p>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
}

export default DetailsModal;
