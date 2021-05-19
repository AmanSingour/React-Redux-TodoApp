import React from 'react';
import Todo from '../../components/Todo/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../actions/deleteTodo';
import { completeTask } from '../../actions/completeTask';
import { 
    Container, 
    Snackbar 
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import StackGrid, { easings, transitions } from 'react-stack-grid';

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
                time={data.date + " " + data.time} 
                bgColor={data.bgcolor}
                completed={data.completed}
                onDelete={() => onDelete(data.ID)}
                onComplete={() => dispatch(completeTask(data.ID))}
            />
        )

    return(

        <Container  maxWidth="lg" style={{marginBottom:'10%'}}>
            {todoList.length>0 ?
            <StackGrid 
                columnWidth={280}
                duration={600}
                gutterWidth={15}
                gutterHeight={15}  
                easing={easings.cubicOut}
                appearDelay={3}
                appear={transitions.appear}
                appeared={transitions.appeared}
                enter={transitions.enter}
                entered={transitions.entered}
                leaved={transitions.leaved}  
            >{TodoList} 
            </StackGrid>
            :
                <span style={{width:'70%', textAlign:'center', margin: '0 auto'}}>Yay! No Todo</span>
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