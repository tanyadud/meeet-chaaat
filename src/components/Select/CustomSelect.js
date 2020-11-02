import React from 'react';
import { Select } from '../../screens/Login/Login.styles';

export default (props) => {
  return (
    <div>
      <label htmlFor="select">{props.name}</label>
      <Select>
        {props.list.map((age) => (
          <option key={age}>{age}</option>
        ))}
      </Select>
    </div>
  );
};
