var id = 0

const classNameHolder = [
    "#fffbdf",
    "#c6ffc1",
    "#caf7e3",
    "#edffec",
    "#f6dfeb",
    "#e4fbff",
    "#d3f6f3",
    "#ffcb91",
    "#ffefa1",
    "#f4f9f9",
    "#f1d1d0",
    "#ffeebb",
    "#dbe9b7",
    "#defcfc",
    "#ffe6eb",
    "#f3f8ff"
]

export const addTodo = (task) =>{  
    var today = new Date() 
    var bgColor = classNameHolder[Math.floor(Math.random() * classNameHolder.length)]
    return({
        type: "ADD_TODO",
        payload: {
            ID: ++id,
            task: task,
            completed: false,
            time: today.toLocaleTimeString('en-US', {hour12 : true, hour: '2-digit', minute: '2-digit'}),
            date: today.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}),
            bgcolor: bgColor,
        }
    })
}