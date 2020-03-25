import React, { useContext } from "react";
import MProvider from "../provider/Messageprovider";

const ProFunction = () => {
  const messContext = useContext(MProvider);
  return (
    <div>
      <p>나는 함수 컴퍼넌트</p>
      <p>{messContext.message}</p>
    </div>
  );
};

export default ProFunction;
