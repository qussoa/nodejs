import React from "react";
import axios from "axios";

class bbsWrite extends React.Component {
  state = {
    bbsDate: "",
    bbsAuth: "",
    bbsTitle: "",
    bbsText: "",
  };

  /*
  axios를 사용하여 서버로 데이터를 전송
  */
  bbsInsert = () => {
    let formData = new FormData();
    formData.append("bbsDate", this.state.bbsDate);
    formData.append("bbsAuth", this.state.bbsAuth);
    formData.append("bbsTitle", this.state.bbsTitle);
    formData.append("bbsText", this.state.bbsText);

    axios
      .post("http://localhost:8080/bbs/api/insert", formData)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label className="form-group">작성일자</label>
          <input
            value={this.state.bbsDate}
            name="bbsDate"
            type="date"
            className="form-control"
            placeholder="날짜를 입력"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label className="form-group">작성자</label>
          <input
            value={this.statebbsAuth}
            name="bbsAuth"
            className="form-control"
            placeholder="작성자를 입력"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label className="form-group">제목</label>
          <input
            value={this.state.bbsTitle}
            name="bbsTitle"
            className="form-control"
            placeholder="제목을 입력"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <textarea
            row="5"
            className="form-control"
            value={this.state.bbsText}
            name="bbsText"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="button-group text-right mt-3">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.bbsInsert}
          >
            저장
          </button>
        </div>
      </div>
    );
  }
}
export default bbsWrite;
