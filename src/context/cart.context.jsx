import { createContext , useReducer } from 'react' ;
import { createAction } from '../utils/reducer/reducer.util';

//*********  addCartItem ***********************

const addCartItem = (cartItems , productToAdd) =>{
    const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

//*********  remveCartItem ***********************

const remveCartItem = (cartItems , productToAdd) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(productToAdd.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToAdd.id)
  }

  if(existingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  }
}


//*********  DeletCartItem ***********************

const DeletCartItem = (cartItems , productToAdd) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
    return cartItems.filter((item) => item.id !== productToAdd.id)
  }

}

export const CartContext = createContext({}) ;

const INITIOAL = {
  cartItems : [] ,
  cartCount : 0,
  totalCount : 0 ,
  iscart : false ,
}

const cartReducer = (state , action) =>{

  const {type , payload} = action ;

  switch(type) {
    case "SET_CART_ITEMS" :
      return{
        ...state ,
        ...payload
      }
    case "SET_IS_CART_OPEN" :
      return{
        ...state ,
        iscart:payload
      }
    default :
      console.log("Error Cart Cntext");
  }

}

export const CartProvider = ({children}) => {

    const [ {cartItems , cartCount , totalCount , iscart} , dispatch ] = useReducer(cartReducer , INITIOAL)

    const updateCartItemReducer = (newCartItems) =>{
      const countnumber = newCartItems.reduce((total , counter) => total + counter.quantity , 0)
      const totalPrice = newCartItems.reduce((total , counter) => total + counter.quantity * counter.price , 0)

      dispatch(createAction("SET_CART_ITEMS" , {cartItems:newCartItems , cartCount:countnumber , totalCount:totalPrice}))

    }

    const addItemToCart = (product) =>{
      const newCartItems = addCartItem(cartItems , product) ;
      updateCartItemReducer(newCartItems)
    }
    
    const removeItemToCart = (removecart) =>{
      const newCartItems = remveCartItem(cartItems , removecart);
      updateCartItemReducer(newCartItems)
    }

    const deletItemToCart = (removecart) =>{
      const newCartItems = DeletCartItem(cartItems , removecart);
      updateCartItemReducer(newCartItems)
    }

    const setIsCart = (bool) =>{
      dispatch(createAction("SET_IS_CART_OPEN" , bool))
    }

    const value = {iscart , setIsCart , addItemToCart , removeItemToCart , deletItemToCart , cartItems , cartCount , totalCount}
    
    return(
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}