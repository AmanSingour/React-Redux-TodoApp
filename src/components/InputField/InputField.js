import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Divider,
    Grow,
    IconButton,
    InputBase,
    Paper,
    Tooltip,
    Zoom,
}from '@material-ui/core';
import ClearIcon from '@material-ui/icons/ClearRounded';
import AddIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    borderColor: "#945fe2",
    border: '1px solid',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const InputField = (props) =>{

  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true)
  }, [checked])

  const classes = useStyles();

  //task STATE TO GET NEW TASK THIS WILL UPDATE ON STORE;
  const [ task, setTask ] = React.useState('')  

  //isValid STATE IS USED TO VALIDATE INPUT TASK;
  //ENABLE [Add Task] BUTTON; and [CLEAR BUTTON]
  const [ isValid, setValid ] = React.useState(false)

  //Handling onChange 
  //HERE VALIDATE THE INPUT ENTERED IN INPUT FIELD;
  //UPDATE BOTH STATES;
  const validate = (event) =>{
    //GETTING VALUE OF INPUT FIELD;
    const value = event.target.value;
    //IF VALUE IS NOT EMPTY -> SET isValid STATE FALSE;
    var regex = /^\s*$/

    if(isNaN(value) && value !== '' && value.match(regex)==null){
        setValid(true)
    }else setValid(false)
    //UPDATING TASK STATE;
    setTask(value)
  }

  const handleClear = () =>{
    setTask('')
    setValid(false)
  }

  const handleSubmit = (e,task) =>{
    setValid(false)
    const isSuccess = props.onSubmit(task)
    if(isSuccess){
      setTask('')
    }else setValid(true)
    e.preventDefault()
  }


  return (

    <Grow
        in={checked}
        style={{ transformOrigin: '0 0 0' }}
        {...(checked ? { timeout: 1000 } : {})}
      >
    <Paper  elevation={3}  className={classes.root}>
      <InputBase
        type="text"
        id="task-input" 
        label="Add New Task" 
        className={classes.input}
        placeholder="Add New Task"
        inputProps={{ 'aria-label': 'add new task' }}
        onChange={(e) => validate(e)}
        value={task}
      />
      {isValid ?
      <Tooltip TransitionComponent={Zoom} title="Clear" aria-label="clear" arrow>
        <IconButton onClick={(e) => handleClear()} className={classes.iconButton} aria-label="clear">
          <ClearIcon />
        </IconButton>
      </Tooltip>
      : '' }
      <Divider className={classes.divider} orientation="vertical" />
      <Tooltip TransitionComponent={Zoom} title="Add Task" aria-label="add" arrow>
        <IconButton 
          type="submit"
          color="primary" 
          className={classes.iconButton} 
          aria-label="add"
          disabled={!isValid}
          onClick={(e) => handleSubmit(e,task)}//CALL DISPATCH METHOD  
        >
          <AddIcon fontSize="large"/>
        </IconButton>
      </Tooltip>
    </Paper>
    </Grow>
  );
  }

  export default InputField