import React, {useState} from 'react';
import {Message} from './message';
import './App.css';

function App() {
  let [isMorning, setMorning] = useState(true);
  let [count, setCount] = useState(0);
  return (
    <div className={`${isMorning ? 'bright' : 'dark'}`}>
      <h3>Day Time: {isMorning ? 'Morning' : 'Night'}</h3>
      <Message counter={count}/>
      <button onClick={()=>setCount(++count)}>Update Counter</button>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <br />
      <br />
      <button onClick={()=>setMorning(!isMorning)}>Change Theme</button>
      <br /><br />
      <h3>Current Theme: {isMorning ? 'Morning' : 'Night'}</h3>
      {/* <h4>The value of the counter is: {count}</h4> */}
      {/* <button onClick={()=>setCount(++count)}>Update Counter</button> */}
      {/* <button onClick={()=>setCount(0)}>Reset Counter</button> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
