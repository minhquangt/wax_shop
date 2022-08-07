<template>
    <div className="product-item-detail">
        <img :src="productDetail.image" alt="gold" />
        <div className="description">
            <h1 className="product-name">{{ productDetail.name }}</h1>
            <h1>
                {{ formatNumber(productDetail.price) }}
                <span className="currency">đ</span>
            </h1>

            <div className="text-center quantity">
                <button className="sub-btn" @click="changeQuantity('decrease')">
                    -
                </button>
                <span>{{ quantity }}</span>
                <button className="add-btn" @click="changeQuantity('increase')">
                    +
                </button>
            </div>
            <button
                className="buy-product"
                @click="addToCart(productDetail, quantity)"
            >
                Add to Cart
            </button>
            <div className="product-title">
                <h1>
                    The By Vilain Gold Digger Hairwax with Extreme Hold & Matte
                    Finish
                </h1>
                <p>
                    <span>Description: </span>
                </p>
                <ul>
                    <li v-for="des in productDescription" :key="des">
                        {{ des }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import shared from '../helpers/shared';
export default {
    name: 'ProductDetailView',
    components: {},
    setup() {
        const store = useStore();
        const route = useRoute();

        const id = route.params.id;
        const productDetail = store.state.productList.find(
            prod => prod.id === id
        );

        const quantity = ref(1);

        const changeQuantity = status => {
            if (status === 'increase') {
                quantity.value++;
            } else {
                if (quantity.value > 1) {
                    quantity.value--;
                }
            }
        };

        const addToCart = (prod, quantity) => {
            store.dispatch('addToCart', { prod: prod, quantity: quantity });
        };

        const formatNumber = shared.formatNumber;

        return {
            productDetail,
            productDescription: computed(() =>
                productDetail.description.split('#')
            ),
            quantity,
            changeQuantity,
            addToCart,
            formatNumber,
        };
    },
};
</script>

<style scoped>
.product-item-detail {
    display: flex;
    margin: 100px 20px;
    justify-content: space-between;
}

.currency {
    font-size: 24px;
    top: -16px;
    left: 6px;
}
.product-item-detail img {
    width: 714px;
    height: 714px;
    margin-right: 40px;
}

.product-item-detail input {
    width: 40px;
    border: none;
    outline: none;
    text-align: center;
    margin: 0 10px;
}

.product-item-detail button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
}

.description {
    background: #f8f8f8;
    padding: 40px;
}

.description h1 {
    text-align: center;
    font-weight: 400;
}

.description p {
    text-align: center;
    font-size: 12px;
    margin-top: 24px;
}

.product-item-quantity {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.product-item-detail button.buy-product {
    background: #000;
    color: white;
    padding: 14px;
    margin: 20px auto;
    display: block;
}

.description .product-title h1 {
    font-weight: 800;
}

.description .product-title p {
    text-align: left;
    font-size: 14px;
}

.description p span {
    font-weight: 800;
    font-size: 16px;
}

.description ul {
    margin: 32px;
}

.description ul li {
    list-style: disc;
    font-size: 14px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
