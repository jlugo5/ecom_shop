import { createSelector } from 'reselect'

// Input Selector
const selectShop = state => state.shop

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)