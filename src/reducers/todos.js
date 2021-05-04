const todos = (state = [] , action ) =>{
    switch (action.type) {
        //ADD NEW TASK
        case 'ADD_TODO':

            return [action.payload].concat(state)
        //DELETE TASK
        case 'DELETE_TODO':

            return state.filter( item => item.ID !== action.ID)
        //UPDATE TASK
        case 'COMPLETE_TASK':
            //GETTING INDEX TO MARK COMPLETE IN GIVEN TODO
            const index = state.findIndex( item => item.ID === action.ID)
            //CLOANING STATE ARRAY TO ANOTHER ARRAY
            const newArray = [...state]
            //CHANGING VALUE OF GIVEN TODO'S 
            newArray[index].completed = true
            return newArray
    
        default:
            return state;
    }
}

export default todos