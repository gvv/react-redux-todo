import {UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED} from '../actions/actionTypes';

const INITIAL_STATE = {
    value: "",
    todos: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload
            }
        case SAVE_TODO:
            return state.value
            ? {
                ...state,
                value: '',
                todos: [...state.todos, {value: state.value, completed: false}]
            }
            : state;
            // if (state.value.trim()) {
            //     return {
            //         ...state,
            //         value: '',
            //         todos: [...state.todos, {value: state.value, completed: false}]
            //     }
            // } else {
            //     return state
            // }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_,i) => action.payload !== i)};
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                action.payload === i ? {...todo, completed: !todo.completed } : todo
               )
            };
        default:
            return state;
    }
}