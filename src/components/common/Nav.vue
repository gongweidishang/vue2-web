<template>
    <nav class="nav">
        <router-link to="/home">推荐</router-link>
        <router-link to="/bang">排行</router-link>
        <router-link to="/category">分类</router-link>
        <router-link to="/artist">歌手</router-link>
        <router-link to="/mv">MV</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

<style lang="less">
    .nav {
        width: 100%;
        height: 2.6rem;
        border-bottom: 1px solid #ddd;
        background: #fff;
        margin-top: 3rem;
        a {
            float: left;
            width: 20%;
            font-size: 1.1rem;
            text-align: center;
            line-height: 2.6rem;
            color: #333;
            border-bottom: 2px solid transparent;
            text-decoration: none;
        }
        a.on {
            color: #2095dd;
            border-bottom: 2px solid #2095dd;
        }
    }
</style>