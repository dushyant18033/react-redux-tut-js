const counterReducer = (state = {count:0, value:1}, action) =>
{
    switch(action.type)
    {
        case 'INCREMENT':
            return {
                count: state.count + state.value,
                value: state.value
            }
        case 'DECREMENT':
            return {
                count: state.count - state.value,
                value: state.value
            }
        case 'RESET':
            return {
                count: 0,
                value: state.value
            }
        case 'SET_VALUE':
            return {
                count: state.count,
                value: action.value
            }
        default:
            return {
                count: state.count,
                value: state.value
            }
    }
}

export default counterReducer; // reducer for handling 'counter' state