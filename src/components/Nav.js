import NameTag from './NameTag.js'
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ name }) => {

    const getClassName = ({ isActive, isPending }) => {
        return isActive ? "active" : isPending ? "pending" : "inactive";
    }

    return (
        <nav className="navbar">
            <NameTag name={name} />
            <div className="nav-links">
                <NavLink 
                    to={'blog'}
                    className={ getClassName }
                >
                    Blog
                </NavLink>
            </div>
        </nav>
    )
};

export default Nav;