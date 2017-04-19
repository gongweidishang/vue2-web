<template>
    <div>
        <app-header logo="logo" ></app-header>
        <app-nav></app-nav>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import Header from './components/common/Header.vue';
    import Nav from './components/common/Nav.vue';
    import Home from './components/home/Home.vue';
    export default {
        name: 'App',
        components: {
            "app-header": Header,
            "app-nav": Nav,
            "app-home": Home
        }
    };
</script>

<style>
    body, html {
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
</style>