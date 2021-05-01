import React from 'react';
import style from './Todo.module.css';

const Todo = props =>{

    const deleteTask = (e, key) =>{
        props.onDelete(e, key)
    }

    return(
        <div className={style.todo}>
            <span>{props.task}</span>
            <span>{props.time}</span>
            <button onClick={(e) => deleteTask(e, props.key)}>Delete</button>
            <button>Complete</button>
        </div>
    )
}

export default Todo