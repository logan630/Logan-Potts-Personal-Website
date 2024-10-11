import NameTag from './NameTag.js'
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

const Nav = ({ name }) => {

    const getClassName = ({ isActive, isPending }) => {
        return isActive ? "active" : isPending ? "pending" : "inactive";
    }

    return (
        <nav className="navbar">
            <NavLink to={'/'} children={<NameTag name={name} />} className='clear'/>
            <div className="nav-links">
                <NavLink 
                    to={'work'}
                    className={ getClassName }
                >
                    Work
                </NavLink>
                <NavLink 
                    to={'projects'}
                    className={ getClassName }
                >
                    Projects
                </NavLink>
                <NavLink 
                    to={'blog'}
                    className={ getClassName }
                >
                    Blog
                </NavLink>
                <NavLink 
                    to={'course_notes'}
                    className={ getClassName }
                >
                    Course Notes
                </NavLink>
                <NavLink 
                    to={'games'}
                    className={ getClassName }
                >
                    Games
                </NavLink>
            </div>
        </nav>
    )
};

export default Nav;