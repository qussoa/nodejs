import React, { Component } from "react";
import PropTypes from "prop-types";

class ProSub1 extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUnmount() {}

  render() {
    /*
        수신(전달)된 변수를 tbis.props.message라고 쓰니 너무 길어
        받은 변수를 분해하여 비구좋화 실시
      */
    const { message } = this.props;

    return (
      <div>
        <h3>나는 Sub1입니다</h3>
        {/*
            아무런 선언도 하지 않고 ProMain에서 보낸 변수를
            원본 그대로 수신하는 방법
        */}
        <p>Sub1 : {this.props.message}</p>
        <p>Sub2 : {message}</p>
      </div>
    );
  }
}

export default ProSub1;
