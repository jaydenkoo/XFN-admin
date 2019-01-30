import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Login'},
    {path:'/login',component:Login},
    {path:'/main',component:Main},
    {path:'*',component:NotFound}
    
  ]
})
