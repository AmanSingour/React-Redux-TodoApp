import React from 'react'
import AddTodo from './app/AddTodo/AddTodo'
import ShowTodo from './app/ShowTodo/ShowTodo'

const App = () =>{
  return(
    <div>
      <h1>Todos</h1>
      <AddTodo />
      <ShowTodo />
    </div>
  )
}

export default App