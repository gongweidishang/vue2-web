<template>
    <ul class="song-ul">
        <li v-for="song in songList">
            <span class="title">{{song.singer}} - {{song.title}}</span>
            <i :style="{background: 'url('+ downLoad +') no-repeat'}"></i>
        </li>
    </ul>
</template>

<script>
    import downLoad from '../../../static/img/home/download_icon.png'
    export default {
        props: ['songList'],
        data() {
            return {
                downLoad: downLoad
            }
        }
    }
</script>

<style lang="less">
    .song-ul {
        padding: 0 0.833rem;
        margin: 0;
        li {
            width: 100%;
            list-style: none;
            display: table;
            border-bottom: 1px solid hsl(0, 0%, 90%);
            height: 4rem;
            .title {
                width: 100%;
                padding-right: 2.657rem;
                display: table-cell;
                vertical-align: middle;
                padding-left: .3571rem;
                cursor: pointer;
                font-size: 1.17rem;
                box-sizing: border-box;
            }
            i {
                width: 2rem;
                height: 2rem;
                margin-top: 1.5rem;
                display: inline-block;
                background-size: 100%;
            }
        }
    }
</style>