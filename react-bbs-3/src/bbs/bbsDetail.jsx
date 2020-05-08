import React, { Component } from "react";
import axios from "axios";

class bbsDetail extends Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  state = {
    bbsVO: {},
  };

  // 서버에게 bbsid값을 전달하고
  // bbs detail 정보를 가져와서
  // 나에게 전달
  bbsDetailFetch = () => {
    const bbsid = this.props.match.params.bbsid;
    fetch("http://localhost:8080/bbs/api/detail?bbsid=" + bbsid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          bbsDate: result.bbsDate,
          bbsAuth: result.bbsAuth,
          bbsTitle: result.bbsTitle,
          bbsText: result.bbsText,

          bbsVO: result,
        });
      });
  };

  handlerDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      const bbsid = this.props.match.params.bbsid;
      fetch("http://localhost:8080/bbs/api/delete/" + bbsid)
        .then(this.props.history.push("/"))
        .catch((error) => alert(error));
    }
  };

  handlerUpdate = (e) => {
    const bbsid = this.props.match.params.bbsid;
    this.props.history.push("/bbsWrite/" + bbsid);
  };

  componentDidMount() {
    this.bbsDetailFetch();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const bbsid = this.props.match.params.bbsid;
    const { bbsVO } = this.state;
    const cursorStyle = {
      cursor: "pointer",
    };
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-header">{bbsVO.bbsTitle}</h3>
          <div className="d-flex justify-content-around mt-3">
            <p>작성일자 : {bbsVO.bbsDate}</p>
            <p>작성자 : {bbsVO.bbsAuth}</p>
          </div>

          <div className="card-body">
            <p> {bbsVO.bbsText}</p>
          </div>
          <div>
            <button
              className="w3-button w3-green w3-hover-teal w3-right"
              onClick={(e) => {
                this.props.history.push("/");
              }}
            >
              목록
            </button>
            <button
              className="w3-button w3-green w3-hover-teal w3-right"
              onClick={this.handlerUpdate}
            >
              수정
            </button>
            <button
              className="w3-button w3-green w3-hover-teal w3-right"
              onClick={this.handlerDelete}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default bbsDetail;
