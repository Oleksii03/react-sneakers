// import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link to="woman">Woman</Link>
            </li>
            <li className="nav-list__item">
              <Link to="men">Men</Link>
            </li>
            <li className="nav-list__item">
              <Link to="/">All</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
