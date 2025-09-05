import PropTypes from 'prop-types';
import s from './MobMenu.module.scss';

function MobMenu({ isBurgerActive }) {
  return (
    <div className={`${s.menu}  ${isBurgerActive ? s.active : ''}`}>
      <ul>
        <li>sdf</li>
        <li>hhg</li>
        <li>fgh</li>
      </ul>
    </div>
  );
}

export default MobMenu;

MobMenu.propTypes = {
  isBurgerActive: PropTypes.bool,
};
