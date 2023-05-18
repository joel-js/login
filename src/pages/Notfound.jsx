import { NavLink } from 'react-router-dom'
const Notfound = () => {
  return (
    <div>
      Not found 
      <NavLink to='login' replace > back </NavLink>
    </div>
  );
}
 
export default Notfound;