<template>
    <div class="cart-item">
        <img
            :src="cartItem.image"
            :alt="cartItem.name"
            width="150"
            height="150"
        />
        <div class="cart-text">
            <p>{{ cartItem.name }}</p>
            <p>
                {{ formatNumber(cartItem.price) }}
                <span>đ</span>
            </p>
            <div class="quantity">
                <button
                    class="sub-btn"
                    @click="changeQuantity(cartItem, 'decrease')"
                >
                    -
                </button>
                <input :value="cartItem.quantity" type="text" />
                <button
                    class="add-btn"
                    @click="changeQuantity(cartItem, 'increase')"
                >
                    +
                </button>
            </div>
        </div>
        <div class="close" @click="deleteCartItem(cartItem)">
            <i class="far fa-times-circle"></i>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import shared from '../helpers/shared';
export default {
    name: 'CartItem',
    props: ['cartItem'],
    setup() {
        const store = useStore();
        const deleteCartItem = cartItem => {
            store.commit('DELETE_FROM_CART', cartItem);
        };

        const changeQuantity = (prod, status) => {
            store.commit('CHANGE_QUANTITY', { prod, status });
        };
        const formatNumber = shared.formatNumber;

        return { deleteCartItem, changeQuantity, formatNumber };
    },
};
</script>

<style></style>
