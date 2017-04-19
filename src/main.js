/**
 * Created by yongyuehuang on 2017/4/19.
 */
import Vue from 'vue';
import App from './app.vue';

let render = new Vue({
    el: '#app',
    render: h => h(App)
});

render;

if (module.hot) {
    console.log('热更新中。。。');
    module.hot.accept('./app.vue', () => render);
}
