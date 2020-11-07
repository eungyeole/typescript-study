import React, {useEffect, useReducer} from 'react';
import './App.css';
import Practice from "./components/Practice"
import Counter from "./components/Counter"

function App() {
  return (
    <>
      <Practice id="test" name={()=>{console.log("test")}}></Practice>
      <Counter></Counter>  
    </>
  )
}

export default App;
