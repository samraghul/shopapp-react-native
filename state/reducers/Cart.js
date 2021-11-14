import { ADD_TO_CART } from "../actions/Cart";

const initialState = {
    items: {},
    totalAmount: 0
};

 const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productTitle = action.product.title;
            const productPrice = action.product.price;
            let newOrUpdateCartItem;
            if (state.items[action.product.id]) {
                newOrUpdateCartItem = {
                    quantity: state.items[action.product.id].quantity + 1,
                    title: productTitle,
                    price: productPrice,
                    sum: state.items[action.product.id].sum + productPrice
                }
            } else {
                newOrUpdateCartItem = {
                    quantity: 1,
                    title: productTitle,
                    price: productPrice,
                    sum: productPrice
                };
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.product.id]: newOrUpdateCartItem,
                    totalAmount: state.totalAmount + productPrice
                }
            }
            break;
    
        default:
            break;
    }
    return state;
}

export default cartReducer;