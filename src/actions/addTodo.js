var id = 0
export const addTodo = (task) =>{   
    return({
        type: "ADD_TODO",
        payload: {
            ID: ++id,
            task: task
        }
    })
}