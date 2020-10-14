const SAVE_TOKEN_AUTH = "SAVE_TOKEN_AUTH";


let startState = {
    tariff: {}
};

const projectCreationReducer = (state = startState, action) => {
    switch (action.type) {
        case SAVE_TOKEN_AUTH: {
            return {...state, token: action.token}
        }
        default:
            return state
    }
};

// actionCreators
export let actionCreator = (x) => {
    return {type: SAVE_TOKEN_AUTH, x}
};
// actionCreators

// thunkCreators

export let thunkCreator = () => {
    return async (dispatch) => {
        let response = {tariff:true};
        if (response.status === 200) {
            dispatch(actionCreator(response));
        }
    }
};

// thunkCreators

export default projectCreationReducer