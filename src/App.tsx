import React, {useEffect, useReducer} from 'react';
import './App.css';
import Practice from "./components/Practice"
import Counter from "./components/Counter"
import Lotto from "./components/Lotto"
import Rsp from "./components/Rsp"
import Home from "./components/Home"
import * as S from "./components/styles"
import { BrowserRouter as Router, Switch, Route, Link,NavLink } from 'react-router-dom';

function App() {
  return (
    <S.Wrapper>
      <Router>
        <S.Nav>
          <h3>은결이의 TypeScript 연구소</h3>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/counter" activeClassName="active">카운터</NavLink></li>
          <li><NavLink to="/lotto" activeClassName="active">로또</NavLink></li>
          <li><NavLink to="/rsp" activeClassName="active">가위바위보</NavLink></li>
        </S.Nav>
        <S.NavWrapper>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/counter" component={Counter}></Route>
            <Route exact path="/lotto" component={Lotto}></Route>
            <Route exact path="/rsp" component={Rsp}></Route>
          </Switch>
        </S.NavWrapper>
      </Router>
    </S.Wrapper>
  )
}

export default App;
