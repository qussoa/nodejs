import React, { Component } from "react";
import Moment from "react-moment";
import BucketContext from "../provider/BucketProvider";

class BucketItemView extends Component {
  static contextType = BucketContext;
  noChangeEdit = ev => {
    ev.stopPropagation();
  };
  changeEdit = ev => {
    ev.stopPropagation();
    const { bucketItem } = this.props;
    if (bucketItem.b_cancel) {
      alert("취소된 버킷은 수정할 수 없습니다");
      return false;
    }
    if (bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 수정할 수 없다");
      return false;
    }
    this.props.onEditing();
  };
  handleChangeFlag = ev => {
    ev.stopPropagation();
    /*
      전달 받은 changeFlag와 bucketItem을 잘 살펴봐야한다
      bucketItem : 바로 위(BucketItem)에서 전달받은 state형 변수이고
      changeFlag : Main에서 여기까지 전달받은 handler method

      분해를 할 때 주체가 누구인지를 명확히 구별해야한다
      bucketItem은 this.props로부터
      changeFlag는 this.context로부터 분리를 해야한다
    */
    const { bucketItem } = this.props;
    const { changeFlag } = this.context;

    changeFlag(bucketItem.b_id);
  };

  onComplete = ev => {
    ev.stopPropagation();
    const { bucket_complete } = this.context;
    const { b_id, b_end_date, b_cancel } = this.props.bucketItem;
    if (b_cancel) {
      alert("취소된 버킷은 완료할 수 없습니다");
      return false;
    }
    if (b_end_date === "") {
      if (!window.confirm("꿈을 이뤘는가?")) {
        return false;
      }
    } else {
      if (!window.confirm("다시 시작할까요?")) {
        return false;
      }
    }
    bucket_complete(b_id, b_end_date);
  };

  toggleCancel = () => {
    if (this.props.bucketItem.b_end_date !== "") {
      alert("완료된 버킷은 취소할 수 없습니다");
      return false;
    }
    if (window.confirm("버킷을 취소하겠습니까>")) {
      this.context.toggleCancel(this.props.bucketItem.b_id);
    }
  };

  render() {
    const { bucketItem } = this.props;
    const td_style = {
      cursor: "pointer"
    };
    const td_through = {
      cursor: "pointer",
      textDecorationLine: "Line-through",
      textDecorationStyle: "wavy",
      textDecorationColor: "red",
      fontWeight: "bold",
      color: "blue"
    };

    return (
      <React.Fragment>
        <td style={td_style} onClick={this.handleChangeFlag}>
          {bucketItem.b_flag_text}
        </td>
        <td onClick={this.noChangeEdit}>
          {bucketItem.b_id}.
          <Moment format="YYYY-MM-DD">{bucketItem.b_start_date}</Moment>
        </td>
        <td
          style={bucketItem.b_end_date !== "" ? td_through : td_style}
          onClick={this.changeEdit}
        >
          {bucketItem.b_title}
        </td>
        <td style={td_style} onClick={this.onComplete}>
          {/* 
     react에서 조건 별로 tag를 표시하고자 할 때
     {검사값 ? (true 일때) : (false)}
   */}
          {bucketItem.b_end_date !== "" ? (
            <Moment format="YYYY-MM-DD">{bucketItem.b_end_date}</Moment>
          ) : (
            "◎"
          )}
        </td>
        <td onClick={this.noChangeEdit}>
          <input
            onClick={this.toggleCancel}
            type="checkbox"
            checked={bucketItem.b_cancel}
          />
        </td>
      </React.Fragment>
    );
  }
}

export default BucketItemView;
