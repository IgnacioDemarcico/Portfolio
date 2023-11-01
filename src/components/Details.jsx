import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Details(props) {
  return (
    <Modal show={props.showModal} onHide={props.cerrarModal}>
      <Modal.Header closeButton>
        <Modal.Title>Título del Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Contenido del modal
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.cerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Details;
