import { useContext } from 'react';
import './product-card.style.scss'

import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { BUTTON_TYPE_STYLE } from '../button/button.component';

const ProductCard = ({products}) => {

  const {name , imageUrl , price} = products ;
  const { addItemToCart } = useContext(CartContext) ;
  const addProductToCart  = () =>{
    console.log(products);
    addItemToCart(products)
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