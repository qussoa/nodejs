import React from "react";
import { Link } from "react-router-dom";
/**
 * react-router-dom의 Link component
 * anchor tag와 같은 일을 수행하는 tag component인데
 * a  tag와 차이점은 click을 했을 시 router 부분만 갱신을 하고
 * 화면 전체는 새로고침을 하지 않는다
 */
const mainNav = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="nav-link text-dark" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/bbs">
          BBS
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/bbs/list">
          BBSLIST
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-dark" to="/login">
          LOGIN
        </Link>
      </li>
    </ul>
  );
};

export default mainNav;
