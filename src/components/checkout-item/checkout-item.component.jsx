import { useDispatch , useSelector } from 'react-redux';
import './checkout-item.style.scss'
import { addItemToCart , removeItemToCart , deletItemToCart } from '../../store/cart/cart-action';
import { selectCartItem } from '../../store/cart/cart-selector';

const CheckOutItem = ({product}) => {

 const dispatch = useDispatch()
 const {imageUrl , name , price , quantity} = product ;
 const cartItems = useSelector(selectCartItem)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItemToCart(cartItems , product))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItemToCart(cartItems , product))}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={() => dispatch(deletItemToCart(cartItems , product))}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem ;