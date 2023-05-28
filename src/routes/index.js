//Layouts
import { HeaderOnly, HeaderFooter } from '~/Layout';

//Pages
import Home from '~/pages/Home';
import Order from '~/pages/Order';
import Pay from '~/pages/Pay';
import Search from '~/pages/Search';
import News from '~/pages/News';
import Promotion from '~/pages/Promotion';

import Accessory from '~/pages/Accessory';
import SignUp from '~/pages/SignUp';
import Login from '~/pages/Login';
import Macbook from '~/pages/Macbook';
import Imac from '~/pages/Imac';
import Iphone from '~/pages/Iphone';
import Ipad from '~/pages/Ipad';
import MacStudio from '~/pages/MacStudio';
import MacMini from '~/pages/MacMini';

// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/order', component: Order, layout: HeaderFooter },
    { path: '/pay', component: Pay, layout: HeaderFooter },
    { path: '/search', component: Search, layout: HeaderOnly },
    { path: '/product', component: Search, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/sign_up', component: SignUp, layout: null },
    { path: '/macbook', component: Macbook },
    { path: '/imac', component: Imac },
    { path: '/macstudio', component: MacStudio },
    { path: '/macmini', component: MacMini },
    { path: '/iphone', component: Iphone },
    { path: '/ipad', component: Ipad },
    { path: '/accessory', component: Accessory, layout: HeaderFooter },
    { path: '/news', component: News, layout: HeaderFooter },
    { path: '/promotion', component: Promotion, layout: HeaderFooter },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
