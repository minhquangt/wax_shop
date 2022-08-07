<template>
    <div className="products">
        <div className="row">
            <div className="col-3 intro">
                <h1>By Vilain</h1>
                <p>
                    We provide professional men’s grooming products that give
                    you a satisfying styling performance time after time. By
                    Vilain has revolutionized the hair styling game with quality
                    ingredients and consistently excellent performance, and
                    you’ll find our products all over the world: from London to
                    Singapore.
                </p>
                <p>
                    We’re proud of having customers in over 120 countries and
                    for providing the go-to products for professional salons
                    worldwide.
                </p>
                <p>
                    Our range of professional hair products is formulated in
                    collaboration between our Danish R&D team and professional
                    hairdressers – delivering the high-caliber products that By
                    Vilain is known for.
                </p>
            </div>
            <div className="col-9 product-list">
                <div className="row">
                    <div
                        className="col-4"
                        v-for="prod in productList"
                        :key="prod.id"
                    >
                        <ProductItem :product="prod" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ProductItem from '../components/ProductItem';

export default {
    name: 'HomeView',
    components: { ProductItem },
    setup() {
        const store = useStore();
        return {
            productList: computed(() => store.state.productList),
        };
    },
};
</script>

<style scoped>
.products {
    display: flex;
}

.row .intro {
    font-size: 16px;
    padding: 20px 28px 0 36px;
    text-align: justify;
}

.intro p {
    color: #797979;
    margin: 10px 0;
}

.product-list {
    margin-top: 20px;
}
</style>
