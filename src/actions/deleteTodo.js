export const deleteTodo = (id) => {
    return({
        type: "DELETE_TODO",
        ID: id
    })
}