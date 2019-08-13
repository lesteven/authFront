import Home from './views/home/Home';
import About from './views/about/About';
import SignUp from './views/signup/SignUp';
import Profile from './views/profile/Profile';
import Login from './views/login/Login';

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
  {
    prefix: '',
    path: '/login',
    component: Login,
    exact: true,
    title: 'Login',
  },
  {
    prefix: '',
    path: '/prof/:id',
    component: Profile,
    exact: true,
    title: 'Profile',
  },
]

export default routes;
