
import { createSelector } from 'reselect'

// Input Selector

const selectCart = state => state.cart

// For selecting Cart items from the cart
export const selectCartItems = createSelector(
    [selectCart],
    (
        cart => cart.cartItems
    )
)

// For Selecting Item Count
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (
        cartItems => cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity
            , 0
            )
    )
)


// For Hidden Property
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (
        cartItems => cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price
            , 0
        )
    )
)