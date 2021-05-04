import { 
    Button,
    Card, 
    CardActions, 
    CardHeader,
    makeStyles, 
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import CompleteIcon from '@material-ui/icons/CheckCircleRounded';
import React from 'react';
import style from './Todo.module.css';

const useStyles = makeStyles((themes) =>({
    card:{
        minWidth: 300,
    }
}))

const Todo = props =>{

    const classes = useStyles()

    const onDelete = (e, key) =>{
        props.onDelete(e, key)
    }

    const onComplete = (e, key) =>{
        props.onComplete(e, key)
    }

    return(
        <Card variant="outlined" style={{background:props.bgColor}}>
            <CardHeader 
                title={props.task}
                subheader={props.time}
            />
            <CardActions>
                {!props.completed ?
                    <Button
                        size="small" color="primary" 
                        aria-label="complete"
                        onClick={(e) => onComplete(e)}
                    >
                        MARK AS COMPLETE
                    </Button> 
                :
                    <Button 
                        size="small" color="#00f"
                        aria-label="complete"
                    >
                        COMPLETED
                    </Button>
                }
                <Button 
                    size="small"
                    color="secondary" 
                    aria-label="delete"
                    onClick={(e) => onDelete(e)}
                >
                    DELETE
                </Button>
            </CardActions>
        </Card>
    )
}

export default Todo