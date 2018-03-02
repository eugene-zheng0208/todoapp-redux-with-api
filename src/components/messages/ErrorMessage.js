import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({text}) => <span style={{color: '#9f3a38', fontSize: '12px', marginLeft: '15px'}}>{text}</span>;

ErrorMessage.propTypes = { text: PropTypes.string.isRequired };

export default ErrorMessage;
