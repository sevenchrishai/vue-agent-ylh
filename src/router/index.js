import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'
import luckywheel from '@/components/luckywheel'
import home from '@/components/sub/home'
import usermanager from '@/components/sub/usermanager'
import merchantmanager from '../components/sub/merchantmanager'
import trademanager from '../components/sub/trademanager'
import reportmanager from '../components/sub/reportmanager'
import settlemanager from '../components/sub/settlemanager'
import errorpage from '../components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '*', redirect: '/404'},
    {path: '/', name: 'index', component: index, children: [
        {path: '/home', name: '首页', component: home},
        {path: '/usermanager', name: '用户管理', component: usermanager},
        {path: '/merchantmanager', name: '商家管理', component: merchantmanager},
        {path: '/trademanager', name: '交易管理', component: trademanager},
        {path: '/reportmanager', name: '报表管理', component: reportmanager},
        {path: '/settlemanager', name: '结算管理', component: settlemanager},
      ]},
    {path: '/login', name: 'login', component: login},
    {path: '/luckywheel', name: 'luckywheel', component: luckywheel},
    {path: '/404', name: '', component: errorpage},

  ],
})
