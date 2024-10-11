import '../css/Root.css';
import Nav from '../components/Nav.js';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="App">
      <Nav name="Logan Potts" />
      <Outlet />
    </div>
  );
}

export default Root;
