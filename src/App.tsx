import React, {useEffect, useReducer} from 'react';
import './App.css';
import Practice from "./components/Practice"
import Counter from "./components/Counter"
import Lotto from "./components/Lotto"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h3>은결이의 TypeScript 연구소</h3>
      <Practice id={Math.floor(Math.random() * 3000)+1} name={()=>{console.log("test")}}></Practice>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">카운터</Link></li>
          <li><Link to="/lotto">로또</Link></li>
        </ul>
        <Switch>
          <Route exact path="/counter" component={Counter}></Route>
          <Route exact path="/lotto" component={Lotto}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
