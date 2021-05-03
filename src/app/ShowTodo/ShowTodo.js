import React from 'react';
import style from './ShowTodo.module.css';
import Todo from '../Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../actions/deleteTodo';
import { completeTask } from '../../actions/completeTask';
import { Container, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

var list = [
    {
        task: "Wake Up",
        date: "01/05/2021",
        time: "9:00 AM"
    },
    {
        task: "Take a Bath",
        date: "30/04/2021",
        time: "8:00 AM"
    },
    {
        task: "Office Meeting",
        date: "02/05/2021",
        time: "10:00 AM"
    },
]

const ShowTodo = () =>{
    
    //GETTING TODOS FROM STORE
    const todoList = useSelector(state => state.todos)

    //STATE FOR ALERT SUCCESS
    const [success, setSuccess] = React.useState(false)

    const dispatch = useDispatch()

    //DELETE TODO METHOD
    const onDelete = (ID) =>{
        dispatch(deleteTodo(ID))
        setSuccess(true)
    }

    //ALERT CLOSING METHOD
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return
        }
    
        setSuccess(false)
      }

    const TodoList = todoList.map((data, index) => 
            <Todo 
                key={index}
                task={data.task} 
                time={data.time + " " + data.date} 
                completed={data.completed}
                onDelete={() => onDelete(data.ID)}
                onComplete={() => dispatch(completeTask(data.ID))}
            />
        )

    return(

        <Container maxWidth="sm" className={style.showTodo}>
            {todoList.length>0 ? TodoList :
                <span>Yay! No Todo</span>
            }

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={success} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                    Task Successfully Deleted!
                </Alert>
            </Snackbar>
        </Container>
    )

}

export default ShowTodo