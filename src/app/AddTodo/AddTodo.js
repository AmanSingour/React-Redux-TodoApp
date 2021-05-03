import React from 'react';
import style from './AddTodo.module.css'
import {  addTodo  } from '../../actions/addTodo'
import { useDispatch } from 'react-redux';
import {Alert} from '@material-ui/lab';
import { Button, makeStyles, Snackbar } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

//AddTodo() METHOD IS DEFINED TO ADD NEW TASK IN TODO LIST;
const AddTodo = () =>{
    //MATERIAL UI CLASSES
    const classes = useStyles();

    //GET DISPATCH METHOD
    const dispatch = useDispatch()

    //task STATE TO GET NEW TASK THIS WILL UPDATE ON STORE;
    const [ task, setTask ] = React.useState('')  

    //isValid STATE IS USED TO VALIDATE INPUT TASK;
    //ENABLE [Add Task] BUTTON;
    const [ isValid, setValid ] = React.useState(true)

    //FOR ALERT SUCCESS
    const [success, setSuccess] = React.useState(false)

    //HERE VALIDATE THE INPUT ENTERED IN INPUT FIELD;
    //UPDATE BOTH STATES;
    const validate = (event) =>{

        //GETTING VALUE OF INPUT FIELD;
        const value = event.target.value;
        //IF VALUE IS NOT EMPTY -> SET isValid STATE FALSE;
        if( isNaN(value) || value !== ''){
            setValid(false)
        }else setValid(true)
        //UPDATING TASK STATE;
        setTask(value)

    }

    const handleClick = (task) =>{
        dispatch(addTodo(task))
        setTask('')
        setValid(true)
        setSuccess(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSuccess(false);
      };

    return(
        <form className={style.addTask}>
            <input 
                className={style.inputBox} 
                type="text" 
                placeholder="What you wanna do?"
                onChange={(e) => validate(e)}
                value={task}
            />
            <Button
                type='submit'
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<Add />}
                disabled={isValid}
                onClick={(e) => handleClick(task)}//CALL DISPATCH METHOD
            >Add</Button>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={success} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Task Added Successfully!
                </Alert>
            </Snackbar>
        </form>
    )
}

export default AddTodo;