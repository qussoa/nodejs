import React, { Component } from "react";
import Moment from "react-moment";
import BucketContext from "../provider/BucketProvider";

class BucketItemEdit extends Component {
  state = {
    bucket_title: ""
  };

  static contextType = BucketContext;

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
    const { bucket_update } = this.context;
    const { bucketItem, onEditing } = this.props;
    const { bucket_title } = this.state;
    if (ev.key === "Enter") {
      //alert(this.state.bucket_title);
      // 현재 리스트의 id값과 새로 입력한 버킷 문자열을
      // Main으로 전송하여 update를 수행하도록 실시
      bucket_update(bucketItem.b_id, bucket_title);
      onEditing();
    }
  };

  noClick = ev => {
    ev.stopPropagation();
  };

  render() {
    const { bucketItem, onEdition, changeFlag } = this.props;
    return (
      <React.Fragment>
        <td onClick={changeFlag}>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>
          <input
            onClick={this.noClick}
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
