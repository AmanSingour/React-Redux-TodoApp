import React from 'react';
import style from './ShowTodo.module.css';
import Todo from '../Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../actions/deleteTodo';

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
    
    const todoList = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const TodoList = todoList.map((data, index) => 
            <Todo 
                key={index}
                task={data.task} 
                time={data.ID} 
                onDelete={() => dispatch(deleteTodo(data.ID))}
            />
        )

    return(

        <div className={style.showTodo}>
            {console.log(todoList)}
            {TodoList}
        </div>
    )

}

export default ShowTodo