<template>
    <NavBar />
    <div class="content">
        <router-view />
    </div>
</template>

<script>
import NavBar from './components/NavBar';
export default {
    name: 'App',
    components: {
        NavBar,
    },
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.content {
    margin-top: 60px;
}
</style>
