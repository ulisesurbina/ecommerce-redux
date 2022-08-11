import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: [],
    reducers: {
        setShoppingCart: (state,action) => {
            const shoppingCart= action.payload
            return shoppingCart
        }
    }
})

export const getShoppingCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then((res) => dispatch(setShoppingCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)))
        .catch(error => console.log(error))
}

export const addShoppingCartThunk = shoppingCart => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", shoppingCart, getConfig())
        .then(() => dispatch(getShoppingCartThunk()))
        .finally(() => dispatch(setIsLoading(false)))
        .catch(error => console.log(error))
}

export const buyCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",{}, getConfig())
        .then(() => dispatch(setShoppingCart([])))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
