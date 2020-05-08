import React from "react";
import "./App.css";
import BBsMain from "./bbs/bbsMain";
import BBsWrite from "./bbs/bbsWrite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNav from "./mainNav";
import BBsDetail from "./bbs/bbsDetail";

function App() {
  const header_style = {
    marginBottom: 0,
    backgroundColor: "#285943",
    color: "#D7FFF1",
  };
  return (
    <div className="container-fluid">
      <header style={header_style} className="jumbotron text-center">
        <h2>My BBS 2020</h2>
        <p>React &amp; Spring Boot BBS</p>
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={BBsMain} />
        <Switch>
          <Route path="/bbsWrite/:bbsid" component={BBsWrite} />
          <Route path="/bbsWrite/" component={BBsWrite} />
        </Switch>
        <Route path="/bbsDetail/:bbsid" component={BBsDetail} />
      </Router>
    </div>
  );
}

export default App;

/**
 *  React Router
 * React는 원칙 : singlePage Application
 * 한페이지에서 모든 것을 해결(CRUD)하는 방식
 * 실질적으로 SPA 에서는 한번에 보여주는 한계있고
 * 너무 많은 정보를 한 곳에 모아두다보면
 * 무엇을 어떻게 해야할지 UI/UX 개념에서 많은 혼란이 있을 수 있다
 * SPA 페이지 일부를 교체하면서 보여주는 형식으로
 * 기존 Web Application 환경의 장점을 쓸 수 있도록 하는 것
 *
 * WAS와 다른 점
 *  서버로부터 데이터를 가져와서 보여주기는 하되
 *  모든 페이지 정보를 서버로부터 가져와서 보여주는 방식이 아닌
 *  전체 페이지 중 필요한 데이터 변경이 되는 것만 교체하는 형식으로
 *  어플리케이션이 작동한다
 */
