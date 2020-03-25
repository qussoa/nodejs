import React, { createContext } from "react";

// Main에서 하위 컴퍼넌트에게 전달할
// 변수와 메서드들을 포함하는 Provider를 선언
const MessageProvider = createContext({
  message: "",
  changemessage: mess => {}
});

export default MessageProvider;
