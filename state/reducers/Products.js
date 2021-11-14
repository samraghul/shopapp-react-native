import PRODUCTS  from '../../data/Products-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(item => item.ownerId == 'u1')
};

const productsReducer = (state = initialState, action) => {
    return state;
}

export default productsReducer;