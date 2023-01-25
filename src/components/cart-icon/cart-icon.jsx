import React , {useContext} from 'react';
// import { ReactComponent as CartIconShop } from '../../assets/115 - shopping-bag.svg' 
import { CartContext } from '../../context/cart.context'
import { CartIconContainer , CardIconeSvg , ItemCount } from './cart-icon.style' ;

const CartIcon = () => {

  const {iscart , setIsCart , cartCount} = useContext(CartContext)
  const toggleCart = () =>setIsCart(!iscart)

  return (
    <CartIconContainer onClick={toggleCart}>
        <CardIconeSvg />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon