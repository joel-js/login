import Login from '../pages/Authenticate/Login';
import Signup from '../pages/Authenticate/Signup'
const routes = [
  { path: 'auth', 
    children: [
      { index: true, Component: Login },
      { path: 'login', Component: Login },
      { path: 'sign', Component: Signup }
    ]
  }
];

export default routes;