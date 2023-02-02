import { createSelector } from 'reselect' ;

const selectCartReducer = (state) => state.cart ;

export const selectCartItem = createSelector(
    [selectCartReducer] ,
    (cart) => cart.cartItems 
)

export const selectCartOpen = createSelector(
    [selectCartReducer] ,
    (cart) => cart.iscart 
)

export const selectCartCounet = createSelector(
    [selectCartItem] ,
    (cartItems) => cartItems.reduce(
        (total , counter) => total + counter.quantity , 0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItem] ,
    (cartItems) => cartItems.reduce(
        (total , counter) => total + counter.quantity * counter.price , 0
    )
)

// const countnumber = newCartItems.reduce(
//     (total , counter) => total + counter.quantity , 0
// )
// const totalPrice = newCartItems.reduce(
//     (total , counter) => total + counter.quantity * counter.price , 0
// )