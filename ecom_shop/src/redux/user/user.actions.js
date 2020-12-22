// Action Creator
export const serCurrentUser = user => (
    // Action
    {
        type: 'SET_CURRENT_USER', // Mandatory
        payload: user // optional
    }
)
