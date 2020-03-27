import React, { Component } from "react";

class dd extends Component {
  render() {
    // 기본코드
    const f1 = function(arg1, arg2) {
      return arg + 30;
    };
    // 화살표 함수
    const f2 = (arg1, arg2) => {
      return arg1 + arg2;
    };
    const f3 = (arg1, arg2) => arg1 + arg2;
    return <div></div>;
  }
}

export default dd;
