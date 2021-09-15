import './App.css';
import React, {useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function App() {
  const [counter, setCounter] = useState(0);
  const handleButttonClick = () => {
      setCounter(counter + 1)
    }
    return (
      <React.Fragment>
          <div>
          </div>
          <ComponentA handleButttonClick = {handleButttonClick}/>
          <ComponentB counter={counter}/>
      </React.Fragment>
  )
}

export default App;
