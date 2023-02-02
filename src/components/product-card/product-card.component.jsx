import './product-card.style.scss'
import { useDispatch , useSelector } from 'react-redux';
import Button from '../button/button.component';
import { BUTTON_TYPE_STYLE } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItem } from '../../store/cart/cart-selector';

const ProductCard = ({products}) => {

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItem)
  const {name , imageUrl , price} = products ;

  const addProductToCart  = () =>{
    return dispatch(addItemToCart(cartItems , products))
  }

  return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_STYLE.inverted} onClick={addProductToCart}>Add To Card</Button>
      </div>  
  )
}

export default ProductCard ;