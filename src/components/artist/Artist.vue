<template>
    <div>
        <artist-list v-for="singer in Object.keys(artist)" v-if="singer === 'listOne'" :singer="artist.listOne"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" v-if="singer === 'listTwo'" :singer="artist.listTwo"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" v-if="singer === 'listThree'" :singer="artist.listThree"></artist-list>
        <artist-list v-for="singer in Object.keys(artist)" v-if="singer === 'listFour'" :singer="artist.listFour"></artist-list>
    </div>
</template>

<script>
    import SingerList from './templates/SingerList.vue'
    import { artist } from '../../static/data/data'
    export default {
        components: {
            'artist-list': SingerList
        },
        data() {
            return {
                artist: artist
            }
        }
    }
</script>