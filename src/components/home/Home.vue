/**
 * Created by yongyuehuang on 2017/4/19.
 */
<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
  </div>
</template>

<script>
 import Banner from './templates/Banner.vue'
 import a from '../../static/img/home/banner1.png'
 import b from '../../static/img/home/banner2.jpg'
 import c from '../../static/img/home/banner3.jpg'
 import d from '../../static/img/home/banner4.jpg'
 import e from '../../static/img/home/banner5.jpg'
     export default {
        name: 'Home',
        data() {
            return {
                listImg: [{
                    url: a
                }, {
                    url: b
                }, {
                    url: c
                }, {
                    url: d
                }, {
                    url: e
                }]
            }
        },
        components: {
            'app-banner': Banner
        }
    };
</script>