export const SET_ORDERS = 'SET_ORDERS'

const initialState = {
    orders:[]
}

export function ordersReducer(state = initialState, action) {
    var newState = state
    var orders
    switch (action.type) {
        case SET_ORDERS:
            newState = { ...state, orders: action.orders }
            break
        default:
    }
    return newState}
