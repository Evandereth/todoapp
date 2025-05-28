import './App.css'
import TodoDetails from './components/TodoDetails'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <>
      <section>
        <h1>Todo Application</h1>
        <div className="header">
          <TodoForm />
        </div>

        <div className="main">
          <TodoDetails />
        </div>
      </section>  
    </>
  )
  
}

export default App
