import {useContext} from 'react' 
import { CartContext } from '../../context/cart.context';
import './checkout-item.style.scss'

const CheckOutItem = ({product}) => {

 const {imageUrl , name , price , quantity} = product ;
 const { addItemToCart , removeItemToCart , deletItemToCart } = useContext(CartContext) ;

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemToCart(product)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(product)}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={() => deletItemToCart(product)}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem ;