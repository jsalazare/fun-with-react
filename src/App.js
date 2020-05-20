import React from 'react';
import './App.css';
import Greet from './components/Greet';
import MyClass from './components/ClassComponent'
import NoJsx from './components/NoJSX'
import MyElement from './components/MyElement';
import ErrorBoundary from './components/ErrorBoundary';
import StateComponent from './components/StateComponent';
import Counter from './components/Counter';
import DestructuringStateAndProps from './components/DestructuringStateAndProps';
import DestructuringPropsAndStateClassComponent
  from './components/DestructuringPropsAndStateClassComponent';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      {/*<Greet></Greet>*/}
      {/*<MyClass></MyClass>*/}
      {/*<NoJsx></NoJsx>*/}
      {/*<StateComponent></StateComponent>*/}
      {/*<Counter></Counter>*/}
      {/*<DestructuringStateAndProps name="juan" age="13" ></DestructuringStateAndProps>*/}
      {/*<DestructuringPropsAndStateClassComponent name="juan" age="13" ></DestructuringPropsAndStateClassComponent>*/}
      <Events></Events>



    </div>
  );
}

export default App;
