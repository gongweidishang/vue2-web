/**
 * Created by yongyuehuang on 2017/4/19.
 */
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})

let render = new Vue({
    router,
    el: '#app',
    render: h => h(App)
});

render;

// if (module.hot) {
//     非必须
//     module.hot.accept('./App.vue', () => render);
// }
