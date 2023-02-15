import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
  return (
      <a className="nav-link fs-5" href="#"> 0 <FontAwesomeIcon icon={faShoppingBag}/></a>
  )
}

export default CartWidget