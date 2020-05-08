import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/**
 *  표현할 데이터가 List 형태일때
 * List의 한줄(한 요소)를 표현하는 구조로 생성
 */
class bbsItem extends Component {
  handleDetailView = (e, data) => {
    this.props.history.push("/bbsDetail/" + data);
  };

  render() {
    const { bbsVO } = this.props;
    const titleStyle = {
      cursor: "pointer",
    };
    return (
      <tr key={bbsVO.id}>
        <td>{bbsVO.bbsDate}</td>
        <td>{bbsVO.bbsAuth}</td>
        <td
          onClick={(e) => this.handleDetailView(e, bbsVO.id)}
          style={titleStyle}
        >
          {bbsVO.bbsTitle}
        </td>
      </tr>
    );
  }
}

/*
  현재 이(bbsItem) 컴퍼넌트는
  Router의 1대 자손이 아닐때
  this.props.history 객체를 
  직접 전달받지 못한다

  1 대 자손이 아닌 컴퍼넌트에서
  this.props.history 객체를 사용하기 위해서는
  객체를 withRouter() method로 mapping을 해야한다
 */
export default withRouter(bbsItem);
/*
   이벤트 핸들러 등록방식
     1. 이벤트 핸들러로 사용할 함수를 선언
        handlerEvent = (매개변수)=> {코드}
     2. 이벤트 핸들러 등록
        onClick={handlerEvent}
        핸들러 이벤트를 등록할 때는 함수를 객체 타입으로
        바꾸어서 등록
        = 함수 이름에서 괄호를 반드시 제거하고 등록
        만약 이벤트 핸들러를 함수 타입
        = 함수()
        등록으로 하게 되면 
        각 컴퍼넌트가 랜더링되는 동안 이벤트 핸들러로 등록되는 것이 아닌
        함수를 호출하여 실행

        이벤트 핸들러에게 어떤 값을 전달하여 그 값을 핸들러
        코드 내에서 사용하고자 할때는 
        가상의 익명의 이벤트 핸들러를 등록하고 
        (e)=>{}
        이 익명 이벤트 핸들러에서 함수를 호출하도록 
        코드를 작성해주어야 한다
        (e)=> {함수(e, 매개변수)}

        이렇게 등록을 하면
        rendering 하는 동안
        (e)=>{}의 형식 이벤트만 바라보고
        이벤트 핸들러로 등록하며
        내부에 작성된 코드는 모두 무시된다

        비로소 모든 rendering이 끝나고 
        이벤트 실행을 하게되면 
        이벤트 핸들러가 자신이 포함하고 있는
        함수를 호출하여 원하는 코드를 실행하게 된다
 */
