<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <span class="navbar-brand" to="/">Navbar</span>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <router-link class="nav-link" to="/about"
                        >About</router-link
                    >
                    <router-link class="nav-link" to="/contact"
                        >Contact</router-link
                    >
                </div>
            </div>
            <div class="navbar-nav">
                <router-link class="nav-link" to="/cart"
                    >Cart ({{ cart.length }})</router-link
                >
            </div>
        </div>
    </nav>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
    name: 'NavBar',
    setup() {
        const store = useStore();
        return {
            cart: computed(() => store.state.cart),
        };
    },
};
</script>

<style scoped>
a.router-link-active {
    color: mediumspringgreen;
}
</style>
