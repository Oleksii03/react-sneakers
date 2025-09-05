import PropTypes from 'prop-types';
import s from './Modal.module.scss';

function Modal({ active, setActive }) {
  // function handlerActiveModal() {
  //   setActive(false);
  // }

  return (
    <div className={`${s.modal} ${active ? s.active : ''}`} onClick={() => setActive(false)}></div>
  );
}

export default Modal;

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
