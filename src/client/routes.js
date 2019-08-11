import Home from './views/home/Home';
import About from './views/about/About';
import SignUp from './views/signup/SignUp';

const routes = [
  {
    prefix: '',
    path: '/',
    component: Home,
    exact: true,
    title: 'Home',
  },
  {
    prefix: '',
    path: '/about',
    component: About,
    exact: true,
    title: 'About',
  },
  {
    prefix: '',
    path: '/signup',
    component: SignUp,
    exact: true,
    title: 'Sign Up',
  },
]

export default routes;
