import React from "react";
import Qs from "query-string";
/*
    match props 변수 사용
    Router의 path : 변수명 형식을 만들어 두고
    path/변수값 형식으로 요청을 하면 
    변수값이 :변수명에 저장되어 Router로 보내진다

    Route component에서는 match를 매개변수로 받고
    match.params.변수명 형식으로 문자열을 추출할 수 있다

    ?변수=변수명 형식으로 요청을 하면 
    location.search props 변수에 ?부터 문자열형식으로
    통째로 담겨서 전달된다

    query-string 라이브러리 parse()의 도움을 받아
    query 객체로 변환을 시켜준다
    parsing된 객체는 query.변수명 형식으로 값을 추출할 수 있다
*/
const bbs = ({ location, match }) => {
  const query = Qs.parse(location.search);
  return (
    <div>
      <h3>여기는 BBs 화면</h3>
      <p>match params 문자열 : {match.params.name}</p>
      <p>location 문자열 : {location.search}</p>
      <p>details? : {query.details}</p>
    </div>
  );
};

export default bbs;
