import NameTag from './NameTag.js'

const Nav = ({ name }) => {
    return (
        <nav className="navbar">
            <NameTag name={name} />
            <div className="nav-links">
                <a>Test</a>
                <a>Test</a>
                <a>Test</a>
                <a>Test</a>
            </div>
        </nav>
    )
};

export default Nav;