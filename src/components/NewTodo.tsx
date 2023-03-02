import { useRef } from "react";
import { TodosContext } from '../store/todoContext';
import React from "react";
import { useContext } from "react";

// const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
//     const todoTextInputRef = useRef<HTMLInputElement>(null);
//     const submitHandler = (event: React.FormEvent) => {
//         event.preventDefault();

//         const enteredText = todoTextInputRef.current!.value;

//         if(enteredText.trim().length === 0){
//             return;
//         }
//         props.onAddTodo(enteredText);
//     };

//     return (
//         <form onSubmit={submitHandler}>
//             Click on the list items to delete them.<br/><br/>
//             <label htmlFor="text">Todo text</label>
//             <input type='text' id='text' ref={todoTextInputRef} />
//             <button>Add Todo</button>
//         </form>
//     );
// };


const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
  
    const todoTextInputRef = useRef<HTMLInputElement>(null);
  
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
  
      const enteredText = todoTextInputRef.current!.value;
  
      if (enteredText.trim().length === 0) {
        // throw an error
        return;
      }
  
      todosCtx.addTodo(enteredText);
    };
  
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
    );
  };

export default NewTodo;