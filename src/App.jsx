import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import routes from './Utils/routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}
 
export default App;