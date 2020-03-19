import React from "react";

/*
bbsList를 매개변수로 받아서
<li>BBS1</li>
<li>BBS2</li>
<li>BBS3</li>
<li>BBS4</li>

*/
const BBsList = ({ bbsList }) => {
  const bbsMap = bbsList.map(bbs => {
    return (
      <tr key={bbs._id}>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>{bbs.b_title}</td>
      </tr>
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <tr>
        <th>날짜</th>
        <th>시간</th>
        <th>제목</th>
      </tr>
      {bbsMap}
    </table>
  );
};

export default BBsList;
