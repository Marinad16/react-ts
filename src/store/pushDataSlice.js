// Initial state
const initialState = {
    pushes: [],
};

// Action type
const ADD_OBJECT_TO_ARRAY = 'myData/updatePushes';

// Reducer
export default function myDataReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_OBJECT_TO_ARRAY:
            console.log(state)
            return {
                ...state,
                pushes: [...state.pushes, action.payload],
            };
        default:
            return state;
    }
}

// Action creator
export function updatePushes(newPushes) {
    return {
        type: ADD_OBJECT_TO_ARRAY,
        payload: newPushes,
    };
}