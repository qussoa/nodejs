import React, { Component } from "react";
import BucketContext from "../provider/BucketProvider";

class BucketInsert extends Component {
  /*
        input box를 사용하는 컴퍼넌트에서
        사용자가 입력한 문자열을 임시로 담고 있는 변수 선언
    */
  state = {
    bucket_title: ""
  };
  // 상위 컴퍼넌트에서 제공한 Context.Provider를 사용하여
  // state 변수와 handler method들을 사용하겠다
  // 내부에서 context라는 변수가 생성
  static contextType = BucketContext;
  handleOnKeyPress = ev => {
    const { bucket_add } = this.context;
    const { bucket_title } = this.state;
    if (ev.key === "Enter") {
      if (bucket_title === "") {
        alert("버킷을 입력한 후 Enter를 누르세요");
        return false;
      }

      //alert(this.state.bucket_title); 정형적
      bucket_add(bucket_title); // 비정형적 비구조적분해후 독립 변수로 사용
      this.setState({
        bucket_title: ""
      });
    }
  };
  handleOnChange = event => {
    this.setState({
      bucket_title: event.target.value,
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          <input
            className="w3-input w3-border w3-hover-gray w3-round"
            placeholder="버킷에 추가할 내용을 입력하세요 "
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleOnKeyPress}
            name="bucket_title"
          />
        </div>
      </section>
    );
  }
}

export default BucketInsert;
