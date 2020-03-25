import React, { Component } from "react";
import ProSub1 from "../main/ProSub1";
import ProSub2 from "./ProSub2";
import Mprovider from "../provider/Messageprovider";

class ProMain extends Component {
  /*
     어플 목표
     message 변수를 ProMain에 연동된 모든 컴퍼넌트에 전파하고
     어디선가 한 번만 그 값을 변경하면 모든 곳에서 같은
     값이 보이도록 하겠다
    */
  state = {
    message: "나는 메인 메세지",
    changeMessage: mess => this.changeMessage(mess)
  };
  // main에 선언된 state.message 변수를 변경하기 위한
  // method를 선언한다
  changeMessage = me => {
    this.setState({
      message: me
    });
  };
  render() {
    return (
      <div>
        <h2>나는 메인</h2>
        <p>{this.state.message}</p>
        {/*
        ProMain에 선언된 state.message를 포함된 하위
        컴퍼넌트에 전달
         */}
        <Mprovider.Provider value={this.state}>
          <ProSub1 />
          <ProSub2 />
        </Mprovider.Provider>
      </div>
    );
  }
}

export default ProMain;
