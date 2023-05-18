
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Fallback from './pages/Fallback';

const Login = React.lazy(() => import('./pages/Authenticate/Login'));
const Signup = React.lazy(() => import('./pages/Authenticate/Signup'));
const Layout = React.lazy(() => import('./pages/Layout/Layout'));
const Notfound  = React.lazy(() => import('./pages/Notfound'));
const Home = React.lazy(() => import('./pages/Home/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Fallback/>}>
        <Routes> 
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />}/>
            <Route path='login' element={<Login />}/>
            <Route path='home' element={<Home />}/>
            <Route path='*' element={<Notfound />}/>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}
 
export default App;