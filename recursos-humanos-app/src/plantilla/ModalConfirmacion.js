import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalConfirmacion({ isOpen, onRequestClose, onConfirm }) {
    return (
        <Modal
      show={isOpen}
      onHide={onRequestClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirmación</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>¿Estás seguro que quieres eliminar al empleado?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>Cancelar</Button>
        <Button variant="primary" onClick={onConfirm}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
    );
}