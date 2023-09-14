import {Link} from 'react-router-dom'
import {FaHamburger} from 'react-icons/fa'
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive'

const Header = ({onMenuClick}) => {
  const [toggle, setToggle] = useState(false);
  const isPortrait = useMediaQuery({ query: '(max-width: 768px)' });

  const creationMenu = () => {
    let i = 0;
    return ([
      [
        'Home', '#home', 'home'
      ],
      [
        'À propos', '#about', 'about'
      ],
      [
        'Formation', '#formation', 'formation'
      ],
      ['Contact', '#contact', 'contact']
    ].map(([title, url, scrollID]) => (
      <a
        onClick={onMenuClick}
        data-scroll={scrollID}
        href={url}
        key={i++}
        className="px-3 py-2 font-semibold hover:text-green-600">{title}</a>
    )));
  }
/*   [
        'Projects', '#projects', 'projects'
      ] */
  return (
    <header
      className="flex mx-auto justify-between drop-shadow-lg fixed w-full text-lg bg-white py-4 px-5"
      style={{
      zIndex: 100
    }}>
      <Link to='/' className="px-3 py-2 font-bold">Raritetnik<span className='text-green-600'>.DEV</span>
      </Link>
      <nav
        className={"relative flex flex-col md:flex-row md:justify-center space-x-4 items-end"}>
        <FaHamburger
          size={40}
          className='flex items-center justify-center md:hidden'
          style={{
          cursor: 'pointer'
        }}
          onClick={() => {
          setToggle(!toggle);
          console.log(toggle);
        }}/>
        <div
          className="flex flex-col items-center absolute top-10 right-0 rounded-md p-4 md:relative md:flex-row md:p-0 md:top-0"
          style={{
          backgroundColor: 'white',
          minWidth: 150,
          display: (isPortrait && !toggle) ? 'none' : 'flex'
        }}>
          {creationMenu()}
        </div>
      </nav>
    </header>
  );
}

export default Header;
