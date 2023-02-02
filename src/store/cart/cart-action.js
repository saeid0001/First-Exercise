import { createAction } from "../../utils/reducer/reducer.util"


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


export const addItemToCart = (cartItems , product) =>{
    const newCartItems = addCartItem(cartItems , product) ;
    return createAction("SET_CART_ITEMS" ,newCartItems)
}
  
export const removeItemToCart = (cartItems , removecart) =>{
    const newCartItems = remveCartItem(cartItems , removecart);
    return createAction("SET_CART_ITEMS" ,newCartItems)
}

export const deletItemToCart = (cartItems , removecart) =>{
    const newCartItems = DeletCartItem(cartItems , removecart);
    return createAction("SET_CART_ITEMS" ,newCartItems)
}

export const setIsCart = (bool) =>{
    return createAction("SET_IS_CART_OPEN" , bool)
}