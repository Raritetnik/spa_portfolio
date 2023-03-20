import { Link } from 'react-router-dom'


const Header = ({ onMenuClick }) => {

    const creationMenu = () => {
        return ([
            ['Home', '#home', 'home'],
            ['À propos', '#about', 'about'],
            ['Projects', '#projects', 'projects'],
            ['Contact', '#contact', 'contact'],
        ].map(([title, url, scrollID]) => (
            <a onClick={onMenuClick} data-scroll={scrollID} href={url} className="rounded-lg px-3 py-2 font-semibold hover:text-green-600">{title}</a>
        )));
    }
    return(
        <header className="flex mx-auto justify-between drop-shadow-lg fixed w-full text-lg bg-white py-4 px-5" style={{zIndex: 100}}>
            <Link to='/' className="px-3 py-2 font-bold" >Raritetnik<span className='text-green-600'>.DEV</span></Link>
            <nav className="flex sm:justify-center space-x-4">
            {creationMenu()}
            </nav>
        </header>
    );
}

export default Header;