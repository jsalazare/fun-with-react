import React from 'react';
import './App.css';
import Greet from './components/Greet';
import MyClass from './components/ClassComponent'
import NoJsx from './components/NoJSX'

function App() {
  return (
    <div className="App">
      {/*<Greet></Greet>*/}
      <MyClass></MyClass>
      <NoJsx></NoJsx>


    </div>
  );
}

export default App;
