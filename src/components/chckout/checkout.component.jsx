import './checkout.style.scss' ;
import CheckOutItem from '../checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartTotal , selectCartItem } from '../../store/cart/cart-selector';

const CheckOut = () => {

    const cartItems = useSelector(selectCartItem) ;
    const totalCount = useSelector(selectCartTotal) ;

  return (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((item) =>{
            const { id } = item ;
            return(
                <CheckOutItem key={id} product={item}/>
            )
        })}
        <span className='total' >Total : ${totalCount}</span>
    </div>
  )
}

export default CheckOut ;