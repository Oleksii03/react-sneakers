import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { Icon } from '@/components/Base/Icon';
import { useEffect, useRef, useState } from 'react';
import MobMenu from '@/components/Base/MobMenu/MobMenu';
import Modal from '../ModalWindow/Modal';

const icons = ['user', 'search', 'basket'];

function Header({ handlerDomEl }) {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const headerRef = useRef();

  const setActiveMenu = () => {
    setIsBurgerActive(prev => !prev);
    console.log('isBurgerActive', isBurgerActive);
  };

  useEffect(() => {
    document.body.classList.toggle('to-freeze', isBurgerActive);
  }, [isBurgerActive]);

  useEffect(() => {
    handlerDomEl(headerRef.current);
    window.addEventListener('resize', () => handlerDomEl(headerRef.current));
  }, [handlerDomEl]);

  return (
    <div className={s.wrapper}>
      <Modal active={isBurgerActive} setActive={setIsBurgerActive} />
      <MobMenu isBurgerActive={isBurgerActive} />

      <header className={s.header} ref={headerRef}>
        <div className="container">
          <div className={s.content}>
            <button
              onClick={() => setActiveMenu()}
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
    </div>
  );
}

export default Header;

Header.propTypes = {
  handlerDomEl: PropTypes.func,
};
