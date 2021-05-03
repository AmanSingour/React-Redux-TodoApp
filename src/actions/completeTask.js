export const completeTask = (id) => {
    return({
        type: "COMPLETE_TASK",
        ID: id
    })
}