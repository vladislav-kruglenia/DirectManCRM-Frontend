let startState = {
    users: ['user1']
};

const adminReducer = (state = startState, action) => {
    switch (action.type) {
        case '1': {
            return {...state, users: [...state.users, 'user2']}
        }

        default:
            return state
    }
};

export default adminReducer