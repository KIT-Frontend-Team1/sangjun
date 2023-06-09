import { useState } from "react";
import OneTodo from "./one-todo";
import { axiosInstance } from 'utils/axios';

const TodoList = ({todoList, setTodoList}) => {


    const updateTodo = async (id, editedContent) => {
        try {
          await axiosInstance.put(`todo/${id}`, { content: editedContent });
          const updatedTodoList = todoList.map((todo) => {
            if (todo.id === id) {
              return { ...todo, content: editedContent };
            }
            return todo;
          });
          setTodoList(updatedTodoList);
        } catch (error) {
          console.error(error);
        }
      };
    
      //function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환
      const deleteTodo = async id => {
        if (window.confirm('정말 삭제하시겠습니까')) {
          try {
            // await는 async 함수 안에서만 동작
            await axiosInstance.delete(`/todo/${id}`);
            const _todoList = todoList.filter(todo => todo.id !== id);
            setTodoList(_todoList);
          } catch (err) {
            console.error(err);
          }
        }
      };


    return (
        <>
            {todoList.map((todo) => (
                <OneTodo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
        </>
    );
};
export default TodoList;
