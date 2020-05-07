import React from "react";
import "./App.css";
// LongComponent as Component
//-> 이미 존재하는 component의 이름이 길어서 사용하기 힘들때
//   임의의 별명으로 붙여서 단축어로 사용하는 방법
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 3개의 page를 import하여 component로 설정
import Home from "./pages/home";
import Login from "./pages/login";
import BBs from "./pages/bbs";
import BBsList from "./pages/bbsList";
import MainNav from "./mainNav";

/**
 *  Router
 * Route로 설정된 컴포넌트를 요청된 path에 따라
 * 교체하여 보여주는 영역
 * Route에 설정된 path는 웹브러우저 주소창의 URL 중
 * path에 따라 컴퍼넌트를 교체하여 보여준다
 * Route의 path에는 설정하는 규칙이 있다
 * 기본은 '/'를 기준으로 모두 분해하여 각각의 요청 규칙으로 삼는다
 *
 * 만약 '/bbs'라고 요청을 하면
 * '/'로 한번 요청, /bbs로 또한번 요청한 결과가 되어
 * 두개의 route를 모두 보여주게 된다
 *
 * /요청과 /bbs 요청이 같이 있을 경우
 * / 요청에 대하여 exact 키워드를 부착하여
 *  /bbs 요청이 있을 경우 / 요청을 무시하도록 설정해야한다
 */
function App() {
  return (
    <div className="container-fluid">
      <header className="jumbotron text-center">
        <h3>React Router DOM</h3>
        <input placeholder="아무거나 입력" />
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/bbs/list" component={BBsList} />
          <Route path="/bbs/:name" component={BBs} />
          <Route path="/bbs" component={BBs} />
        </Switch>
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
