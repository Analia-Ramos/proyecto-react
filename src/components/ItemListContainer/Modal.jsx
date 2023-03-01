import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from './ItemCount';
import {products} from './Products';


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" text={products.text}>
          {products.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p detail={products.detail}> 
        </p>
        <ItemCount/>
        <Button className='custom-btn' variant="outline-light">Add to Cart</Button>
      </Modal.Body>

      <Modal.Footer>
        <Button className='custom-btn' variant="outline-light" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal