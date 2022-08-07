<template>
    <div class="cart">
        <h1>SHOPPING CART</h1>

        <CartItem
            v-for="cartItem in cart"
            :key="cartItem.id"
            :cartItem="cartItem"
        />
        <p class="text-center" v-if="cart.length == 0">
            Your cart is currently empty.
        </p>
        <div class="total-price text-center" v-if="cart.length > 0">
            <h5>SUBTOTAL</h5>
            <p>
                {{ formatNumber(total) }}
                <span class="currency">đ</span>
            </p>
            <button type="button" class="btn btn-primary" @click="checkOut">
                CHECKOUT
            </button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import CartItem from '../components/CartItem';
import shared from '../helpers/shared';
import { createToast } from 'mosha-vue-toastify';

export default {
    name: 'CartView',
    components: { CartItem },
    setup() {
        const store = useStore();
        const formatNumber = shared.formatNumber;
        const checkOut = () => {
            createToast('Checkout successfully. Thank you', {
                type: 'success',
                showIcon: true,
                timeout: 2000,
                swipeClose: true,
                position: 'top-center',
            });
            store.commit('RESET_CART');
        };
        return {
            cart: computed(() => store.state.cart),
            total: computed(() => {
                let total = 0;
                for (let i = 0; i < store.state.cart.length; i++) {
                    total +=
                        store.state.cart[i].price *
                        store.state.cart[i].quantity;
                }
                return total;
            }),
            formatNumber,
            checkOut,
        };
    },
};
</script>

<style>
.cart {
    margin-top: 20px;
}

.cart h1 {
    text-align: center;
}

.cart p {
    text-align: center;
    margin: 24px;
    font-style: italic;
}

.cart-item {
    margin: 20px auto;
    padding: 30px;
    width: 800px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
}

.cart-text {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-bottom: 1px solid;
}

.cart-text input {
    width: 20px;
    border: none;
    outline: none;
    text-align: center;
    margin: 0 10px;
}

.cart-text button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
}

.close i {
    font-size: 24px;
    line-height: 150px;
    cursor: pointer;
}

.cart-text span,
.total-price span {
    text-decoration: underline;
    font-size: 14px;
    position: relative;
    top: -6px;
}

.total-price {
    margin-top: 60px;
}

.cart .total-price p {
    font-size: 24px;
    margin-top: 10px;
    font-style: normal;
}

.total-price button {
    margin: 20px auto;
    background-color: #000;
    padding: 10px;
    color: white;
}
</style>
