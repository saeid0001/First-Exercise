const INITIOAL = {
    cartItems : [] ,
    // cartCount : 0,
    // totalCount : 0 ,
    iscart : false ,
  }
  
export const cartReducer = (state=INITIOAL , action={}) =>{
  
    const {type , payload} = action ;
  
    switch(type) {
      case "SET_CART_ITEMS" :
        return{
          ...state ,
          cartItems: payload
        }
      case "SET_IS_CART_OPEN" :
        return{
          ...state ,
          iscart: payload
        }
      default :
        return state
    }
  
  }