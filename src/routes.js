import FrontPage from './pages/FrontPage.vue'
import Shop from './pages/Shop.vue'
import LoginPage from './pages/LoginPage.vue'
import Basket from './pages/Basket.vue'


export const routes = [
    {path: '/', name: 'home', component: FrontPage},
    {path: '/shop', name: 'shop', component: Shop},
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/basket', name: 'basket', component: Basket}

]