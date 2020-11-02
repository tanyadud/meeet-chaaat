import React from 'react';
import { Spinner } from './Loader.styles';
import { CircleIn } from './Loader.styles';
import { CircleOut } from './Loader.styles';


const Loader = (props) => {
  return (
    <Spinner>
      <CircleIn/>
      <CircleOut/>
    </Spinner>
  )
}

export default Loader;
