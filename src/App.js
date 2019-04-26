import React from 'react';
import useGlobal from './data/store';
import CounterComponent from './components/CounterComponent';
import DisplayCounterConnected from './components/DisplayCounterConnected';

function App() {
  const [globalState, globalActions] = useGlobal();

  return (
    <div>
      <CounterComponent 
        counter={globalState.counter} 
        addToCounter={globalActions.addToCounter} />
      <DisplayCounterConnected />
    </div>
  );
}

export default App;
