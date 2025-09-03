// import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { Icon } from '@/components/Base/Icon';
import { useEffect, useRef, useState } from 'react';
import MobMenu from '@/components/Base/MobMenu/MobMenu';
import PropTypes from 'prop-types';

const icons = ['user', 'search', 'basket'];

function Header({ handlerDomEl }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    handlerDomEl(headerRef.current);
    window.addEventListener('resize', () => handlerDomEl(headerRef.current));
  }, [handlerDomEl]);

  return (
    <header className={s.header} ref={headerRef}>
      {/* <MobMenu /> */}

      <div className="container">
        <div className={s.content}>
          <button
            onClick={() => setIsBurgerActive(prev => !prev)}
            className={`${s.burger_btn} ${isBurgerActive ? s.active : ''}`}
          >
            {[...Array(3)].map((_, i) => (
              <span key={i}></span>
            ))}
          </button>

          <nav className={s.nav}>
            <ul className={s.nav_list}>
              <li className={s.nav_list__item}>
                <Link to="catalog">Catalog</Link>
              </li>
              <li className={s.nav_list__item}>
                <Link to="/">All</Link>
              </li>
            </ul>
          </nav>

          <Link to="/" className={s.logo}>
            <p className={s.logo__text}>
              <span>your</span>SNEAKER
            </p>
          </Link>

          <ul className={s.icon_box}>
            {icons.map(iconName => (
              <li className={s.icon_item} key={iconName}>
                <Link>
                  <Icon name={iconName} className={s.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  handlerDomEl: PropTypes.func,
};
