import React from 'react';
import Spinner from '../../common/images/spinner.svg'
// import { Container } from './Dropdown.styles';
// import PropTypes from 'prop-types';

const Loader = () => {
  return (
    <div>
      <img src={Spinner} alt="Loading"/>
    </div>
  )
};

export default Loader;
