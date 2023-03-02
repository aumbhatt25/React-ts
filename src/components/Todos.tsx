import React from "react";
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todoContext';
import Todo from "../models/todo";
import { useContext } from "react";

// const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
//     return (
//         <>
//         <ul>
//             {props.items.map((item) => (
//                 // <li>{item}</li>
//                 <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />
//             ))}
//         </ul></>
//     )
// }


const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
  
    return (
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    );
  };

export default Todos;