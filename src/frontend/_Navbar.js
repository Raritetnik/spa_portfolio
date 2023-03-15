import { Link } from 'react-router-dom'

const _Navbar = () => {
    return(
        <header className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between shadow mb-5 bg-body-tertiary">
            <Link to='/' className="navbar-brand nav__menuTitle" >Mykhael.dev</Link>
            <nav className='d-flex nav__menu'>
                <Link to='/home' className="nav-link" >Home</Link>
                <Link to='/home' className="nav-link" >About</Link>
                <Link to='/home' className="nav-link" >Projects</Link>
                <Link to='/home' className="nav-link" >Contact</Link>
            </nav>
        </header>
    );
}

export default _Navbar;