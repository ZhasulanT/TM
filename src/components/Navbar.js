import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

function Navbar() {

  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            QN
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Главная
              </Link>
            </li>
           
            {!user && <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Войти
              </Link>
            </li>}

            {user && <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={() => auth.signOut()} variant={"outlined"}
              >
                Выйти
              </Link>
            </li>}

       
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;

