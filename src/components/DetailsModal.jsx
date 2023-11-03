// CustomModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DetailsModal({ isOpen, closeModal, creacion }) {
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Project details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{creacion.descripcion}</p>
        {/* Otros detalles que desees mostrar */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailsModal;
