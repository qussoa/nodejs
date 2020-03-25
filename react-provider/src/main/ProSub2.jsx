import React, { Component } from "react";
import ProInsert from "./ProInsert";

class ProSub2 extends Component {
  render() {
    const { message, changeMessage } = this.props;

    return (
      <div>
        <h3>나는 Sub2입니다</h3>
        <p>Sub2 : {message}</p>
        <p>나는 {message} Proinsert에게 전달</p>
        <ProInsert message={message} changeMessage={changeMessage} />
      </div>
    );
  }
}

export default ProSub2;
