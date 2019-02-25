import FrontPage from './pages/FrontPage.vue'
import Shop from './pages/Shop.vue'
import LoginPage from './pages/LoginPage.vue'


export const routes = [
    {path: '', name: 'frontpage', component: FrontPage},
    {path: '/shop', name: 'shop', component: Shop},
    {path: '/login', name: 'login', component: LoginPage}

]