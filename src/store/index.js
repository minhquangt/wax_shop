import { createStore } from 'vuex';
import { data } from './data';

export default createStore({
    state: {
        productList: data,
        cart: [],
    },
    getters: {},
    mutations: {
        ADD_TO_CART(state, { prod, quantity }) {
            console.log(quantity);
            const productTmp = state.cart.find(
                product => prod.id === product.id
            );
            if (productTmp) {
                state.cart = state.cart.map(product => {
                    if (prod.id === product.id) product.quantity += quantity;
                    return product;
                });
            } else {
                const newProduct = {...prod, quantity: quantity };
                state.cart.push(newProduct);
            }

            console.log(state.cart);
        },
        DELETE_FROM_CART(state, prod) {
            state.cart = state.cart.filter(product => prod.id !== product.id);
            console.log(state.cart);
        },
        CHANGE_QUANTITY(state, { prod, status }) {
            state.cart = state.cart.map(product => {
                if (prod.id === product.id) {
                    if (status === 'increase') product.quantity++;
                    else {
                        product.quantity > 1 ? product.quantity-- : 1;
                    }
                }
                return product;
            });
            console.log(state.cart);
        },
        RESET_CART(state) {
            state.cart = [];
        },
    },
    actions: {
        addToCart: ({ commit }, payload) => {
            return commit('ADD_TO_CART', payload);
        },
    },
    modules: {},
});