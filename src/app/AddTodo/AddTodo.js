import React from 'react';
import {  addTodo  } from '../../actions/addTodo'
import { useDispatch } from 'react-redux';
import {Alert} from '@material-ui/lab';
import { Button, Container, makeStyles, Snackbar, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import {InputField} from '../../components';

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

    //FOR ALERT SUCCESS
    const [success, setSuccess] = React.useState(false)

    //Error
    const [error, setError] = React.useState('')

    //HANDLING ADD TASK 
    const handleOnSubmit = (task) =>{
        try{
            dispatch(addTodo(task))
            setSuccess(true)
            return true
        }catch(err){
            setError(err)
            return false
        }
    }
    
    //ALERT CLOSE HANDLE
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setError('')
        setSuccess(false);
      };

    return(
        <Container component="form" >

            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal:'center' }} open={true}>   
                <InputField onSubmit={(task) => handleOnSubmit(task)} />
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={success} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Task Added Successfully!
                </Alert>
            </Snackbar>

            <Snackbar anchorOrigin={{ vertical: 'top', horizontal:'center' }} open={isNaN(error)} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            
        </Container>
    )
}

export default AddTodo;