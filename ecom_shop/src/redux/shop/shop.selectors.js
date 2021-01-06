import { createSelector } from 'reselect'

import memoize from 'lodash.memoize'


// Input Selector
const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

 export const selectCollection = memoize(
    collectionsUrlParam => createSelector(
        [selectCollections],
        collections => collections[collectionsUrlParam]
    )
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key] )
)