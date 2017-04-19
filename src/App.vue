<template>
    <div>
        <h1>vue2-web</h1>
        <p>谁知道我们，将走向何处</p>
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/foo">foo</router-link></li>
        </ul>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>