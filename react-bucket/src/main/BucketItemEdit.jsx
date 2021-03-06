import React, { Component } from "react";
import Moment from "react-moment";

class BucketItemEdit extends Component {
  state = {
    bucket_title: ""
  };
  /*
  view 모드에서 edit 모드로 변경될때
  input box에 view 모드에서 보았던 문자열 (title)을
  state 변수에 담아 주는 부분
*/
  componentDidMount() {
    const { bucketItem } = this.props;
    this.setState({
      bucket_title: bucketItem.b_title
    });
  }
  onChange = ev => {
    this.setState({
      bucket_title: ev.target.value
    });
  };
  onKeyPress = ev => {
    if (ev.key === "Enter") {
      //alert(this.state.bucket_title);
      // 현재 리스트의 id값과 새로 입력한 버킷 문자열을
      // Main으로 전송하여 update를 수행하도록 실시
      this.props.bucket_update(
        this.props.bucketItem.b_id,
        this.state.bucket_title
      );
      this.props.onEditing();
    }
  };
  render() {
    const { bucketItem, onEdition, changeFlag } = this.props;
    return (
      <React.Fragment>
        <td onClick={changeFlag}>{bucketItem.b_flag_text}</td>
        <td>
          {/*
            input box에서 기존 b_title값을 변경하도록 할 텐데
            value 옵션에 state 형 변수를 포함해야한다
            그래야만 onChange 이벤트에서 키보드로 입력한 내용을 
            정상적으로 input box에 보여주도록 할 수 있기 때문이나,
            state.bucket_title은 초기값이 ""인 비어있는 값이다
            pros로 전달받은 b_title을 state.bucket_title에 주입하여 
            보여주고 수정할 수 있도록 해야 하는데
            props로 받은 값을 state형 변수에 주입하기 위해서는
            LifeCycle method 중에서 componentDidUpdate()에서 처리해주어야한다            
          */}
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>
          <input
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={this.state.bucket_title}
          />
        </td>
        <td>
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            ""
          )}
        </td>
        <td>
          <input type="checkbox" value={bucketItem.b_cancle} />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemEdit;
