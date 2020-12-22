const INITIAL_STATE = {
    currentUser: null
}

// Reducer
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                currentUser: action.payload
            }
            break;
    
        default:
            break;
    }
}
export default userReducer