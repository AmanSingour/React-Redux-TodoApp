import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './actions/addTodo'
import AddTodo from './app/AddTodo/AddTodo'
import ShowTodo from './app/ShowTodo/ShowTodo'
import styles from './App.css'

var list = [
  {
      task: "Learn about Polymer",
  },
  {
      task: "Watch Pluralsight course on Docker",
  },
  {
      task: "Office Meeting",
  },
  {
      task:  "Complete presentation prep for Aurelia presentation",
  },
  {
      task: "Instrument creation of development environment with Puppet",
  },
  {
      task: "Transition code base to ES6",
  },
  {
      task: "Clean room",
  },
  {
      task: "Get storage unit",
  },
  {
      task:  "Analysis",
  },

]

const App = () =>{

  const dispatch = useDispatch()

  React.useEffect(() => {
    list.map((data) =>{
      dispatch(addTodo(data.task))
    })
  }, [list])

  return(
    <div className={styles.App}>
      <h1>Todos</h1>
      <AddTodo />
      <ShowTodo />
    </div>
  )
}

export default App