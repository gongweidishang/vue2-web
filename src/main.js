/**
 * Created by yongyuehuang on 2017/4/19.
 */
import Vue from 'vue';
import App from './app.vue';

console.log('进入应用');

let render = new Vue({
    el: '#app',
    render: h => h(App)
});

render;

if (module.hot) {
    console.log('热更新中。。。');
    module.hot.accept('./app.vue', () => render);
}
