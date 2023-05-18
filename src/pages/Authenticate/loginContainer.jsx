import React from 'react';
import Login from './Login';
const loginContext = React.createContext();
const loginContainer = () => {
  // const [user, setUser] = React.useState();
  const propsCombined = {};
  return(
    <loginContext.Provider value={propsCombined}>
      <Login />
    </loginContext.Provider>
  );
}
 
export default loginContainer;