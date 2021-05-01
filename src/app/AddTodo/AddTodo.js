import React from 'react';
import style from './AddTodo.module.css'

//AddTodo() METHOD IS DEFINED TO ADD NEW TASK IN TODO LIST;
const AddTodo = () =>{

    //task STATE TO GET NEW TASK THIS WILL UPDATE ON STORE;
    const [ task, setTask ] = React.useState('')  

    //isValid STATE IS USED TO VALIDATE INPUT TASK;
    //ENABLE [Add Task] BUTTON;
    const [ isValid, setValid ] = React.useState(true)

    //HERE VALIDATE THE INPUT ENTERED IN INPUT FIELD;
    //UPDATE BOTH STATES;
    const validate = (event) =>{

        //GETTING VALUE OF INPUT FIELD;
        const value = event.target.value;
        //IF VALUE IS NOT EMPTY -> SET isValid STATE FALSE;
        if( !isNaN(value) || value !== ''){
            setValid(false)
        }else setValid(true)
        //UPDATING TASK STATE;
        setTask(value)

    }

    return(
        <div className={style.addTask}>
            <input 
                className={style.inputBox} 
                type="text" 
                placeholder="What you wanna do?"
                onChange={(e) => validate(e)}
            />
            <button 
                className={style.addButton}
                disabled={isValid}
                onClick={() => console.log(task)}//CALL DISPATCH METHOD
            >
            Add Task
            </button>
        </div>
    )
}

export default AddTodo;