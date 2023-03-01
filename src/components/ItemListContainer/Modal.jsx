import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from './ItemCount';



function MyVerticallyCenteredModal({show, onHide, products,}) {
  return (
    <Modal
      show 
      onHide
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {products.text}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{products.detail}
        </p>
        <ItemCount/>
        <Button className='custom-btn' variant="outline-light">Add to Cart</Button>
      </Modal.Body>

      <Modal.Footer>
        <Button className='custom-btn' variant="outline-light" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal