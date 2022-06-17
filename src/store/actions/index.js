import { ADD, EDIT, DELETE, UPDATE, DELETE_TASK, EDIT_TASK } from "../constants"
export const addTodo = (taskType, task) => {
    // console.log("ACTION==>",taskType, " ", task);
    return {
        type: ADD,
        taskType,
        task,
    };
}
export const editTodo = (title) => {
    return {
        type: EDIT,
        title
    }

}
export const deleteTodo = (title) => {
    return {
        type: DELETE,
        title
    }

}
export const updateTodo = (title) => {
    return {
        type: UPDATE,
        title
    }

}
export const deleteTask = (title, index) => {
    return {
        type: DELETE_TASK,
        title,
        index
    }

}
export const editTask = (title, index, eTask) => {
    return {
        type: EDIT_TASK,
        title,
        index,
        eTask
    }
}
