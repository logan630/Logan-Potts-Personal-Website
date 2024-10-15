import '../css/Root.css';
import Nav from '../components/Nav.jsx';
import { Outlet } from 'react-router-dom';
import Contact from '../components/Contact.jsx';

const Root = () => {
  return (
    <div className="App">
      <Nav name="Logan Potts" />
      <Outlet />
      <Contact />
    </div>
  );
}

export default Root;
