// Combining

import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer'

import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
})

const persistConfig = {
    key:'root',
    storage: storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig,rootReducer)