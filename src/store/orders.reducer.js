export const SET_ORDERS = 'SET_ORDERS'
export const UPDATE_ORDER = 'UPDATE_ORDER'

const initialState = {
    orders: []
}

export function ordersReducer(state = initialState, action) {
    var newState = state
    var orders
    switch (action.type) {
        case SET_ORDERS:
            newState = { ...state, orders: action.orders }
            break
        case UPDATE_ORDER:
            newState = {
                ...state,
                orders: state.orders.map(order =>
                    order._id === action.order._id ? action.order : order
                )

            }
            break
        default:
    }
    return newState
}
