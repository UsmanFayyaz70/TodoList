import randomColor from "randomcolor";
import { ADD, EDIT, DELETE, UPDATE, DELETE_TASK, EDIT_TASK } from "../constants"
const initialState = {
    todos: [],
    taskTypes: [],
    color: [],
    editIndex: null,
    editTitle: ""
}
let index;
const todoList = (state = initialState, action) => {
    switch (action.type) {

        //-----------------------Add new Task Title and Task-----------------------

        case ADD: {
            var color = randomColor();
            action.taskType.length > 20
                ? alert("Task Type should be less than 20 characters")
                : action.taskType.trim() === ""
                    ? alert("Please Input Task Type")
                    : index = state.todos.findIndex(item => item[action.taskType])
            state.todos[index][action.taskType].push(action.task);
            state.color.push(color);
            !state.taskTypes.includes(action.taskType) && state.taskTypes.push(action.taskType);
            index = null;

            return { ...state };
        }

        //-----------------------Edit Task Title-----------------------

        case EDIT: {
            state.editIndex = state.todos.findIndex(item => item[action.title]);
            state.editTitle = action.title;
            return { ...state };
        }

        //-----------------------Delete All Tasks with Task Title-----------------------

        case DELETE: {
            index = state.todos.findIndex(item => item[action.title]);
            state.todos.splice(index, 1);
            state.color.splice(index, 1);
            const delArr = state.taskTypes.filter((e) => { return e !== action.title });
            state = {
                ...state,
                taskTypes: delArr
            }
            index = null;
            return state;
        }

        //-----------------------Update Task Title-----------------------

        case UPDATE: {
            if (!action.title.trim().length) {
                break;
            } else if (action.title.length > 20) {
                alert("Type too long");
                break;
            }
            index = state.taskTypes.findIndex((item) => item === state.editTitle);
            state.taskTypes.splice(index, 1)
            state.taskTypes.splice(index, 0, action.title);
            state.todos[state.editIndex] = {
                [action.title]: state.todos[state.editIndex][state.editTitle]
            }
            state.editIndex = null;
            state.editTitle = "";
            return { ...state };
        }

        //-----------------------Delete a certain task-----------------------

        case DELETE_TASK: {
            let indexTitle = state.todos.findIndex(item => item[action.title]);
            state.todos[indexTitle][action.title].splice(action.index, 1);
            return { ...state };
        }

        //-----------------------Update a certain task-----------------------

        case EDIT_TASK: {
            let indexTitle = state.todos.findIndex(item => item[action.title]);
            state.todos[indexTitle][action.title][action.index] = action.eTask;
            return state;
        }

        default: {
            return state;
        }
    }
}
export default todoList;
