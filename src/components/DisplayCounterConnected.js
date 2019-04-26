import React from 'react';
import useGlobal from '../data/store';


function DisplayCounterConnected() {
  const [{counter}] = useGlobal();

  return (
    <div>
    <h1> this is a separated component</h1>
      {`global value : ${counter}`}
    </div>
  );
}

export default DisplayCounterConnected;
