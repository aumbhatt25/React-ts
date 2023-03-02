import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';
import TodosContextProvider from './store/todoContext'

function App() {
    // const todos = [new Todo('Learn React'), new Todo('Learn javascript')];

    // const [todos, setTodos] = useState<Todo[]>([]);

    // const addTodoHandler = (todoText: string) => {
    //     const newTodo = new Todo(todoText);

    //     setTodos((prevTodos) => {
    //         return prevTodos.concat(newTodo);
    //     })
    // }

    // const removeTodoHandler = (todoId: string) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.id !== todoId);
    //     })
    // }

    return (
        <div className="App">
            {/* <Todos items={['Learn React', 'Learn Typescript']} /> */}
            {/* <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}

            <TodosContextProvider>
                <NewTodo />
                <Todos />
            </TodosContextProvider>
        </div>
    );
}

export default App;