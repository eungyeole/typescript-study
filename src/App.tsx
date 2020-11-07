import React from 'react';
import './App.css';
import Button from "./components/Button"

function App() {
  function name(){
    console.log("test");
  }
  return (
    <Button name={name} id={0}></Button>
  );
}

export default App;
