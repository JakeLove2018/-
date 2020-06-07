import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/home'
import Learn from './components/learn'
import Student from './components/student'
import About from './components/about'
import Acivity from './components/acivity'
 

Vue.use(VueRouter);

const routes = [
{
	path:"/",
	component:Home,
},
{
	path:"/learn",
	component:Learn,
},
{
	path:"/student",
	component:Student,	
},
{
	path:"/about",
	component:About,
},
{
	path:"/acivity",
	component:Acivity,
}
];
const router = new VueRouter({
	routes,
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
  