import React, { Component } from "react";
import BucketInsert from "../main/BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  id = 0;
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_flag_text: "☆",
        b_start_date: "2020-03-26",
        b_title: "리엑트 정복",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false
      }
    ]
  };

  // 17 이후는 사용불가
  // componentWillMount
  // 매우 불안정하고 무한 루프에 빠지기 쉽다

  // 현재 컴퍼넌트가 모두 연결되고 화면에 나타난 직후
  // rendering 직전
  componentDidMount() {
    const strBucketList = localStorage.bucketList;
    // 문자열, 객체일 경우 if 조건에서 없으면 false, 있으면 true
    if (strBucketList) {
      this.setState({
        bucketList: JSON.parse(strBucketList)
      });
      this.id = this.state.bucketList.length + 1;
    }
  }
  // 화면에 rendering 끝나고
  // 데이터가 변경되어 다시 렌더링이 되려고 할때
  componentDidUpdate(preProps, preState) {
    // 객체를 통채로 문자열로 변경
    const preSring = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);
    // webbrowser 내장 db에 문자열 저장 이때 key : bucketList
    if (preSring !== thisString) {
      localStorage.bucketList = thisString;
    }
  }

  changeFlag = id => {
    //const b_flag = ["☆", "★", "○", "●"];
    const b_flag = ["아직", "보통", "중요", "아주중요"];
    this.setState({
      bucketList: this.state.bucketList.map(bucket => {
        if (bucket.b_id === id) {
          let flag = ++bucket.b_flag % 4;
          let flagText = b_flag[flag];
          return {
            ...bucket,
            b_flag_text: flagText,
            b_flag: flag
          };
        } else {
          return bucket;
        }
      })
    });
  };

  flagClick = () => {
    //   this.setState({
    //   bucketList.b_flag : ++this.bucketList.b_flag
    //   })
  };

  /* 
  bucketList에 항목을 추가하여 
  전체 컴퍼넌트에 전파될 수 있도록
   메서드를 선언

   react 선언적 철학1
   기존의 객체(배열)은 원본을 손상시키지 말자
   => 아래와 같이 구현 ㄴㄴ
   객체 배열에 새로운 항목을 추가 : push(),
   객체 배열에 항목을 제거 : remove(),
   객체배열의 요소 중에 어떤 항목 변경 할때 : 객체[0]= 새로운값

   새로운 객체를 만들고 
   추가 :  기존객체 + 추가된 항목 생성하여 새로운 객체 복사
   변경 : 기존객체 변경내용만 변경하여 새로운 객체 복사
  */
  bucket_add = b_title => {
    const { bucketList } = this.state;

    // 2020-03-26 날짜 문자열 생성
    const date = new Date();

    // b_id값은 버켓 리스트의 PK값을 갖는 칼럼으로
    // state에 지정된 id 값을 1증가 시킴으로서 생성을 하고
    // list에 b_id 칼럼을 값을 저장
    const bucket = {
      b_id: ++this.id,
      b_flag: 0,
      b_flag_text: "일반",
      b_start_date: date.toString(),
      b_title: b_title,
      b_end_date: date.toString(),
      b_end_check: false,
      b_cancle: false
    };

    this.setState({
      /**
       * id가 ++this.id
       * 나머지 요소가 bucket에서 정의한 형태의 객체를 생성하여
       * 원본의 bucketList에 추가해
       *
       */
      bucketList: bucketList.concat({ b_id: ++this.id, ...bucket })
    });
  };

  bucket_update = (id, b_title) => {
    const { bucketList } = this.state;
    this.setState({
      /*
    bucketList를 map으로 반복 실행하면서
    각요소의 id값과 매개변수로 받은 id값이 일치하면
    b_title만 새로운 ㄱ밧으로 변경하여 리턴
*/
      bucketList: bucketList.map(bucket =>
        bucket.b_id === id ? { ...bucket, b_title: b_title } : bucket
      )
    });
  };

  // react lifeCycle 메서드
  /*
    만약 현재 Main 컴퍼넌트에 많은 state 변수들이 있을때
    한개라도 state 변수가 변동되면 rendering이 발생을 할텐데

    그러지 말고
    state 변수중에서 bucketList만 감시하다가
    bucketList가 변경되었을때만 화면을 rendering을 하라
   */
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.bucketList !== this.state.b_title;
  }
  render() {
    return (
      <div>
        <BucketInsert bucket_add={this.bucket_add} />
        <BucketList
          bucket_update={this.bucket_update}
          bucketList={this.state.bucketList}
          changeFlag={this.changeFlag}
        />
      </div>
    );
  }
}

export default BucketMain;
