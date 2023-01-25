import { createContext , useState , useEffect } from 'react'

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

const DeletCartItem = (cartItems , productToAdd) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if(existingCartItem) {
    return cartItems.filter((item) => item.id !== productToAdd.id)
  }

}



export const CartContext = createContext({}) ;

export const CartProvider = ({children}) =>{

    const [iscart , setIsCart] = useState(false) ;
    const [cartItems , setCartItems] = useState([]) ;
    const [cartCount , setCartCount] = useState([]) ;
    const [totalCount , settotalCount] = useState(0) ;
    
    useEffect(()=>{
      const countnumber = cartItems.reduce((total , counter) => total + counter.quantity , 0)
      setCartCount(countnumber)
    } , [cartItems])

    useEffect(()=>{
      const totalPrice = cartItems.reduce((total , counter) => total + counter.quantity * counter.price , 0)
      settotalCount(totalPrice)
    } , [cartItems])

    const addItemToCart = (product) =>{
        setCartItems(addCartItem(cartItems , product))
    }
    
    const removeItemToCart = (removecart) =>{
        setCartItems(remveCartItem(cartItems , removecart))
    }

    const deletItemToCart = (removecart) =>{
        setCartItems(DeletCartItem(cartItems , removecart))
    }

    const value = {iscart , setIsCart , addItemToCart , removeItemToCart , deletItemToCart , cartItems , cartCount , totalCount}
    
    return(
        <CartContext.Provider value={value} >{children}</CartContext.Provider>
    )
}