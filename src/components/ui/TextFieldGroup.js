import React from 'react';
import PropTypes from 'prop-types';

import './TextFieldGroup.scss';

const TextFieldGroup = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="form__group">
      <input
        className="form__control"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
