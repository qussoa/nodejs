import React, { Component } from "react";
import Moment from "react-moment";

class BucketItemView extends Component {
  changeEdit = () => {
    this.props.onEditing();
  };
  handleChangeFlag = () => {
    //this.props.changeFlag(bucketItem.b_id);
    const { changeFlag, bucketItem } = this.props;

    changeFlag(bucketItem.b_id);
  };
  render() {
    const { bucketItem } = this.props;
    return (
      <React.Fragment>
        <td onClick={this.handleChangeFlag}>{bucketItem.b_flag_text}</td>
        <td>
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td onClick={this.changeEdit}>{bucketItem.b_title}</td>
        <td>
          {/* 
     react에서 조건 별로 tag를 표시하고자 할 때
     {검사값 ? (true 일때) : (false)}
   */}
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

export default BucketItemView;
