import React, { Component } from "react";

class ProInsert extends Component {
  state = {
    message: "나는 Insert 컴퍼넌트"
  };
  /*
  Main->Sub2->나에게 전달된 changeMessage 메서드를 호출하여
  지금부터 내가 보내는 문자열을 전체 컴퍼넌트가
  공유하는 message 변수에 적용하라
*/
  messageSend = () => {
    this.props.changeMessage(this.state.message);
  };

  // handleChange에서 this.state.message를 변경하면
  // 현재 컴퍼넌트 어디에 this.state.message가 있던 상관없이
  // 동시에 변경된 값이 표현된다
  handleChange = ev => {
    // 키보드에서 입력을 하면 입력받은 문자열을
    // this.state.message입력
    this.setState({ message: ev.target.value });
  };
  render() {
    const { props } = this;
    const { message } = this.state;
    return (
      <div>
        <h5>입력박스</h5>
        <label>문자열을 입력하세요</label>
        {/*
            react에서 input box를 사용하려면
            1. 먼저 value에 포함시킬 state 변수를 선언하고
            2. vale={this.sate.변수}라고 작성
            3. onChange 이벤트를 캡쳐하여 키보드에서 입력된 문자열을
               this.setState 변수에 반영
        */}
        <div>
          <input value={this.state.message} onChange={this.handleChange} />
          <button onClick={this.messageSend}>전달</button>
        </div>
        {message}
      </div>
    );
  }
}

export default ProInsert;
