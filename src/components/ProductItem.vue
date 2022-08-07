<template>
    <div className="product-item">
        <router-link class="nav-link" :to="`/products/${product.id}`">
            <img :src="product.image" :alt="product.name" />
        </router-link>
        <div className="product-item-info">
            <p>{{ product.name }}</p>
            <p>
                {{ formatNumber(product.price) }}
                <span className="currency">đ</span>
            </p>
            <button
                className="btn btn-dark btn-add"
                @click="addToCart(product)"
            >
                Add to Cart
            </button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import shared from '../helpers/shared';
import { createToast } from 'mosha-vue-toastify';
export default {
    name: 'ProductItem',
    props: ['product'],
    setup() {
        const store = useStore();
        const addToCart = prod => {
            store.dispatch('addToCart', { prod, quantity: 1 });
            createToast('Add product successfully', {
                type: 'success',
                showIcon: true,
                timeout: 2000,
                swipeClose: true,
            });
        };
        const formatNumber = shared.formatNumber;
        return {
            addToCart,
            formatNumber,
        };
    },
};
</script>

<style>
.product-item img {
    width: 332px;
    height: 332px;
}

.row .product-item {
    margin-top: 28px;
}

.product-item a {
    text-decoration: none;
    color: #000;
}

.product-item a:hover {
    color: #000;
}

.product-item span {
    text-decoration: underline;
    font-size: 14px;
    position: relative;
    top: -6px;
}

.product-item p {
    margin: 8px;
}

.product-item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-item .btn-add {
    padding: 10px 40px;
}
</style>
