import React from 'react';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
    name,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div className="form__group">
            <textarea
                className='form__control'
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

TextAreaFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default TextAreaFieldGroup;
