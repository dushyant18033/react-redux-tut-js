const loggedReducer = (state = false, action) =>
{
    console.log(state + ":" + action.type)
    switch(action.type)
    {
        case 'LOGIN':
            return true;
        case 'LOGOUT':
            return false;
        default:
            return state
    }
}

export default loggedReducer; // reducer for handling 'isLogged' state