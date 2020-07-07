import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './modal.css';
import Button from '../buttons/button';

// Modal
let CommonModal = props => {
    return(
        <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className={props.type}
        centered={props.centered ? props.centered : null}
      >
        {/* Modal Header */}
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>

        {/* Modal Body */}
        <Modal.Body>
          {props.children}
        </Modal.Body>
        {/* Modal Footer */}
        {props.footer ?
          <Modal.Footer>
            <Button variant="btn-whiteBlue" align="center" click={props.onHide}>CANCEL</Button>
            <Button variant="btn-primaryDarkBlue" click={props.footer} align="center">OK</Button>
          </Modal.Footer>
        : null}        
      </Modal>
    )
}

export default CommonModal;