import * as ActionTypes from './ActionTypes';
export const Users = (state = {
    users: [], // initial state
    isUserLogin: false, // initial state
    loginedUser: { email: '', password: '', firstname: '', lastname: '', password: '' }
}, action) => {
    switch (action.type) {
        // add new user
        case ActionTypes.Add_USER:
            let user = action.payload;
            let length = state.users.length;
            user.id = length+1;
            return { ...state, users: state.users.concat(user) };

        // signin user
        case ActionTypes.SIGIN_USER:
            let signedUserComplete = action.payload.signedUserComplete;
            let isUserMatch = action.payload.isUserMatch;
            state.users=action.payload.users;
            console.log("signedUserComplete", signedUserComplete)
            console.log("nayadata", state.users)
            return { ...state, users: state.users, isUserLogin: isUserMatch, loginedUser: signedUserComplete };
        case ActionTypes.SIGNOUT_USER:
            return { ...state, users: state.users, isUserLogin: false, loginedUser: { email: '', password: '', firstname: '', lastname: '', password: '' } };
        default:
            return state;
    }
}