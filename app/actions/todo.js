import * as types from '../constants/action-types';

export function get() {

    return {
        type: types.GET_TODOS,
        payload: {
            list: [{
                key: "2",
                text: "Get todos",
                done: false,
            }]
        }
    };
};

export function add(key, text) {
    return {
        type: types.ADD_TODO,
        payload: {
            key,
            text,
        }
    };
};