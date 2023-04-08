import PropTypes from 'prop-types';
import filterCss from './Filter.module.css';

export const Filter = ({ find }) => {
  return (
    <div className={filterCss.filter}>
      <label className={filterCss.label}>
        Find contacts by name
        <input type="text" onChange={find} className={filterCss.input} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  find: PropTypes.func.isRequired,
};
