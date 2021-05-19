import React, {Suspense} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './actions/addTodo'
import AddTodo from './app/AddTodo/AddTodo'
import styles from './App.css'
const ShowTodo = React.lazy(() => import('./app/ShowTodo/ShowTodo'))


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
      <div className={styles.center}>
        <div className={styles.fixed}>
          <h1>Todos</h1>
          <AddTodo />
        </div>
        <Suspense fallback={<div>Loading...</div>}> 
          <ShowTodo />
        </Suspense>
      </div>
    </div>
  )
}

export default App