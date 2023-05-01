import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click); 
  const closeMobileMenu = () => setClick(false);

  // function that switches between button/ no button determined by screen size
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //everytime refresh, sign up button will only show up once
  useEffect(() => {
    showButton()
  }, []);

// button changes when window is resized
  window.addEventListener('resize', showButton);

  return (
    <>
       <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" >
            CHNGE <i className='fab fa-typo3' onClick={closeMobileMenu}/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* on click navbar will dissapear */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
              </Link>
              </li>
              <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onclick={closeMobileMenu}>
              Sign Up
              </Link>
            </li> 
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
       </nav>
    </>
  );
}

export default NavBar;

