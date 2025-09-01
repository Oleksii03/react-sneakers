import PropTypes from 'prop-types';

export function Icon({ name, width = 14, height = 14, className = '' }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`#${name}`} />
    </svg>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
