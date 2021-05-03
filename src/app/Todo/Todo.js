import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import CompleteIcon from '@material-ui/icons/CheckCircleRounded';
import React from 'react';
import style from './Todo.module.css';

const Todo = props =>{

    const onDelete = (e, key) =>{
        props.onDelete(e, key)
    }

    const onComplete = (e, key) =>{
        props.onComplete(e, key)
    }

    return(
        <div className={style.todo}>
            <span>{props.task}</span>
            <span>{props.time}</span>
            <IconButton 
                color="secondary" 
                aria-label="delete"
                onClick={(e) => onDelete(e)}
            >
                <DeleteIcon />
            </IconButton>
            {!props.completed ?
                <IconButton 
                    aria-label="complete"
                    onClick={(e) => onComplete(e)}
                >
                    <CheckIcon />
                </IconButton> 
            :
                <IconButton 
                    aria-label="complete"
                >
                    <CompleteIcon />
                </IconButton>
            }
        </div>
    )
}

export default Todo