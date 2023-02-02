import Button from '../button/button.component' ;
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer , CartItems , EmptyMessage } from './cart-dropdown.style';
import { useSelector , useDispatch } from 'react-redux';
import { selectCartItem , selectCartOpen } from '../../store/cart/cart-selector' ;
import { setIsCart } from '../../store/cart/cart-action' ;

const CartDropdown = () => {

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItem) ;
  const iscart = useSelector(selectCartOpen) ;
  
  const navigat = useNavigate() ;
  const handelNavigat = ()=>{
    navigat('/checkout') ;
    dispatch(setIsCart(!iscart)) ;
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