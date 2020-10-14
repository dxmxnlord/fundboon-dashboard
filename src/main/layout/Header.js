import React, { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import useReactRouter from 'use-react-router';

// import Context from '../../context';
import NavLinks from './NavLinks';
import fundboonLogoTextColor from '../../assets/img/fundboon-logo-text-color.png';
import fundboonLogoTextColorInverted from '../../assets/img/fundboon-logo-text-color-inverted.png';
import fundboonLogoSymbol from '../../assets/img/fundboon-logo-symbol.png';

const Header = ({ onBurgerClick }) => {
  const [fundboonLogo, setFundboonLogo] = useState(fundboonLogoTextColor);

  return (
    <nav
      id="Header"
      className={classNames('navbar navbar-light')}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
    >
      <div className="container p-0">
        <Link className="navbar-brand" to="/">
          <img
            src={fundboonLogoSymbol}
            style={{width:'60px'}}
          />&nbsp;

          <img
            src={fundboonLogo}
            onMouseEnter={() => setFundboonLogo(fundboonLogoTextColorInverted)}
            onMouseLeave={() => setFundboonLogo(fundboonLogoTextColor)}
            className="logo"
            alt=""
          />
        </Link>
        <ul className="navbar-nav d-none d-lg-flex flex-row">
          <NavLinks />
        </ul>
        <ul className="navbar-nav d-flex d-lg-none flex-row">
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-light"
              onClick={onBurgerClick}
            >
              <i className="fas fa-bars" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
