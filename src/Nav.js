import NameTag from './NameTag.js'

const Nav = () => {
    return (
        <nav className="navbar">
            <NameTag name="Logan Potts" />
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