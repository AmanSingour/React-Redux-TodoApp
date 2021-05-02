export const todos = (state= [], action ) =>{
    switch (action.type) {
        case 'ADD_TODO':

            return state.concat([action.payload])
        
        case 'DELETE_TODO':
                        
            return state.splice(action.ID, 1)  
    
        default:
            return state;
    }
}