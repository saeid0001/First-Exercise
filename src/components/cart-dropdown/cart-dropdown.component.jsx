import {useContext} from 'react' ;
import Button from '../button/button.component' ;
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer , CartItems , EmptyMessage } from './cart-dropdown.style';

const CartDropdown = () => {

  const { cartItems , iscart , setIsCart } = useContext(CartContext) ;
  
  const navigat = useNavigate() ;
  const handelNavigat = ()=>{
    navigat('/checkout') ;
    setIsCart(!iscart) ;
  }


  return (
    <CartDropdownContainer>
        {cartItems.length ? (
          <CartItems>
          {cartItems.map(item=> <CartItem key={item.id} cartItem={item} />)} 
          </CartItems>
        ) : (<EmptyMessage>There Are No Products !</EmptyMessage>)
      }
        <Button onClick={handelNavigat}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown