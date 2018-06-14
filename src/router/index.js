/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import TextBox from '@/components/Text_Area';
import MyScriptJSVueComponent from '@/components/myscriptjs-vue-component';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'TextBox',
    component: TextBox,
  },
  {
    path: '/myscript-js',
    name: 'MyScriptJSVueComponent',
    component: MyScriptJSVueComponent,
  },
  ],
});
