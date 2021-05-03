var id = 0
export const addTodo = (task) =>{   
    var today = new Date() 
    return({
        type: "ADD_TODO",
        payload: {
            ID: ++id,
            task: task,
            completed: false,
            time: today.toLocaleTimeString('en-US', {hour12 : true, hour: '2-digit', minute: '2-digit'}),
            date: today.toLocaleDateString()
        }
    })
}