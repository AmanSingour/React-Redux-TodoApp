import React from 'react';
import style from './ShowTodo.module.css';
import Todo from '../Todo/Todo';

const ShowTodo = () =>{
    
    //GET DATA FROM STORE
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

    const onDelete = (e, key) =>{
        list = list.filter((data, index) => {if(index!==key)  data})
    }

    return(

        <div className={style.showTodo}>
        {list.map((data, index) => 
            {
                return(
                        <Todo 
                            key={index}
                            task={data.task} 
                            time={data.time} 
                            onDelete={(e, key) => onDelete(e, key)} 
                        />
            )})}
        </div>
    )

}

export default ShowTodo