// import { ReactComponent as CartIconShop } from '../../assets/115 - shopping-bag.svg' 
import { useSelector , useDispatch } from 'react-redux';
import { CartIconContainer , CardIconeSvg , ItemCount } from './cart-icon.style' ;
import { selectCartOpen , selectCartCounet } from '../../store/cart/cart-selector'
import { setIsCart } from '../../store/cart/cart-action';

const CartIcon = () => {

  const dispatch = useDispatch()
  
  const iscart = useSelector(selectCartOpen) ;
  const cartCount = useSelector(selectCartCounet) ;
  const toggleCart = () => {
    return dispatch(setIsCart(!iscart))
  }

  return (
    <CartIconContainer onClick={toggleCart}>
        <CardIconeSvg />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon