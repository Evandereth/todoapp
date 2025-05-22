import React, {useState} from "react";
import './App.css'
import Card from './components/Card'
import TodoForm from './components/TodoForm'

function App() {
  const [todo, setTodo] = useState([])

  //we will create a function to help us delete each todoItem

  function deleteTodo(todoIndex){
    const newTodo = todo.filter((todo, index) => index !== todoIndex)
    setTodo(newTodo)
  }
  return (
    <>
      <main>
        <div className="heading">
          <TodoForm showTodo={setTodo}/>
        </div>
        <div className="body">
          <Card title="Todo" items={todo} status="todo" handleDelete={deleteTodo}/>
          <Card title="Ongoing" items={todo} status="ongoing" handleDelete={deleteTodo}/>
          <Card title="Completed" items={todo} status="completed" handleDelete={deleteTodo}/>
        </div>
      </main>
    </>
  )
}

export default App
