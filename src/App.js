import React from 'react';
import './App.css';
import Greet from './components/Greet';
import MyClass from './components/ClassComponent'
import NoJsx from './components/NoJSX'
import MyElement from './components/MyElement';
import ErrorBoundary from './components/ErrorBoundary';
import StateComponent from './components/StateComponent';

function App() {
  return (
    <div className="App">
      {/*<Greet></Greet>*/}
      {/*<MyClass></MyClass>*/}
      {/*<NoJsx></NoJsx>*/}
      <StateComponent></StateComponent>

    </div>
  );
}

export default App;
