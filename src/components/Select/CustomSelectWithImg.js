import React, { useState } from 'react';

export default (props) => {
  const [show, setShow] = useState(false);

  function openList() {}

  return (
    <div className="form-group">
      <div>
        <input placeholder="Choose your country" />
        <button onClick={openList}>!</button>
      </div>
      {
        <div>
          {props.list.map((element) => (
            <span key={element.name}>{element.name}</span>
          ))}
        </div>
      }
    </div>
  );
};
