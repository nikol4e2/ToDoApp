import { useEffect, useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";


function App() {
 

  const [todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits'
  ]);

  function handleAddTodos(newTodo){
    const newTodoList=[...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <div className="App">
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
