import {ActionCreatorsType, StateType} from "./Types/AdminReducerTypes";

let startState: StateType = {
    users: ['user1']
};

const adminReducer = (state: StateType = startState, action: ActionCreatorsType): StateType => {
    switch (action.type) {
        case '1': {
            return {...state, users: [...state.users, 'user2']}
        }

        default:
            return state
    }
};

export default adminReducer