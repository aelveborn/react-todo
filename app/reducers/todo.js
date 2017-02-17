import {
    GET_TODOS
} from '../constants/action-types'

let todoState = {
    todos: {
        list: [{
            key: "1",
            text: "Hello world!",
            done: true,
        }]
    }
}

export default function reducer(state=todoState, action) {
    switch(action.type) {
        case types.GET_TODOS:
            return {
                ...state,
                todos: action.payload,
            }
        
        default: return {...state}
    }

    return state;
};