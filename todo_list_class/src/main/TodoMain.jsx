import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoMain.css";

/*
    함수형 컴퍼넌트
    화살표 함수 형으로 코드가 시작되고
    render() 함수가 없고 바로 return()
*/
const TodoMain = ({
  input,
  todoList,
  onCreate,
  onChange,
  onKeyPress,
  onToggle
}) => {
  return (
    <main className="todoTemplate">
      <div className="title">할일</div>
      <div className="form-controller">
        <TodoForm
          value={input}
          onCreate={onCreate}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onToggle={onToggle}
        />
      </div>
      <div className="todoList-controller">
        <TodoList todoList={todoList} onToggle={onToggle} />
      </div>
    </main>
  );
};

export default TodoMain;
